# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD) - PHÂN KHÚC CHUYÊN GIA
# HỆ THỐNG GHẾ RĂNG MÔ PHỎNG NHA KHOA THẾ HỆ MỚI – SIM MODULAR

---

## MỤC LỤC
1. **Tầm nhìn & Định vị chiến lược sản phẩm (Vision & Positioning)**
2. **Chân dung người dùng mục tiêu (User Personas & Pain Points)**
3. **Bản đồ phân hệ kiến trúc hệ thống (System Subsystem Map)**
4. **Yêu cầu kỹ thuật chức năng chi tiết (Detailed Functional Requirements)**
    * 4.1. Phân hệ Cơ học & Động học mô phỏng bệnh nhân (Patient Simulator Subsystem)
    * 4.2. Phân hệ Mâm điều trị & Trợ thủ (Dentist & Assistant Elements Subsystem)
    * 4.3. Phân hệ Truyền thông Đa phương tiện tương tác thời gian thực (EBS Interactive Subsystem)
    * 4.4. Phân hệ Phụ kiện tay khoan động lực học (Dentsply Sirona Dynamics Subsystem)
    * 4.5. Phân hệ Trình chiếu quy mô lớn (Sony 4K Display Subsystem)
5. **Yêu cầu phi chức năng (Non-functional Requirements)**
    * 5.1. Thiết kế Công thái học & An toàn (Ergonomics & Safety)
    * 5.2. Độ tin cậy & Khả năng bảo trì (Reliability & Maintainability)
    * 5.3. Đáp ứng tiêu chuẩn Quốc tế (Compliance & Standards)
6. **Kế hoạch triển khai kỹ thuật & SLA dịch vụ hậu mãi (Deployment & SLA)**
7. **Chiến lược thâm nhập thị trường & Hỗ trợ đấu thầu (Go-To-Market & Bid Strategy)**

---

## 1. TẦM NHÌN & ĐỊNH VỊ CHIẾN LƯỢC SẢN PHẨM

### 1.1. Tầm nhìn sản phẩm (Product Vision)
Trong đào tạo Nha khoa hiện đại, khoảng cách giữa giảng đường lý thuyết và lâm sàng thực tế luôn là thách thức lớn nhất. Các hệ thống thực hành dạng bàn tĩnh truyền thống không phản ánh được tư thế làm việc chuẩn của nha sỹ và cấu trúc sinh cơ học của bệnh nhân. 

**Sim Modular** ra đời với sứ mệnh **"Lâm sàng hóa giảng đường"**, thiết lập một hệ thống mô phỏng nha khoa module hóa toàn diện, đồng bộ hóa sâu sắc giữa cơ học công thái học, động học khí - thủy lực nha khoa Đức (Dentsply Sirona) và hệ thống truyền dẫn đa phương tiện EBS truyền phát thời gian thực không độ trễ. Sản phẩm giúp sinh viên hình thành tư thế làm việc công thái học chuẩn xác ngay từ ngày đầu tiên, giảm thiểu rủi ro bệnh nghề nghiệp cơ xương khớp và rút ngắn 80% thời gian làm quen khi chuyển tiếp sang điều trị trực tiếp trên người thật.

### 1.2. Định vị chiến lược (Strategic Positioning)
*   **Phân khúc:** Cao cấp (Premium / High-End).
*   **Đối tượng khách hàng:** Các trường Đại học Y Dược, học viện đào tạo Răng Hàm Mặt công lập và tư nhân quy mô lớn hàng đầu tại Việt Nam và khu vực Đông Nam Á (Dự án tiên phong: Trường Đại học Y Dược Hải Phòng).
*   **Giá trị cốt lõi:**
    *   *Tính đồng bộ hoàn hảo (Full Integration):* Tích hợp toàn diện phần cứng mô phỏng điều khiển điện, tay khoan chất lượng cao Dentsply Sirona Đức và mạng truyền dẫn hình ảnh EBS Đức.
    *   *Tính an toàn tuyệt đối (Ultimate Safety):* Đạt chuẩn **ISO 13485** về trang thiết bị y tế, cô lập hoàn toàn truyền dẫn tín hiệu đa phương tiện khỏi mạng LAN/WLAN, triệt tiêu nguy cơ rò rỉ dữ liệu hoặc nghẽn băng thông hệ thống.

