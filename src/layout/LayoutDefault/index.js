import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaBars, FaStream } from "react-icons/fa";
import { useState } from "react";
function LayoutDefault() {
  const token = getCookie("token");
  const [isMenuVisible, setMenuVisible] = useState(false);
  const isLogin = useSelector((state) => state.loginReducer);
  console.log(isLogin);
  const navLinkACtive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  };

  const handleShow = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="layout__default">
        <header className="header">
          <div className="logo">
            <img src="https://pngimg.com/d/letter_q_PNG23.png" alt="img_logo" />
            <p>EduQuiz</p>
          </div>
          <div className={`menu_list ${isMenuVisible ? "active" : ""}`}>
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="/" className={navLinkACtive}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={navLinkACtive}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={navLinkACtive}>
                    Contact
                  </NavLink>
                </li>
                {token && (
                  <>
                    <li>
                      <NavLink to="/topic" className={navLinkACtive}>
                        Topic
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/answers" className={navLinkACtive}>
                        Answers
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="account">
              <ul>
                {token ? (
                  <>
                    <li>
                      <NavLink to="/logout" className={navLinkACtive}>
                        Đăng Xuất
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login" className={navLinkACtive}>
                        Đăng nhập
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className={navLinkACtive}>
                        Đăng ký
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          {isMenuVisible ? (
              <FaStream className="icon_bars" onClick={handleShow} />
            ) : (
              <FaBars className="icon_bars" onClick={handleShow} />
            )}
        </header>
        <section className="container">
          <main className="content">
            <Outlet />
          </main>
        </section>
        <footer className="footer">
          <div className="footer_main">
            <div className="footer_main--item">
              <h3>Hỗ trợ</h3>
              <ul>
                <li>Liên hệ</li>
                <li>Diễn đàn</li>
                <li>Câu hởi thường gặp</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản và điều kiện sử dụng</li>
                <li>Liên hệ</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div className="footer_main--item">
              <h3>Liên kết hữu ích</h3>
              <ul>
                <li>Hướng dẫn quản trị</li>
                <li>Quiz fanpage</li>
                <li>Cộng đồng sử dụng Quiz</li>
              </ul>
            </div>
            <div className="footer_main--item">
              <h3>Liên hệ</h3>
              <ul className="info_contact">
                <li>
                  <FaMapMarkerAlt className="icon" />
                  172/44 Trần Cao Vân
                </li>
                <li>
                  <FaPhoneAlt className="icon" />
                  0833078893
                </li>
                <li>
                  <FaEnvelope className="icon" />
                  trinhconghuy@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="footer_copyright">
          @Bản quyền thuộc về Hệ thống tạo lập website thi trắc nghiệm trực
          tuyến Quiz.
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
