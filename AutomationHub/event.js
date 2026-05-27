/* ==========================================================================
   SIM MODULAR EVENT WEBSITE - REGISTRATION & AUTOMATION (event.js)
   Connects dynamically to Google Sheet and local CRM simulator state
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons on event page
    lucide.createIcons();
});

// Load the Google Apps Script Web App URL if the admin has configured it in index.html
let sheetsApiUrl = localStorage.getItem('sim_modular_sheets_api_url') || '';

function submitEventRegistration(event) {
    event.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const unit = document.getElementById('reg-unit').value;
    const titleKey = document.getElementById('reg-title').value;
    const qty = parseInt(document.getElementById('reg-qty').value);
    
    // Calculate Lead Score & Tier
    let score = 20;
    let tier = 'Thấp';
    let formattedTitle = 'SINH VIÊN THỰC TẬP Y KHOA';
    
    if (titleKey === 'Dean') {
        score = 100;
        tier = 'VIP (Đặc Biệt)';
        formattedTitle = 'TRƯỞNG KHOA RHM / BAN GIÁM HIỆU';
    } else if (titleKey === 'Lecturer') {
        score = 75;
        tier = 'Tiềm Năng Cao';
        formattedTitle = 'GIẢNG VIÊN CHUYÊN MÔN KHOA RHM';
    } else if (titleKey === 'Technician') {
        score = 50;
        tier = 'Trung Bình';
        formattedTitle = 'KỸ THUẬT VIÊN QUẢN LÝ PHÒNG MÁY';
    }
    
    if (qty >= 20) {
        score = Math.min(100, score + 10);
    }
    
    // Create new lead object
    const newLead = {
        id: 'lead_' + Date.now(),
        name: name,
        unit: unit,
        title: titleKey,
        qty: qty,
        score: score,
        tier: tier,
        status: 'Sent', // Set to 'Sent' because they are generating the ticket right now!
        timestamp: new Date().toLocaleString('vi-VN')
    };
    
    // 1. Sync to local database so index.html (CRM Dashboard) updates instantly
    const localLeads = JSON.parse(localStorage.getItem('sim_modular_leads')) || [];
    localLeads.push(newLead);
    localStorage.setItem('sim_modular_leads', JSON.stringify(localLeads));
    
    // 2. Async Sync to Google Sheet via deployed Apps Script URL
    if (sheetsApiUrl) {
        console.log("Submitting registration details directly to Google Sheet API...", sheetsApiUrl);
        fetch(sheetsApiUrl, {
            method: "POST",
            mode: "no-cors", // CORS bypass for Apps Script redirect
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLead)
        }).then(() => {
            console.log("Registration successfully pushed to Google Sheet!");
        }).catch(err => {
            console.warn("Failed to sync registration to Google Sheets:", err);
        });
    } else {
        console.log("No Google Sheets Apps Script URL configured in Admin Dashboard. Stored locally only.");
    }
    
    // 3. Populate ticket modal with registered guest details
    document.getElementById('t-name').textContent = name.toUpperCase();
    document.getElementById('t-unit').textContent = unit.toUpperCase();
    document.getElementById('t-title').textContent = formattedTitle;
    
    // Display Ticket Modal
    const modal = document.getElementById('ticket-modal');
    if (modal) {
        modal.style.display = 'flex';
        lucide.createIcons();
    }
}

function closeTicketModal() {
    const modal = document.getElementById('ticket-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.getElementById('event-register-form').reset();
}