---

## 2. CHÂN DUNG NGƯỜI DÙNG MỤC TIÊU & NỖI ĐAU (USER PERSONAS)

```
+------------------------------------------------------------------------------------------+
|                                  CHÂN DUNG NGƯỜI DÙNG                                    |
+------------------------------------+-----------------------------------------------------+
| 👩‍🏫 GIẢNG VIÊN NHA KHOA              | - Nỗi đau: Khó quan sát chi tiết thao tác của 15-20  |
| (The Dental Instructor)            |   sinh viên; mất thời gian đi lại sửa tư thế thô sơ. |
|                                    | - Nhu cầu: Truyền phát lập tức hình ảnh thao tác mẫu|
|                                    |   từ camera/kính hiển vi đến toàn bộ sinh viên.     |
+------------------------------------+-----------------------------------------------------+
| 🧑‍🎓 SINH VIÊN THỰC TẬP              | - Nỗi đau: Bị đau mỏi lưng vai gáy do ghế không đúng|
| (The Dental Student)               |   chuẩn lâm sàng; khó nhìn rõ chi tiết hàm răng mẫu. |
|                                    | - Nhu cầu: Trải nghiệm lực cắt thực tế của tay khoan|
|                                    |   cao cấp; xem hình ảnh nét, chuẩn công thái học.    |
+------------------------------------+-----------------------------------------------------+
| 🛠️ KỸ THUẬT VIÊN THIẾT BỊ           | - Nỗi đau: Thiết bị hỏng vặt khó sửa; mạng LAN trễ  |
| (The Biomedical Technician)        |   làm gián đoạn buổi học; thiếu linh kiện thay thế. |
|                                    | - Nhu cầu: Thiết bị bền bỉ, dễ bảo dưỡng định kỳ;   |
|                                    |   hệ thống EBS chạy ổn định độc lập không trễ.      |
+------------------------------------+-----------------------------------------------------+
```

---

## 3. BẢN ĐỒ PHÂN HỆ KIẾN TRÚC HỆ THỐNG (SYSTEM SUBSYSTEM MAP)

Hệ thống ghế răng mô phỏng nha khoa Sim Modular được tổ chức thành 5 phân hệ phần cứng và phần mềm chuyên biệt, kết nối đồng bộ và chặt chẽ với nhau:

```mermaid
graph TD
    %% Subsystems
    subgraph MechanErgo["Phân hệ Cơ học & Công thái học"]
        PatientSim["Mô hình Bệnh nhân Sim Modular<br>Nâng/Hạ & Nghiêng bằng điện"]
        FootControl["C+ Electronic Foot Control<br>Công tắc chân đa năng 4 hướng"]
    end

    subgraph InstrumentDynamics["Phân hệ Động lực học & Dụng cụ"]
        DentistElement["Mâm điều trị Nha sỹ<br>5+1 vị trí, EasyPad Control"]
        AssistantElement["Mâm trợ thủ công thái học<br>4 vị trí, Khớp xoay ống hút"]
        DentsplySirona["Hệ tay khoan Dentsply Sirona<br>T3 Racer Midwest, T4 Line B/BH 40"]
    end

    subgraph MultimediaInter["Phân hệ Truyền thông Đa phương tiện EBS"]
        CentralUnit["Central Unit AZ 32<br>Bản mạch I/O Cards (Max 17 khe)"]
        InstructorHub["EBS Instructor Model<br>6x DVI, RS232, Mini-DIN"]
        StudentModule["EBS Student Module<br>3x DVI, Mini-DIN"]
        TouchController["Bộ điều khiển cảm ứng EBS<br>Chuyển đổi nguồn phát 1 chạm"]
    end

    subgraph VisualDisplay["Phân hệ Trình chiếu & Ghi hình"]
        SonyTV["Sony 65' 4K TV<br>K-65S25VM2"]
        StudentMonitor["Màn hình tại chỗ 24'<br>Giảng viên & Sinh viên"]
        HDCamera["Camera cận cảnh bài giảng"]
    end

    %% Connections
    PatientSim -->|Tín hiệu cơ học| DentistElement
    FootControl -->|Lệnh chuyển động điện| PatientSim
    DentsplySirona -->|Khí - Nước| DentistElement
    DentistElement -->|Trực quan hóa| StudentMonitor
    HDCamera -->|Tín hiệu HD| InstructorHub
    InstructorHub <=>|Cáp đồng bộ thời gian thực| CentralUnit
    CentralUnit <=>|Bản mạch I/O| StudentModule
    StudentModule -->|Truyền tải nét| StudentMonitor
    InstructorHub -->|Trình chiếu quy mô lớn| SonyTV
    TouchController -->|Lệnh điều khiển| CentralUnit

    %% Styling
    style MechanErgo fill:#f5f6fa,stroke:#7f8c8d,stroke-width:2px
    style InstrumentDynamics fill:#ebf5fb,stroke:#2980b9,stroke-width:2px
    style MultimediaInter fill:#e8f8f5,stroke:#16a085,stroke-width:2px
    style VisualDisplay fill:#fef9e7,stroke:#f39c12,stroke-width:2px
```

