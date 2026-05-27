# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD)
## Kế Hoạch Giới Thiệu & Đấu Thầu Hệ Thống Ghế Răng Mô Phỏng Sim Modular

> [!NOTE]
> Tài liệu này được xây dựng dựa trên dữ liệu kỹ thuật thực tế từ các tài liệu catalog, hướng dẫn vận hành của hệ thống ghế răng mô phỏng **Sim Modular** tích hợp thiết bị **Dentsply Sirona (Đức)**, hệ thống truyền dẫn đa phương tiện tương tác **EBS (Đức)**, Tivi chuyên dụng **Sony (Nhật Bản/Việt Nam)** và hồ sơ đáp ứng kỹ thuật của dự án đấu thầu thực tế tại **Trường Đại học Y Dược Hải Phòng**.

---

## 1. TỔNG QUAN DỰ ÁN & MỤC TIÊU CHIẾN LƯỢC

### 1.1. Bối cảnh dự án (Target Project Context)
*   **Chủ đầu tư:** Trường Đại học Y Dược Hải Phòng.
*   **Tên gói thầu:** Gói thầu số 02: Mua sắm hệ thống ghế răng mô phỏng (thuộc kế hoạch lựa chọn nhà thầu mua sắm tài sản, trang thiết bị năm 2025).
*   **Giá gói thầu mục tiêu:** **6.926.000.000 VND** *(Sáu tỷ chín trăm hai mươi sáu triệu đồng)*.
*   **Hình thức & Phương thức thầu:** Đấu thầu rộng rãi qua mạng, Một giai đoạn một túi hồ sơ.
*   **Thời gian triển khai:** Bắt đầu từ Tháng 11/2025 (Quý IV/2025).
*   **Thời gian thực hiện hợp đồng:** 150 ngày kể từ ngày hợp đồng có hiệu lực.
*   **Tiêu chuẩn chất lượng cốt lõi:** Thiết bị chính đạt tiêu chuẩn **ISO 13485** (Hệ thống quản lý chất lượng trang thiết bị y tế).

### 1.2. Định vị sản phẩm Sim Modular (Product Positioning)
Hệ thống **Sim Modular** được định vị là dòng sản phẩm **phân khúc cao cấp (Premium/High-end)** dành cho việc giảng dạy và thực tập nha khoa lâm sàng tại các trường Đại học Y Dược hàng đầu. 
*   **Sự đồng bộ vượt trội:** Tích hợp đồng bộ giữa phần cứng mô phỏng bệnh nhân bằng điện điện học, hệ thống tay khoan nha khoa cao cấp từ thương hiệu Dentsply Sirona (Đức) và hệ thống truyền dẫn tín hiệu đa phương tiện EBS (Đức) thời gian thực không độ trễ.
*   **Giải pháp toàn diện:** Giải quyết triệt để bài toán kết nối tương tác trực quan 1-N giữa Giảng viên và Sinh viên mà không cần phụ thuộc vào hạ tầng mạng LAN/WLAN của nhà trường (loại bỏ hoàn toàn rủi ro nghẽn mạng, trễ hình ảnh hoặc rò rỉ dữ liệu).

---

## 2. KIẾN TRÚC HỆ THỐNG KẾT NỐI TƯƠNG TÁC (EBS MULTIMEDIA SYSTEM)

Trọng tâm công nghệ của Sim Modular là hệ thống tương tác đa phương tiện **EBS** kết nối đồng bộ giữa Trạm Giảng viên (Instructor Station) và các Trạm Sinh viên (Student Station) thông qua Bộ chia tín hiệu trung tâm **Central Unit AZ 32**.

