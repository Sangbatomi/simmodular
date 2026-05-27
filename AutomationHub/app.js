/* ==========================================================================
   SIM MODULAR SYSTEM - STATE & LOGIC SYSTEM (app.js)
   Features: CRM Data Model, Lead Scoring, Live TV & Sound check-in, PDF generator
   ========================================================================== */

// 1. Initialize State and Local Storage
let leads = JSON.parse(localStorage.getItem('sim_modular_leads')) || [];

// Run immediately upon loading
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Update system clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Check if empty, load default stats
    updateUI();
});

// Real-time time updater
function updateClock() {
    const timeElement = document.getElementById('system-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString('vi-VN');
    }
}

// 2. Tab Switcher Logic
function switchTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Show selected tab content
    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.add('active');
    
    // Set active class on nav button
    const activeNav = document.getElementById(`btn-tab-${tabId}`);
    if (activeNav) activeNav.classList.add('active');
    
    // Update header title/subtitle dynamically
    updateHeader(tabId);
    
    // Perform specialized render depending on target tab
    if (tabId === 'crm') {
        renderCRMTable();
    } else if (tabId === 'checkin') {
        populateCheckInSelector();
    } else if (tabId === 'proposal') {
        populateProposalSelector();
        generateProposalPreview();
    }
}

function updateHeader(tabId) {
    const title = document.getElementById('current-tab-title');
    const subtitle = document.getElementById('current-tab-subtitle');
    
    const meta = {
        dashboard: {
            title: "Bảng Điều Khiển Tổng Quan",
            sub: "Giám sát dải truyền thông tin và tự động hóa thời gian thực."
        },
        landing: {
            title: "Trang Đăng Ký Quan Tâm (Landing Page)",
            sub: "Trình giả lập thiết bị di động của khách hàng khi đăng ký thiết bị."
        },
        crm: {
            title: "Hệ Thống CRM & Lead Scoring",
            sub: "Tiếp nhận dữ liệu, tự động tính điểm tiềm năng và kích hoạt tin nhắn ZNS."
        },
        checkin: {
            title: "Trình Giả Lập Check-In Sự Kiện & Tivi Sony 65\"",
            sub: "Vận hành đón khách tại chỗ, tự động truyền tải thông điệp chào mừng."
        },
        proposal: {
            title: "Đề Xuất Kỹ Thuật & SLA Tự Động",
            sub: "Tạo lập báo giá PDF dựa trên quy mô phòng máy và in hồ sơ trực tiếp."
        }
    };
    
    if (title && subtitle && meta[tabId]) {
        title.textContent = meta[tabId].title;
        subtitle.textContent = meta[tabId].sub;
    }
}

// 3. Database & Load Mock Data
function loadMockData() {
    const mockLeads = [
        {
            id: 'lead_1',
            name: 'PGS.TS. Nguyễn Văn Hải',
            unit: 'Trường Đại học Y Dược Hải Phòng',
            title: 'Dean',
            qty: 16,
            score: 100,
            tier: 'VIP (Đặc Biệt)',
            status: 'Not Sent',
            timestamp: new Date().toLocaleString('vi-VN')
        },
        {
            id: 'lead_2',
            name: 'ThS. Lê Hoàng Nam',
            unit: 'Khoa Răng Hàm Mặt - Đại học Y Hà Nội',
            title: 'Lecturer',
            qty: 24,
            score: 75,
            tier: 'Tiềm Năng Cao',
            status: 'Sent',
            timestamp: new Date().toLocaleString('vi-VN')
        },
        {
            id: 'lead_3',
            name: 'KS. Trần Quốc Tuấn',
            unit: 'Bệnh viện Răng Hàm Mặt Trung Ương',
            title: 'Technician',
            qty: 8,
            score: 50,
            tier: 'Trung Bình',
            status: 'Not Sent',
            timestamp: new Date().toLocaleString('vi-VN')
        }
    ];
    
    leads = mockLeads;
    saveData();
    updateUI();
    alert("Nạp dữ liệu dự án mẫu thành công! Hãy kiểm tra tab CRM hoặc Check-In.");
    
    // Highlight step 2 in overview dashboard
    const ind2 = document.getElementById('ind-step-2');
    if (ind2) ind2.classList.add('active');
}

function saveData() {
    localStorage.setItem('sim_modular_leads', JSON.stringify(leads));
}

function clearLeads() {
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ dữ liệu Lead hiện tại?")) {
        leads = [];
        saveData();
        updateUI();
        if (document.getElementById('tab-crm').classList.contains('active')) {
            renderCRMTable();
        }
    }
}