---

## 4. YÊU CẦU KỸ THUẬT CHỨC NĂNG CHI TIẾT (FUNCTIONAL REQUIREMENTS)

### 4.1. Phân hệ Cơ học & Động học mô phỏng bệnh nhân (Patient Simulator Subsystem)
Phân hệ này tái tạo chính xác cơ sinh học của bệnh nhân lâm sàng, giúp sinh viên làm quen với việc điều chỉnh tư thế làm việc chuẩn công thái học.

| Mã yêu cầu | Tên yêu cầu | Mô tả kỹ thuật chi tiết | Độ ưu tiên | Minh chứng tài liệu |
| :---: | :--- | :--- | :---: | :--- |
| **REQ-ME-01** | **Điều chỉnh điện động lực** | - Động cơ điện tích hợp hỗ trợ nâng hạ chiều cao và thay đổi độ nghiêng (gập trước/sau) của mô hình bệnh nhân trơn tru, không rung giật.<br>- Khả năng tải trọng tối thiểu nâng hạ $\ge$ 150 kg để đảm bảo độ bền cơ học. | **P0 (Bắt buộc)** | *Instructions for use / Trang 54 (Mục 4.1.2)* |
| **REQ-ME-02** | **Bộ chân ga thông minh C+** | - Sử dụng **C+ electronic foot control** dạng mâm tròn 4 hướng.<br>- Cho phép gạt switch plate theo bất kỳ hướng nào để kích hoạt tính năng **Dừng khẩn cấp (Immediate movement stop)**.<br>- Tích hợp công tắc bên trái để bật/tắt phun sương nước tại tay khoan độc lập. | **P0 (Bắt buộc)** | *Instructions for use / Trang 62-66 (Mục 4.3.2 & 4.4)* |
| **REQ-ME-03** | **Đường cấp khí và nước tại chỗ** | - Hệ thống ống dẫn chịu áp suất cao tích hợp bộ lọc.<br>- **Áp lực nước:** Dải hoạt động 2.5 - 6.0 Bar (Lưu lượng nước $\ge$ 2.5 lít/phút).<br>- **Áp suất khí nén:** Dải hoạt động 5.5 - 7.5 Bar (Lưu lượng khí $\ge$ 50 lít/phút). | **P0 (Bắt buộc)** | *Instructions for use / Trang 20 (Technical data)* |

### 4.2. Phân hệ Mâm điều trị & Trợ thủ (Dentist & Assistant Elements Subsystem)
Phân hệ bố trí các công cụ điều trị nha khoa tinh giản, tiện ích thao tác tối đa cho nha sỹ và trợ thủ nha khoa.