```mermaid
graph TD
    %% Nodes
    InstructorHub["Instructor Hub (EBS Instructor Model)<br>6x DVI, RS232, Mini-DIN"]
    CentralUnit["Central Unit AZ 32<br>(Hỗ trợ tối đa 17 khe cắm I/O Cards, Công suất 300W)"]
    StudentHub1["Student Hub 1 (EBS Student Module)<br>3x DVI, Mini-DIN"]
    StudentHub2["Student Hub 2 (EBS Student Module)<br>3x DVI, Mini-DIN"]
    StudentHubN["Student Hub N (EBS Student Module)<br>3x DVI, Mini-DIN"]
    
    InstructorMonitor["Màn hình Giảng viên & TV Sony 65' 4K"]
    InstructorCamera["Camera theo dõi Giảng viên / Kính hiển vi / Cerec"]
    StudentMonitor1["Màn hình Sinh viên 24' (Trạm 1)"]
    StudentMonitor2["Màn hình Sinh viên 24' (Trạm 2)"]
    StudentMonitorN["Màn hình Sinh viên 24' (Trạm N)"]

    %% Connections
    InstructorCamera -->|Tín hiệu hình ảnh cực nét| InstructorHub
    InstructorHub <=>|Truyền dẫn đồng bộ thời gian thực| CentralUnit
    CentralUnit <=>|Bản mạch I/O Card| StudentHub1
    CentralUnit <=>|Bản mạch I/O Card| StudentHub2
    CentralUnit <=>|Bản mạch I/O Card| StudentHubN
    
    InstructorHub -->|Hiển thị nội dung giảng dạy| InstructorMonitor
    StudentHub1 -->|Hiển thị / Tương tác| StudentMonitor1
    StudentHub2 -->|Hiển thị / Tương tác| StudentMonitor2
    StudentHubN -->|Hiển thị / Tương tác| StudentMonitorN

    %% Styling
    style InstructorHub fill:#2c3e50,stroke:#34495e,stroke-width:2px,color:#fff
    style CentralUnit fill:#16a085,stroke:#1abc9c,stroke-width:2px,color:#fff
    style StudentHub1 fill:#2980b9,stroke:#3498db,stroke-width:2px,color:#fff
    style StudentHub2 fill:#2980b9,stroke:#3498db,stroke-width:2px,color:#fff
    style StudentHubN fill:#2980b9,stroke:#3498db,stroke-width:2px,color:#fff
    style InstructorMonitor fill:#d35400,stroke:#e67e22,stroke-width:2px,color:#fff
```

### Các tính năng cốt lõi của Bộ điều khiển đa phương tiện EBS:
1.  **Truyền tải thời gian thực (Real-time Transmission):** Tín hiệu hình ảnh được truyền tải tức thời, hoàn toàn không có độ trễ (zero lag), không nén dữ liệu và giữ nguyên độ phân giải gốc của nguồn phát (từ camera giảng viên, Cerec/Primescan hoặc kính hiển vi).
2.  **Kết nối đồng bộ thuần cáp chuyên dụng:** Kết nối thông qua cổng DVI / Sub-D 9-pin / Mini-DIN. Không sử dụng hoặc phụ thuộc vào mạng LAN/WLAN nội bộ của cơ sở giáo dục.
3.  **Tương tác đa chiều linh hoạt:**
    *   Gửi tín hiệu bài giảng từ màn hình giảng viên tới từng sinh viên riêng lẻ hoặc toàn bộ lớp học.
    *   Truyền tải hình ảnh trực tiếp từ camera kỹ thuật số, hệ thống Cerec/Primescan hoặc kính hiển vi của giảng viên đến tất cả màn hình sinh viên.
    *   Xem tín hiệu thực hành từ bất kỳ trạm sinh viên nào (khi sinh viên được trang bị camera trạm).
    *   Phát tín hiệu của một sinh viên tiêu biểu đến màn hình của cá nhân khác, nhóm hoặc toàn bộ lớp học để phân tích bài học.
    *   Chức năng "Làm tối tất cả màn hình" (Darken all screens) để giảng viên thu hút sự chú ý của sinh viên khi cần thuyết trình trực tiếp.
    *   Màn hình bộ điều khiển cảm ứng trực quan, thao tác chuyển đổi nguồn phát chỉ bằng một chạm.

---

## 3. THÔNG SỐ KỸ THUẬT CHI TIẾT CỦA CÁC THÀNH PHẦN HỆ THỐNG

### 3.1. Trạm Giảng Viên (Instructor Workstation)
Được trang bị đầy đủ các công cụ giảng dạy trực quan, giám sát và truyền phát thông tin lớp học.