// 4. Form Submission and Lead Scoring Engine
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('lp-name').value;
    const unit = document.getElementById('lp-unit').value;
    const titleKey = document.getElementById('lp-title').value;
    const qty = parseInt(document.getElementById('lp-qty').value);
    
    // Calculate Lead Score dynamically
    let score = 20; // Default base score
    let tier = 'Thấp';
    
    if (titleKey === 'Dean') {
        score = 100;
        tier = 'VIP (Đặc Biệt)';
    } else if (titleKey === 'Lecturer') {
        score = 75;
        tier = 'Tiềm Năng Cao';
    } else if (titleKey === 'Technician') {
        score = 50;
        tier = 'Trung Bình';
    }
    
    // Bonus points for large scale
    if (qty >= 20) {
        score = Math.min(100, score + 10);
    }
    
    const newLead = {
        id: 'lead_' + Date.now(),
        name: name,
        unit: unit,
        title: titleKey,
        qty: qty,
        score: score,
        tier: tier,
        status: 'Not Sent',
        timestamp: new Date().toLocaleString('vi-VN')
    };
    
    leads.push(newLead);
    saveData();
    updateUI();
    
    document.getElementById('landing-form').reset();
    
    alert(`Đăng ký thành công!\nKhách hàng: ${name}\nĐiểm Lead Tự động: ${score}/100 - Phân nhóm: ${tier}.\nHệ thống đã chuyển dữ liệu về CRM.`);
    
    // Dynamic dashboard flow update
    const ind2 = document.getElementById('ind-step-2');
    if (ind2) ind2.classList.add('active');
    
    // Switch to CRM tab automatically
    switchTab('crm');
}

// 5. CRM Table Renderer
function renderCRMTable() {
    const listContainer = document.getElementById('crm-lead-list');
    if (!listContainer) return;
    
    if (leads.length === 0) {
        listContainer.innerHTML = `
            <tr>
                <td colspan="8" class="empty-table">Chưa có khách hàng đăng ký. Hãy nhập dữ liệu ở Tab 1 hoặc nhấn nút nạp dữ liệu mẫu ở Dashboard!</td>
            </tr>
        `;
        return;
    }
    
    listContainer.innerHTML = leads.map(lead => {
        let titleName = 'Sinh viên';
        if (lead.title === 'Dean') titleName = 'Trưởng khoa / Hiệu trưởng';
        if (lead.title === 'Lecturer') titleName = 'Giảng viên chuyên môn';
        if (lead.title === 'Technician') titleName = 'Kỹ thuật viên phòng máy';
        
        let scoreClass = '';
        if (lead.score >= 90) scoreClass = 'vip';
        else if (lead.score >= 60) scoreClass = 'high';
        
        let statusClass = 'not-sent';
        let statusText = 'Chưa gửi vé QR';
        if (lead.status === 'Sent') {
            statusClass = 'sent';
            statusText = 'Đã gửi (Chờ Check-in)';
        } else if (lead.status === 'Checked In') {
            statusClass = 'checked-in';
            statusText = 'Đã Check-in';
        }
        
        const actionButton = lead.status === 'Not Sent' 
            ? `<button class="action-btn-zns" onclick="sendZNSTicket('${lead.id}')"><i data-lucide="send"></i> Gửi ZNS Vé QR</button>`
            : `<span class="badge-ticket sent"><i data-lucide="check"></i> Đã gửi</span>`;
            
        return `
            <tr>
                <td style="font-weight: 600;">${lead.name}</td>
                <td>${lead.unit}</td>
                <td>${titleName}</td>
                <td style="text-align: center; font-weight: 600;">${lead.qty}</td>
                <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-weight:700;">${lead.score}</span>
                        <div style="flex-grow:1; height:4px; background:rgba(255,255,255,0.05); border-radius:2px; overflow:hidden; width:60px;">
                            <div style="height:100%; width:${lead.score}%; background:var(--primary);"></div>
                        </div>
                    </div>
                </td>
                <td><span class="badge-lead ${scoreClass}">${lead.tier}</span></td>
                <td><span class="badge-ticket ${statusClass}">${statusText}</span></td>
                <td>${actionButton}</td>
            </tr>
        `;
    }).join('');
    
    lucide.createIcons();
}

function sendZNSTicket(leadId) {
    const lead = leads.find(l => l.id === leadId);
    if (lead) {
        lead.status = 'Sent';
        saveData();
        updateUI();
        renderCRMTable();
        alert(`Tin nhắn Zalo Cloud (ZNS) đã được gửi thành công đến Số điện thoại của ${lead.name}!\nNội dung: Đính kèm mã QR Code vé vào cửa phòng thực nghiệm Sim Modular.`);
        
        // Update flow in Dashboard
        const ind3 = document.getElementById('ind-step-3');
        if (ind3) ind3.classList.add('active');
    }
}