| Mã yêu cầu | Tên yêu cầu | Mô tả kỹ thuật chi tiết | Độ ưu tiên | Minh chứng tài liệu |
| :---: | :--- | :--- | :---: | :--- |
| **REQ-DE-01** | **Mâm điều trị nha sỹ** | - **Cấu hình trạm giảng viên:** **5+1 vị trí** dụng cụ (Turbine, Motor, Scaler, Camera nội nha, Tay xịt và vị trí mở rộng).<br>- **Cấu hình trạm sinh viên:** **5 vị trí** dụng cụ.<br>- Tích hợp bàn phím điều khiển dạng màng **EasyPad** chống nước, chống hóa chất khử khuẩn.<br>- Cho phép lập trình lưu trữ và gọi nhanh **tối thiểu 2 vị trí tư thế** (Chương trình nhớ S, 0, 1, 2). | **P0 (Bắt buộc)** | *Simulation Unit / Trang 7 & Instructions for use / Trang 35-36* |
| **REQ-DE-02** | **Tay xịt 3 chức năng cao cấp** | - Tích hợp dòng **Sprayvit E** của Dentsply Sirona.<br>- Thiết kế chuẩn công thái học, hỗ trợ cấp nước ấm/lạnh, xịt hơi và xịt phun sương nước mịn.<br>- Vòi xịt có thể tháo rời hoàn toàn để hấp vô trùng ở nhiệt độ $134^\circ\text{C}$. | **P1 (Quan trọng)** | *Instructions for use / Trang 82* |
| **REQ-DE-03** | **Đèn điều trị LEDlight Plus** | - Đèn LED dải quang phổ chuẩn, không gây chói, không làm đông cứng sớm chất hàn composite.<br>- **Cường độ sáng cực đại:** **30.000 Lux**, hỗ trợ điều chỉnh **5 cấp độ sáng** linh hoạt.<br>- **Cơ chế điều khiển:** Trang bị **Cảm biến không chạm (non-touch sensor)** thông minh phía dưới đèn, bật/tắt hoặc chuyển chế độ bằng cách vẫy tay nhẹ nhàng để chống lây nhiễm chéo. | **P0 (Bắt buộc)** | *Simulation Unit / Trang 8 & Instructions for use / Trang 36, 131-132* |
| **REQ-DE-04** | **Mâm trợ thủ nha khoa** | - Mâm chuyển động linh hoạt khớp khuỷu, có **4 vị trí dụng cụ**.<br>- Bố trí sẵn: 01 tay xịt nước/hơi trợ thủ, **02 ống hút dịch lớn và nhỏ (Compact suction)**.<br>- Khớp nối ống hút có cơ chế xoay tự do giúp trợ thủ dễ dàng điều chỉnh góc gập và hướng hút mà không gây xoắn vặn ống truyền dẫn. | **P0 (Bắt buộc)** | *Simulation Unit / Trang 7 & Operating Instruction / Trang 119* |

### 4.3. Phân hệ Truyền thông Đa phương tiện tương tác thời gian thực (EBS Interactive Subsystem)
Xương sống công nghệ giúp kết nối toàn bộ hệ thống lớp học thực hành trực quan và tương tác đa chiều.

> [!IMPORTANT]
> **Cam kết không sử dụng mạng LAN/WLAN:** Toàn bộ hệ thống EBS truyền phát bằng tín hiệu phần cứng chuyên dụng thông qua các bản mạch I/O Cards cắm trực tiếp trên bộ chia trung tâm. Điều này đảm bảo tốc độ đáp ứng tức thời, hoàn toàn không bị trễ hình ảnh (Lag-free) khi giảng viên thao tác khoan mài siêu tốc, đồng thời cô lập hoàn toàn khỏi hệ thống mạng internet để bảo mật tuyệt đối thông tin giảng dạy.

```
[Camera Thao Tác Giáo Viên] -> [EBS Instructor Model] -> [Cáp Đồng Trục / DVI] -> [Central Unit AZ 32]
                                                                                       |
                                                                              (Phân phối I/O Cards)
                                                                                       |
                                                                                       v
                                                                            [EBS Student Module]
                                                                                       |
                                                                                       v
                                                                          [Màn Hình Sinh Viên 24"]
```