| STT | Thành phần chính | Thông số kỹ thuật chi tiết | Minh chứng & Tài liệu tham chiếu |
| :---: | :--- | :--- | :--- |
| **1** | **Hệ thống mô phỏng bệnh nhân** | - Model: **Sim Modular**<br>- Cơ chế: Điều chỉnh độ cao và góc nghiêng của mô hình hoàn toàn bằng điện (Electric height and tilt adjustment).<br>- Điều khiển: Thông qua nút bấm trên mâm nha khoa hoặc bằng công tắc chân (bàn đạp) điện tử C+ 4 hướng.<br>- Áp lực nước sử dụng: Tối đa 6.0 Bar (Dải hoạt động tại chỗ: 2.5 - 6.0 Bar, lưu lượng $\ge$ 2.5 lít/phút).<br>- Áp suất khí nén sử dụng: Tối đa 7.5 Bar (Dải hoạt động tại chỗ: 5.5 - 7.5 Bar, lưu lượng $\ge$ 50 lít/phút). | *Tài liệu Simulation Unit Instructions for use / Trang 20 (Technical data) & Trang 54 (Mục 4.1.2)* |
| **2** | **Hệ thống mâm tay khoan giáo viên** | - Số vị trí dụng cụ: **5+1 vị trí** (dành cho tay khoan nhanh, động cơ điện/khí, tay cạo vôi, tay xịt 3 chức năng và camera nội nha).<br>- Tích hợp hệ thống tay xịt 3 chức năng Sprayvit E cao cấp (nước bên phải).<br>- Bảng điều khiển tích hợp (EasyPad hoặc EasyTouch) cho phép lập trình tối thiểu các chức năng nâng/hạ, thay đổi góc nghiêng mô hình, độ sáng đèn và lập trình sẵn tối thiểu **2 vị trí nhớ** (chương trình S, 0, 1, 2). | *Tài liệu Simulation Unit / Trang 7 (Dentist's element) & Instructions for use / Trang 35-36, 82* |
| **3** | **Bàn đạp điều khiển** | - Model: **C+ electronic foot control**.<br>- Tính năng: Điều khiển mô hình chuyển động 4 hướng, có chức năng tắt/bật nước tay khoan (phun sương) độc lập và kích hoạt phanh dừng chuyển động khẩn cấp khi gạt switch plate theo bất kỳ hướng nào. | *Tài liệu Simulation Unit Instructions for use / Trang 62-66 (Mục 4.3.2 & 4.4)* |
| **4** | **Hệ thống đèn nha khoa** | - Model: **LEDlight Plus**.<br>- Cường độ sáng: **Lên đến 30.000 Lux**.<br>- Khả năng điều chỉnh: **5 mức cường độ sáng**.<br>- Công nghệ điều khiển: Tích hợp **cảm biến không chạm (non-touch sensor)** bên dưới đèn, cho phép bật/tắt hoặc chuyển chế độ composite chỉ bằng cử động gạt tay nhẹ nhàng. | *Tài liệu Simulation Unit / Trang 8 (Treatment lights) & Instructions for use / Trang 36, 131-132* |
| **5** | **Hệ thống mâm trợ thủ** | - Thiết kế: Mâm trợ thủ có **4 vị trí** công cụ.<br>- Cấu hình: 01 tay xịt nước/hơi, **02 ống hút dịch** (ống hút lớn và ống hút nhỏ).<br>- Tính năng ống hút: Đầu hút có thể xoay khớp nối để điều chỉnh hướng hút và góc gập dễ dàng, tăng sự linh hoạt khi thao tác lâm sàng. | *Tài liệu Simulation Unit / Trang 7 (Assistant's element) & Operating Instruction / Trang 119* |
| **6** | **Màn hình hiển thị tại chỗ** | - Kích thước: **$\ge$ 24 inch** (dành cho giảng viên quan sát trực tiếp tại bàn). | *Tài liệu cam kết đáp ứng kỹ thuật* |
| **7** | **Màn hình TV trình chiếu lớn** | - Model: **Sony K-65S25VM2** (Xuất xứ: Việt Nam).<br>- Kích thước: **65 inch**, độ phân giải **4K Ultra HD**, tấm nền LED, tần số quét **60Hz**.<br>- Kết nối không dây/Internet: Wi-Fi 5, Bluetooth 5.3, cổng LAN RJ45.<br>- Cổng kết nối âm thanh/hình ảnh: 4 cổng HDMI (tích hợp 1 cổng eARC), 1 cổng quang Optical (Digital Audio), 2 cổng USB-A.<br>- Hệ thống âm thanh: Tổng công suất loa **20W**. | *Tài liệu Catalog Tivi Sony / Trang 1-3* |
| **8** | **Thiết bị ghi hình bài giảng** | - 01 Camera theo dõi gắn khớp định vị chuyển động linh hoạt tại trạm giảng viên để quay cận cảnh các thao tác thực hành trên mẫu hàm của giáo viên. | *Tài liệu cam kết đáp ứng kỹ thuật* |
| **9** | **Nội thất đi kèm** | - 01 Bàn giáo viên chuyên dụng tích hợp hệ thống đi dây ngầm thẩm mỹ.<br>- 02 Ghế nha sỹ cao cấp điều chỉnh độ cao linh hoạt cho giáo viên và trợ thủ. | *Tài liệu cam kết đáp ứng kỹ thuật* |

### 3.2. Trạm Sinh Viên Thực Tập (Student Workstation)
Được tối ưu hóa diện tích sử dụng, đảm bảo tính bền bỉ cao phục vụ học tập cường độ lớn của sinh viên.

| STT | Thành phần chính | Thông số kỹ thuật chi tiết | Minh chứng & Tài liệu tham chiếu |
| :---: | :--- | :--- | :--- |
| **1** | **Hệ thống mô phỏng bệnh nhân** | - Model: **Sim Modular**.<br>- Đồng nhất thông số kỹ thuật với Trạm Giảng viên: Nâng hạ và nghiêng bằng điện, bàn đạp điều khiển chuyển động, áp lực nước dải hoạt động tối đa 6 Bar, áp suất khí dải hoạt động tối đa 7.5 Bar. | *Tài liệu Simulation Unit Instructions for use / Trang 20 & 54* |
| **2** | **Hệ thống mâm nha khoa sinh viên** | - Số vị trí dụng cụ: **5 vị trí** (tay khoan nhanh, tay khoan chậm, tay cạo vôi, tay xịt và vị trí chờ).<br>- Tích hợp bàn phím điều khiển EasyPad điều chỉnh mô hình bệnh nhân, đèn nha khoa, lưu trữ 2 chương trình tư thế mô hình tự động. | *Tài liệu Simulation Unit / Trang 7 & Instructions for use / Trang 35-36* |
| **3** | **Hệ thống đèn nha khoa** | - Model: **LEDlight Plus** cường độ sáng lên đến 30.000 Lux, điều chỉnh 5 cấp độ bằng cảm biến tiệm cận không chạm. | *Tài liệu Simulation Unit / Trang 8 & Instructions for use / Trang 131-132* |
| **4** | **Hệ thống mâm trợ thủ** | - Thiết kế 4 vị trí dụng cụ, tích hợp 01 tay xịt và 02 ống hút dịch lớn/nhỏ có khớp xoay điều chỉnh góc độ linh hoạt. | *Tài liệu Simulation Unit / Trang 7 & Operating Instruction / Trang 119* |
| **5** | **Màn hình hiển thị bài giảng** | - Kích thước: **24 inch** dùng để sinh viên quan sát trực tiếp bài giảng truyền phát từ giáo viên theo thời gian thực. | *Tài liệu cam kết đáp ứng kỹ thuật* |
| **6** | **Nội thất đi kèm** | - 01 Bàn sinh viên thiết kế module gọn gàng, vật liệu chống nước, chống hóa chất nha khoa.<br>- 02 Ghế nha sỹ di động điều chỉnh chiều cao bằng piston hơi bền bỉ. | *Tài liệu cam kết đáp ứng kỹ thuật* |

### 3.3. Hệ thống phụ kiện tay khoan cao cấp (Handpieces - Dentsply Sirona)
Toàn bộ trạm giảng viên và sinh viên đều được trang bị cấu hình phụ kiện tay khoan đồng bộ của hãng **Dentsply Sirona (Đức)**:

> [!TIP]
> Việc sử dụng vòng bi bằng gốm sứ (Ceramic ball bearings) trên tay khoan nhanh giúp giảm thiểu ma sát sinh nhiệt, tăng tuổi thọ thiết bị gấp 3 lần so với vòng bi thép thông thường và giảm thiểu độ ồn vận hành đáng kể, tạo môi trường học tập yên tĩnh chuyên nghiệp.

1.  **Tay khoan nhanh (High-speed turbine) - T3 Racer Midwest:**
    *   *Số tia phun sương giải nhiệt:* **4 tia phun sương** (đảm bảo làm mát mẫu hàm/răng tối ưu).
    *   *Công nghệ vòng bi:* **Vòng bi gốm sứ** (Robust ceramic ball bearings) chịu nhiệt và chịu lực cực cao.
    *   *Cơ chế tháo lắp mũi khoan:* **Chuck bấm** (Push-button chuck) tiện lợi, an toàn.
    *   *Công suất tối đa:* Lên đến **30W** (lực cắt mạnh mẽ, ổn định).
    *   *Tốc độ quay không tải:* Xấp xỉ **400.000 vòng/phút**.
    *   *Kích thước đầu tay khoan:* Đường kính đầu cực nhỏ **$\le$ 11.9 mm**, chiều cao đầu **$\le$ 13.0 mm** giúp tăng tối đa tầm nhìn trong miệng bệnh nhân mô phỏng.
2.  **Tay khoan chậm (Contra-angle handpiece - Tay khoan khuỷu) - T4 Line B 40:**
    *   *Tỷ số truyền chuyển động:* **1:1** (đồng tốc).
    *   *Tốc độ quay tối đa:* **40.000 vòng/phút**.
    *   *Cơ chế khóa:* **Chuck bấm** tiện lợi.
    *   *Kích thước đầu:* Đường kính đầu siêu nhỏ xấp xỉ **8.7 mm**, chiều cao đầu **12.4 mm**.
3.  **Tay khoan thẳng (Straight handpiece) - T4 Line BH 40:**
    *   *Tỷ số truyền chuyển động:* **1:1** (đồng tốc).
    *   *Tốc độ quay tối đa:* **40.000 vòng/phút** (dùng cho các thao tác mài chỉnh ngoài miệng).
4.  **Động cơ hơi (Air Motor) - T4 Line Air Motor M:**
    *   *Tốc độ quay tối đa:* Xấp xỉ **22.000 vòng/phút** (kết nối trực tiếp với tay khoan chậm khuỷu và thẳng).
5.  **Tay cạo vôi siêu âm (Ultrasonic Scaler):** Tích hợp sâu vào hệ thống mâm tay khoan, điều khiển bằng bàn đạp chân.

---

## 4. QUY TRÌNH TRIỂN KHAI & DỊCH VỤ HẬU MÃI (GOLD SERVICES)

Để chiến thắng gói thầu trị giá **6.926.000.000 VND** tại Trường Đại học Y Dược Hải Phòng, kế hoạch giới thiệu sản phẩm và cung cấp dịch vụ phải đáp ứng vượt trội các tiêu chí sau:

### 4.1. Cam kết chất lượng hàng hóa khi bàn giao
*   Hàng hóa cung cấp mới **100%**, năm sản xuất **từ năm 2025 trở về sau**.
*   Đầy đủ giấy tờ pháp lý nhập khẩu: Chứng nhận xuất xứ (**C/O**), Chứng nhận chất lượng (**C/Q**), Tờ khai hải quan, Phiếu đóng gói (Packing List), Hóa đơn thương mại (Invoice), Vận tải đơn (Bill of Lading).
*   Đầy đủ tài liệu Hướng dẫn sử dụng chi tiết bằng **tiếng Anh và bản dịch thuật tiếng Việt chuẩn chuyên ngành Nha khoa**.

### 4.2. Chính sách bảo hành và bảo trì vượt trội (Vàng)
*   **Bảo hành chính hãng:** **12 tháng** toàn bộ hệ thống kể từ ngày nghiệm thu bàn giao và đưa vào sử dụng.
*   **Bảo trì định kỳ đặc biệt:** Thực hiện bảo trì, bảo dưỡng hệ thống **03 tháng/lần** trong suốt thời gian bảo hành hoàn toàn miễn phí.
*   **Hỗ trợ kỹ thuật khẩn cấp:** Cam kết có mặt để xử lý sự cố kỹ thuật tại trường Đại học Y Dược Hải Phòng trong vòng **2-4 giờ** kể từ khi nhận được yêu cầu của người sử dụng.
*   **Cam kết vòng đời linh kiện dài hạn:** Nhà thầu cam kết bằng văn bản về việc cung cấp vật tư tiêu hao và phụ tùng thay thế chính hãng trong vòng tối thiểu **08 năm** (đáp ứng đúng thời gian hao mòn tài sản cố định theo Thông tư số 23/2023/TT-BTC của Bộ Tài chính).

### 4.3. Kế hoạch đào tạo và chuyển giao công nghệ
*   **Giai đoạn 1: Lắp đặt & Cân chỉnh:** Đội ngũ kỹ sư chuyên nghiệp thực hiện lắp đặt hệ thống đi dây âm sàn thẩm mỹ, đo đạc áp lực nước/khí nén đạt chuẩn hoạt động tối ưu.
*   **Giai đoạn 2: Đào tạo Giảng viên:** Tổ chức khóa huấn luyện chuyên sâu cho toàn bộ giảng viên Khoa Răng Hàm Mặt về cách sử dụng phần mềm và phần cứng tương tác EBS, cách thiết lập các góc quay camera, truyền hình ảnh bài giảng và giám sát sinh viên thực hành lâm sàng.
*   **Giai đoạn 3: Đào tạo Kỹ thuật viên:** Hướng dẫn vận hành, bảo quản hàng ngày và quy trình bảo trì, sửa chữa các lỗi cơ bản cho nhân viên kỹ thuật phòng máy của trường Đại học.

---

## 5. KẾ HOẠCH MARKETING & HỖ TRỢ ĐẤU THẦU (LAUNCH STRATEGY)

Để đưa sản phẩm **Sim Modular** thâm nhập thành công và khẳng định vị thế dẫn đầu công nghệ, các bước hành động cụ thể bao gồm:

```
[Quy IV/2025]              [Tháng 11/2025]            [Năm 2026 trở đi]
   +--------------------+     +--------------------+     +--------------------+
   | Biên dịch Brochure |     | Tổ chức Demo thực tế|     | Chăm sóc sau bán   |
   | & Việt hóa HDSD    | --> | tại ĐH Y Dược HP   | --> | Bảo trì 3 tháng/lần|
   | kỹ thuật chi tiết  |     | Trải nghiệm EBS    |     | Cung cấp phụ tùng  |
   +--------------------+     +--------------------+     +--------------------+
```

1.  **Hoàn thiện bộ tài liệu kỹ thuật và tiếp thị thương mại:** Biên dịch chuyên nghiệp các tài liệu từ catalog gốc của Sim Modular, đèn LEDlight Plus, tay khoan T3/T4 Dentsply Sirona sang tiếng Việt để chuẩn bị hồ sơ thầu hoàn hảo nhất.
2.  **Tổ chức buổi Demo trải nghiệm thực tế (Live Hands-on Workshop):** 
    *   Vận chuyển và lắp đặt thử nghiệm 01 bộ hệ thống Sim Modular (gồm trạm giảng viên, trạm sinh viên kết nối qua bộ EBS Central Unit AZ 32) trực tiếp tại Khoa Răng Hàm Mặt của Trường Đại học Y Dược Hải Phòng.
    *   Mời Ban giám hiệu và các trưởng bộ môn thực hành lâm sàng trực tiếp trải nghiệm tính năng truyền hình ảnh không độ trễ của hệ thống EBS và độ êm ái khi cắt của tay khoan T3 Racer Midwest.
3.  **Xây dựng bộ thông số kỹ thuật tiêu chuẩn (E-HSMT Benchmark):** Hỗ trợ tư vấn kỹ thuật cho các trường Đại học xây dựng cấu hình thiết bị hiện đại, giúp đưa các tiêu chuẩn chất lượng cao như *ISO 13485*, *vòng bi gốm sứ*, *truyền hình ảnh thời gian thực không qua mạng LAN*, *độ sáng đèn 30.000 Lux có cảm biến không chạm* thành các tiêu chuẩn kỹ thuật bắt buộc để khẳng định chất lượng vượt trội của Sim Modular.