// 6. Check-in and TV Sony Screen Presentation
function populateCheckInSelector() {
    const selector = document.getElementById('checkin-guest-select');
    if (!selector) return;
    
    // Only allow guests who have "Sent" status (ready to check-in) or "Checked In" (can recheck)
    const activeGuests = leads.filter(l => l.status === 'Sent' || l.status === 'Checked In');
    
    if (activeGuests.length === 0) {
        selector.innerHTML = `<option value="">-- Chưa có khách mời có sẵn vé (Gửi ZNS ở Tab 2) --</option>`;
        return;
    }
    
    selector.innerHTML = activeGuests.map(g => `<option value="${g.id}">${g.name} - ${g.unit} [${g.status === 'Checked In' ? 'Đã check-in' : 'Sẵn sàng'}]</option>`).join('');
}

// Play a futuristic cyber beep using Web Audio API
function playBeepSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Laser sweep sound
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1400, audioCtx.currentTime + 0.15);
        
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.16);
    } catch(e) {
        console.log("Audio API not supported / requires interaction", e);
    }
}

function triggerCheckIn() {
    const selector = document.getElementById('checkin-guest-select');
    const guestId = selector.value;
    
    if (!guestId) {
        alert("Vui lòng nạp dữ liệu mẫu và Gửi ZNS vé QR tại Tab 2 trước!");
        return;
    }
    
    const lead = leads.find(l => l.id === guestId);
    if (lead) {
        // Change status to Checked In
        lead.status = 'Checked In';
        saveData();
        updateUI();
        populateCheckInSelector();
        
        // Play beep sound for wow factor
        playBeepSound();
        
        // Trigger TV Welcome display
        const standbyScreen = document.querySelector('.tv-standby-screen');
        const welcomeContent = document.getElementById('tv-welcome-content');
        const welcomeName = document.getElementById('welcome-name');
        const welcomeUnit = document.getElementById('welcome-unit');
        
        if (standbyScreen && welcomeContent && welcomeName && welcomeUnit) {
            standbyScreen.style.display = 'none';
            welcomeContent.style.display = 'flex';
            
            // Format name in uppercase
            welcomeName.textContent = lead.name.toUpperCase();
            
            let titleText = 'SINH VIÊN THỰC TẬP';
            if (lead.title === 'Dean') titleText = 'BAN GIÁM HIỆU / TRƯỞNG KHOA';
            if (lead.title === 'Lecturer') titleText = 'GIẢNG VIÊN CHUYÊN MÔN KHOA RHM';
            if (lead.title === 'Technician') titleText = 'KỸ THUẬT VIÊN THIẾT BỊ Y TẾ';
            
            welcomeUnit.innerHTML = `${titleText}<br>${lead.unit.toUpperCase()}`;
        }
        
        // Update Dashboard step 3 indicator
        const ind3 = document.getElementById('ind-step-3');
        if (ind3) ind3.classList.add('active');
        
        // Trigger dashboard step 4 as active since event check-in occurred
        const ind4 = document.getElementById('ind-step-4');
        if (ind4) ind4.classList.add('active');
    }
}

// 7. Dynamic PDF Proposal Builder
function populateProposalSelector() {
    const selector = document.getElementById('proposal-guest-select');
    if (!selector) return;
    
    // Only allow Checked In guests to generate proposal
    const checkedInGuests = leads.filter(l => l.status === 'Checked In');
    
    if (checkedInGuests.length === 0) {
        selector.innerHTML = `<option value="">-- Chưa có khách hàng check-in (Check-in ở Tab 3) --</option>`;
        return;
    }
    
    selector.innerHTML = checkedInGuests.map(g => `<option value="${g.id}">${g.name} - ${g.unit}</option>`).join('');
}

function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