*   **Bộ chia tín hiệu trung tâm (Central Unit AZ 32):**
    *   *Số khe cắm thẻ I/O tối đa:* **17 khe cắm** (tương đương kết nối đồng bộ 1 Trạm Giảng viên và tối đa 16 Trạm Sinh viên trên một tháp trung tâm).
    *   *Công suất tiêu thụ tối đa:* **300W** tiết kiệm điện năng, dải tản nhiệt đối lưu tự nhiên không tiếng ồn.
*   **Trạm kết nối Giảng viên (EBS Instructor Model):**
    *   *Cổng kết nối vật lý:* **6 cổng DVI female 24+5** chuyên dụng (kết nối máy tính giáo viên, màn hình giám sát, C-Unit A/B, Laptop cá nhân, Máy chiếu projector), **1 cổng Mini-DIN 8pin** kết nối bộ chuyển đổi USB-Box, **1 cổng Sub-D 9pin RS232** để truyền dữ liệu đến bàn phím điều khiển cảm ứng.
*   **Trạm kết nối Sinh viên (EBS Student Module):**
    *   *Cổng kết nối vật lý:* **3 cổng DVI female 24+5** (kết nối máy tính, màn hình tại chỗ sinh viên, C-Unit), **1 cổng Mini-DIN 8pin** đến USB-Box, **1 cổng Mini-DIN 6pin female** kết nối nút nhấn khẩn cấp bên ngoài tại bàn.
*   **Tính năng tương tác phần mềm và phần cứng:**
    *   *Instructor Broadcast:* Giáo viên gửi tín hiệu bài giảng từ màn hình chính hoặc camera thao tác của mình đến màn hình của từng sinh viên hoặc toàn bộ lớp học tức thời.
    *   *Multimedia Input:* Truyền tín hiệu hình ảnh trực tiếp từ camera kỹ thuật số gắn trên kính hiển vi nha khoa hoặc từ hệ thống thiết kế Cerec/Primescan trực tiếp đến toàn bộ màn hình sinh viên.
    *   *Student Monitoring:* Giảng viên có thể giám sát tín hiệu từ bất kỳ trạm sinh viên nào theo thời gian thực (yêu cầu trạm sinh viên trang bị camera trạm).
    *   *Student Presentation:* Giảng viên chọn tín hiệu của một sinh viên bất kỳ để phát sóng trình chiếu đến toàn bộ lớp học hoặc nhóm sinh viên để phân tích lỗi/kỹ thuật đẹp.
    *   *Darken Screens:* Chế độ khóa nhanh "Làm tối toàn bộ màn hình sinh viên" chỉ bằng 1 nút nhấn trên bàn phím cảm ứng để sinh viên tập trung nghe giảng thuyết trình trực tiếp.

### 4.4. Phân hệ Phụ kiện tay khoan động lực học (Dentsply Sirona Dynamics Subsystem)
Các phụ kiện tay khoan điều trị nha khoa chính hãng từ **Dentsply Sirona (Đức)** mang lại trải nghiệm cắt chính xác, giảm tiếng ồn và độ bền cao.

