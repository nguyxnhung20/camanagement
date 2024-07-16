import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Chào mừng đến với VTI Academy</h1>
      </header>

      <main>
        <section className="intro">
          <h2>Về chúng tôi</h2>
          <p>
            VTI Academy là trung tâm đào tạo hàng đầu về công nghệ thông tin,
            cung cấp các khóa học chất lượng cao và cơ hội phát triển nghề
            nghiệp cho sinh viên.
          </p>
        </section>

        <div className="content-wrapper">
          <section className="courses">
            <h2>Khóa học nổi bật</h2>
            <div className="course-list">
              <div className="course-item">Lập trình Java</div>
              <div className="course-item">
                Phát triển ứng dụng web với React
              </div>
              <div className="course-item">Quản trị cơ sở dữ liệu</div>
              <div className="course-item">DevOps và Cloud Computing</div>
            </div>
          </section>

          <section className="benefits">
            <h2>Lợi ích khi học tại VTI Academy</h2>
            <ul>
              <li>Giảng viên có nhiều kinh nghiệm trong ngành</li>
              <li>
                Chương trình học cập nhật theo xu hướng công nghệ mới nhất
              </li>
              <li>Cơ hội thực tập và việc làm tại các công ty hàng đầu</li>
              <li>Hỗ trợ học viên 24/7</li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p>Liên hệ: info@vtiacademy.com | Hotline: 0123 456 789</p>
        <p>© 2024 VTI Academy. Bảo lưu mọi quyền.</p>
      </footer>
    </div>
  );
};

export default HomePage;
