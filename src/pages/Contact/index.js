import { FaPhoneAlt, FaUserAlt, FaClinicMedical, FaEnvelope, FaPencilAlt, FaLayerGroup, FaCalendarAlt, FaBars, FaClone, FaClipboardList } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact_info">
          <div className="contact_info--content">
            <div className="info_title">Hỗ trợ nội dung</div>
            <div className="info_social">
              <div className="info_social--item">
                <FaPhoneAlt className="social_icon"/>
                Điện thoại: 0833078893
              </div>
              <div className="info_social--item">
                <FaEnvelope className="social_icon"/>
                Email: trinhconghuy.2003@gmail.com
              </div>
            </div>
          </div>
          <div className="contact_info--content">
            <div className="info_title">Thống kê</div>
            <div className="info_social">
              <div className="info_social--item">
                <FaPencilAlt className="social_icon"/>
                Đang truy cập
              </div>
              <div className="info_social--item">
                <FaLayerGroup className="social_icon"/>
                Hôm nay
              </div>
              <div className="info_social--item">
                <FaCalendarAlt className="social_icon"/>
                Tháng hiện tại
              </div>
              <div className="info_social--item">
                <FaBars className="social_icon"/>
                Tổng lượt truy cập
              </div>
            </div>
          </div>
        </div>
        <div className="contact_feedback">
          <div className="contact_feedback--title">Gửi phản hồi</div>
          <form className="contact_feedback--content">
            <div className="contact_feedback--item">
                <FaClone className="icon"/>
                <input type="text" placeholder="Chủ đề bạn quan tâm"/>
            </div>
            <div className="contact_feedback--item">
                <FaClipboardList className="icon"/>
                <input type="text" placeholder="Tiêu đề"/>
            </div>
            <div className="contact_feedback--item">
                <FaUserAlt className="icon"/>
                <input type="text" placeholder="Họ và tên"/>
            </div>
            <div className="contact_feedback--item">
                <FaEnvelope className="icon"/>
                <input type="text" placeholder="Email"/>
            </div>
            <div className="contact_feedback--item">
                <FaPhoneAlt className="icon"/>
                <input type="text" placeholder="Điện thoại"/>
            </div>
            <div className="contact_feedback--item">
                <FaClinicMedical className="icon"/>
                <input type="text" placeholder="Địa chỉ"/>
            </div>
            <textarea className="feedback_content" rows={5} placeholder="Nội dung"/>
          </form>
          <button className="btn_send">Gửi</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