| Bộ phận dụng cụ | Dòng sản phẩm | Các thông số kỹ thuật chi tiết của chuyên gia | Lợi ích lâm sàng vượt trội |
| :--- | :--- | :--- | :--- |
| **Tay khoan nhanh (High-speed turbine)** | **T3 Racer Midwest** | - **Số tia phun sương làm mát:** **4 tia phun sương** đối xứng chéo.<br>- **Công nghệ ổ bi:** **Vòng bi bằng gốm sứ** chịu mài mòn (Robust ceramic ball bearings).<br>- **Cơ chế tháo lắp mũi khoan:** **Chuck bấm** (Push-button chuck).<br>- **Công suất truyền động cực đại:** **30W**.<br>- **Tốc độ quay không tải:** Xấp xỉ **400.000 vòng/phút**.<br>- **Kích thước đầu tay khoan:** Đường kính đầu **11.9 mm**, chiều cao đầu **13.0 mm**. | - 4 tia phun sương ngăn ngừa sinh nhiệt gây nứt men răng/mẫu hàm thực hành.<br>- Vòng bi gốm sứ giảm ma sát, hạn chế tiếng rít chói tai trong phòng thực hành và kéo dài tuổi thọ tay khoan gấp 3 lần so với vòng bi thép thông thường. |
| **Tay khoan chậm khuỷu (Contra-angle)** | **T4 Line B 40** | - **Tỷ số truyền lực:** **1:1** (đồng tốc).<br>- **Tốc độ quay tối đa:** **40.000 vòng/phút**.<br>- **Kích thước đầu siêu nhỏ:** Đường kính đầu **8.7 mm**, chiều cao đầu **12.4 mm**.<br>- **Cơ chế khóa:** **Chuck bấm** tiện lợi. | - Thiết kế đầu siêu nhỏ tăng tối đa tầm nhìn hiển thị trực quan cho sinh viên trong miệng bệnh nhân giả định.<br>- Thao tác thay mũi khoan mài cực nhanh bằng nút bấm cơ học phía sau đầu. |
| **Tay khoan chậm thẳng (Straight)** | **T4 Line BH 40** | - **Tỷ số truyền lực:** **1:1**.<br>- **Tốc độ quay tối đa:** **40.000 vòng/phút**.<br>- Thiết kế tay cầm phân bổ trọng lượng cân bằng, chống mỏi tay khi mài chỉnh ngoài miệng. | - Dùng cho các kỹ thuật mài chỉnh khay niềng, phục hình răng giả ngoài miệng mẫu hàm. |
| **Động cơ hơi hơi (Air Motor)** | **T4 Line Air Motor M** | - **Tốc độ quay tối đa:** Xấp xỉ **22.000 vòng/phút**.<br>- Đầu nối tiêu chuẩn Midwest 4 lỗ phổ thông. | - Truyền động khí nén mượt mà, lực mô-men xoắn ổn định cao ở dải tốc độ thấp. |

### 4.5. Phân hệ Trình chiếu quy mô lớn (Sony 4K Display Subsystem)
Đảm bảo hình ảnh bài giảng của giảng viên được hiển thị rõ nét nhất ở khoảng cách xa trong giảng đường lớn.

*   **Model TV:** **Sony K-65S25VM2** (Sản xuất và xuất xứ: Việt Nam).
*   **Kích cỡ màn hình:** **65 inch**, trang bị tấm nền LED nền hiển thị rực rỡ, độ phân giải thực **4K Ultra HD** (3840 x 2160 pixels) nét gấp 4 lần Full HD.
*   **Tần số quét thực:** **60 Hz** mượt mà, triệt tiêu hiện tượng bóng mờ khi camera di chuyển nhanh.
*   **Kết nối Internet & Không dây:** Wi-Fi 5 băng tần kép, hỗ trợ kết nối có dây RJ45 truyền tải tốc độ cao ổn định, Bluetooth 5.3 kết nối thiết bị ngoại vi tiện lợi.
*   **Cổng nhận tín hiệu hình ảnh/âm thanh:** **4 cổng HDMI** (tích hợp **1 cổng HDMI eARC** truyền âm thanh chất lượng cao).
*   **Cổng xuất âm thanh chuyên dụng:** **1 cổng quang Optical** (Digital Audio), **1 cổng eARC** kết nối hệ thống loa giảng đường.
*   **Cổng kết nối USB:** **2 cổng USB-A** để chạy slide bài giảng trực tiếp.
*   **Hệ thống loa:** Công suất **20W** tích hợp công nghệ khuếch đại âm thanh vòm kỹ thuật số rõ ràng.

---

## 5. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)

### 5.1. Thiết kế Công thái học & An toàn (Ergonomics & Safety)
*   **Quy hoạch đi dây âm sàn:** Hệ thống dây điện, cáp tín hiệu EBS DVI, ống cấp nước, ống thoát nước thải và ống dẫn khí nén bắt buộc phải được bọc bảo vệ chuyên dụng và đi ngầm dưới sàn lớp học (đi dây âm sàn) để đảm bảo an toàn tuyệt đối, chống vấp ngã và đạt thẩm mỹ phòng thực hành hiện đại tối đa.
*   **An toàn điện học:** Đạt cấp bảo vệ Class I đối với các thành phần chuyển động cơ điện. Dòng điện rò rỉ dưới ngưỡng $10\,\mu\text{A}$ an toàn tuyệt đối cho người dùng.
*   **Hệ thống chống trút ngược (Anti-retraction system):** Tay khoan nha khoa tích hợp màng ngăn thông minh chống hút ngược nước bọt/nước thải mẫu hàm vào đường ống cấp nước để bảo vệ hệ thống luôn vô trùng.