function generateProposalPreview() {
    const selector = document.getElementById('proposal-guest-select');
    const guestId = selector.value;
    
    const clientName = document.getElementById('pdf-client-name');
    const clientUnit = document.getElementById('pdf-client-unit');
    const clientSig = document.getElementById('pdf-client-sig');
    const tableBody = document.getElementById('pdf-table-body');
    const totalPriceEl = document.getElementById('pdf-total-price');
    
    if (!guestId) {
        clientName.textContent = "Chưa có dữ liệu";
        clientUnit.textContent = "Chưa có dữ liệu";
        clientSig.textContent = "Chưa có dữ liệu";
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Vui lòng chọn khách hàng đã Check-in ở thanh cấu hình bên trái!</td></tr>`;
        totalPriceEl.textContent = "0 VND";
        return;
    }
    
    const lead = leads.find(l => l.id === guestId);
    if (lead) {
        clientName.textContent = lead.name;
        clientUnit.textContent = `${lead.unit}`;
        clientSig.textContent = lead.name;
        
        // Define pricing
        const instructorUnitCost = 750000000; // 750M
        const studentUnitCost = 350000000;    // 350M
        const accessoriesCost = 26000000;     // 26M (Sony TV, routers, cabling)
        
        // Calculations
        const instQty = 1;
        const studQty = lead.qty;
        
        const instTotal = instructorUnitCost * instQty;
        const studTotal = studentUnitCost * studQty;
        
        const grandTotal = instTotal + studTotal + accessoriesCost;
        
        // Populate table lines
        tableBody.innerHTML = `
            <tr>
                <td style="text-align: center;">1</td>
                <td>
                    <strong>Hệ thống ghế răng mô phỏng dùng cho giảng viên Sim Modular (Instructor Workstation)</strong><br>
                    <span style="font-size: 10px; color: #64748b;">Tích hợp mâm nha sỹ 5+1 vị trí, bàn giáo viên chuyên dụng, camera ghi hình thao tác cận cảnh, hệ thống điều phối đa phương tiện EBS Instructor Model kết nối đồng bộ 6 cổng DVI, cảm biến đèn LEDlight Plus, ghế bác sỹ (02 bộ).</span>
                </td>
                <td style="text-align: center; font-weight: 600;">${instQty}</td>
                <td>${formatCurrency(instructorUnitCost)}</td>
                <td style="font-weight: 600;">${formatCurrency(instTotal)}</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td>
                    <strong>Hệ thống ghế răng mô phỏng dùng cho sinh viên Sim Modular (Student Workstation)</strong><br>
                    <span style="font-size: 10px; color: #64748b;">Tích hợp mâm nha sỹ 5 vị trí, bàn sinh viên chống hóa chất đúc khối, mâm trợ thủ 4 vị trí kèm 2 đầu ống hút khớp xoay linh hoạt, hệ EBS Student Module tích hợp, màn hình tại chỗ LCD 24", ghế bác sỹ thực tập (02 bộ).</span>
                </td>
                <td style="text-align: center; font-weight: 600;">${studQty}</td>
                <td>${formatCurrency(studentUnitCost)}</td>
                <td style="font-weight: 600;">${formatCurrency(studTotal)}</td>
            </tr>
            <tr>
                <td style="text-align: center;">3</td>
                <td>
                    <strong>Hệ thống kết nối nghe nhìn, trình chiếu lớp học (Visual Accessories Pack)</strong><br>
                    <span style="font-size: 10px; color: #64748b;">01 Hệ thống màn hình Smart TV lớn Sony 65" 4K (K-65S25VM2), hệ thống loa âm thanh vòm 20W tích hợp, bộ truyền dẫn tín hiệu EBS Central Unit AZ 32 bản mạch I/O Cards, hệ dây cáp đồng bộ chuyên dụng truyền hình ảnh không trễ âm sàn.</span>
                </td>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td>${formatCurrency(accessoriesCost)}</td>
                <td style="font-weight: 600;">${formatCurrency(accessoriesCost)}</td>
            </tr>
        `;
        
        totalPriceEl.textContent = formatCurrency(grandTotal);
        
        // Update stats
        const generatedCount = leads.filter(l => l.status === 'Checked In').length;
        const statProposals = document.getElementById('stat-proposals-sent');
        if (statProposals) statProposals.textContent = generatedCount;
    }
}

function printProposal() {
    window.print();
}

// 8. Stats Updater for Overview Dashboard
function updateUI() {
    const totalLeadsEl = document.getElementById('stat-total-leads');
    const checkedInEl = document.getElementById('stat-checked-in');
    const proposalsEl = document.getElementById('stat-proposals-sent');
    
    const countTotal = leads.length;
    const countCheckedIn = leads.filter(l => l.status === 'Checked In').length;
    const countProposals = countCheckedIn; // Auto-generated for checked-in leads
    
    if (totalLeadsEl) totalLeadsEl.textContent = countTotal;
    if (checkedInEl) checkedInEl.textContent = countCheckedIn;
    if (proposalsEl) proposalsEl.textContent = countProposals;
    
    // Update step indicators on dashboard based on counts
    const ind2 = document.getElementById('ind-step-2');
    const ind3 = document.getElementById('ind-step-3');
    const ind4 = document.getElementById('ind-step-4');
    
    if (ind2) {
        if (countTotal > 0) ind2.classList.add('active');
        else ind2.classList.remove('active');
    }
    if (ind3) {
        const hasSentOrCheckedIn = leads.some(l => l.status === 'Sent' || l.status === 'Checked In');
        if (hasSentOrCheckedIn) ind3.classList.add('active');
        else ind3.classList.remove('active');
    }
    if (ind4) {
        if (countCheckedIn > 0) ind4.classList.add('active');
        else ind4.classList.remove('active');
    }
}