### 5.2. Độ tin cậy & Khả năng bảo trì (Reliability & Maintainability)
*   **Độ bền vật liệu:** Mặt bàn giáo viên và bàn sinh viên làm bằng vật liệu composite đúc khối chuyên dụng, kháng các hóa chất sát khuẩn nha khoa mạnh (như cồn 90 độ, chloramin B, nước Javel) và không bị ố vàng, không thấm nước.
*   **Thời gian bảo dưỡng định kỳ:** Thiết kế module cho phép kỹ thuật viên dễ dàng tiếp cận và thay thế các bầu lọc lọc khí, cốc lọc nước, dầu bôi trơn hệ thống từ khoang kỹ thuật mở phía dưới bàn trong vòng **dưới 15 phút** mà không cần tháo dỡ toàn bộ ghế.
*   **Tuổi thọ hoạt động (MTBF):** Động cơ điện nâng hạ và hệ truyền dẫn đa phương tiện EBS cam kết hoạt động ổn định liên tục trên **10.000 giờ** không phát sinh lỗi phần cứng.

### 5.3. Đáp ứng tiêu chuẩn Quốc tế (Compliance & Standards)
*   Được sản xuất trên dây chuyền đạt tiêu chuẩn chất lượng **ISO 9001** (Hệ thống quản lý chất lượng).
*   Máy chính đạt tiêu chuẩn vàng **ISO 13485** (Hệ thống quản lý chất lượng trang thiết bị y tế toàn cầu) đảm bảo an toàn sinh học và quy chuẩn y tế khắt khe nhất.

---

## 6. KẾ HOẠCH TRIỂN KHAI KỸ THUẬT & SLA DỊCH VỤ HẬU MÃI (SLA)

Để đáp ứng hoàn hảo tiến độ thực hiện **150 ngày** của Gói thầu mua sắm hệ thống ghế răng mô phỏng tại Trường Đại học Y Dược Hải Phòng, kế hoạch hành động cụ thể bao gồm:

### 6.1. Quy trình lắp đặt 3 giai đoạn (Deployment Phases)

```
[Giai đoạn 1: Tuần 1-4]        [Giai đoạn 2: Tuần 5-8]        [Giai đoạn 3: Tuần 9-12]
   +----------------------+       +----------------------+       +----------------------+
   | Khảo sát hạ tầng,    |       | Vận chuyển thiết bị, |       | Vận hành thử nghiệm  |
   | thiết kế bản vẽ và   | ----> | thi công lắp đặt và  | ----> | đào tạo giảng viên,  |
   | chuẩn bị đường cáp   |       | cân chỉnh kỹ thuật   |       | chuyển giao công nghệ|
   +----------------------+       +----------------------+       +----------------------+
```

1.  **Giai đoạn 1: Khảo sát & Chuẩn bị mặt bằng (Tuần 1 - Tuần 4):**
    *   Khảo sát thực địa phòng thực hành tại Trường Đại học Y Dược Hải Phòng.
    *   Bản vẽ thiết kế chi tiết đường ống âm sàn (cấp nước, thoát nước, dẫn khí, cáp DVI của EBS).
    *   Hợp tác với bộ phận hạ tầng của nhà trường để hoàn thiện thi công âm sàn.
2.  **Giai đoạn 2: Lắp đặt & Cân chỉnh kỹ thuật (Tuần 5 - Tuần 8):**
    *   Nhập khẩu và vận chuyển thiết bị Sim Modular, tay khoan Dentsply Sirona, hệ EBS về trường.
    *   Lắp đặt phần cứng cơ học, kết nối hệ thống nước khí trung tâm.
    *   Kết nối đồng bộ hệ truyền dẫn hình ảnh EBS từ Trạm giáo viên đến 16 trạm sinh viên, kết nối TV Sony 65".
    *   Đo đạc và hiệu chuẩn áp suất nước (đảm bảo dải 5 Bar), áp suất hơi (đạt 6-7 Bar), đo điện áp và dòng rò.
3.  **Giai đoạn 3: Nghiệm thu & Chuyển giao công nghệ (Tuần 9 - Tuần 12):**
    *   Chạy thử nghiệm toàn hệ thống liên tục trong 72 giờ.
    *   Tổ chức khóa huấn luyện chuyển giao công nghệ cho toàn bộ giảng viên Khoa Răng Hàm Mặt và đội ngũ nhân viên kỹ thuật trường.
    *   Bàn giao đầy đủ bộ tài liệu HDSD tiếng Anh chuẩn gốc và bản dịch tiếng Việt chuyên ngành được phê duyệt.

### 6.2. Cam kết Dịch vụ Hậu mãi Vàng (Service Level Agreement)
Hợp đồng dịch vụ bảo hành và bảo trì trọn gói bao gồm:
*   **Bảo hành:** **12 tháng** toàn diện phần cứng kể từ ngày nghiệm thu đưa vào sử dụng.
*   **Bảo trì định kỳ đặc biệt:** Thực hiện bảo trì, kiểm tra và bảo dưỡng kỹ thuật hệ thống **03 tháng/lần** (4 lần/năm) trong suốt thời gian bảo hành hoàn toàn miễn phí.
*   **SLA phản hồi khẩn cấp:** Tiếp nhận yêu cầu sửa chữa 24/7. Kỹ sư chuyên trách có mặt tại hiện trường Trường Đại học Y Dược Hải Phòng trong vòng **02 - 04 giờ** kể từ khi nhận cuộc gọi để xử lý sự cố.
*   **Cam kết vòng đời phụ tùng thay thế:** Nhà thầu cam kết bằng văn bản cung cấp đầy đủ vật tư tiêu hao, linh kiện và phụ tùng thay thế chính hãng trong vòng **tối thiểu 08 năm** (tuân thủ nghiêm ngặt Thông tư số 23/2023/TT-BTC của Bộ Tài chính).

---

## 7. CHIẾN LƯỢC TIẾP CẬN THỊ TRƯỜNG & HỖ TRỢ ĐẤU THẦU (LAUNCH STRATEGY)

Để đưa dòng sản phẩm **Sim Modular** thâm nhập thành công và chiếm lĩnh thị phần thiết bị đào tạo nha khoa cao cấp, các hành động cốt lõi bao gồm:

1.  **Chương trình Demo thực nghiệm "Live Hands-on" tại các trường Đại học:**
    *   Vận chuyển lắp ráp thử nghiệm 01 bộ hệ thống Sim Modular hoàn chỉnh tích hợp EBS tại khoa Răng Hàm Mặt để giảng viên trực tiếp trải nghiệm độ mượt của tay khoan Dentsply Sirona 30W vòng bi gốm và độ nét không độ trễ của EBS.
2.  **Chuẩn hóa hồ sơ năng lực thầu kỹ thuật cao:**
    *   Sử dụng chính các thông số vượt trội của Sim Modular (vòng bi gốm tay khoan nhanh, công suất tay khoan 30W, hệ truyền tín hiệu EBS không trễ bằng DVI chuyên dụng không qua LAN, độ sáng đèn LED 30.000 Lux có cảm biến tiệm cận) để tư vấn cho các chủ đầu tư xây dựng các tiêu chí kỹ thuật chuẩn mực cho gói thầu chất lượng cao.
3.  **Chiến dịch Marketing kỹ thuật số (Technical Digital Marketing):**
    *   Sản xuất các video chất lượng cao trình diễn tính năng "truyền hình ảnh không trễ" và so sánh trực quan với hệ thống truyền qua mạng LAN thông thường để làm nổi bật sự khác biệt vượt trội của Sim Modular.
