import { useEffect, useState } from "react";
import { getUsers } from "../../services/usersService";
import { getListTopic } from "../../services/topicService";

function Home() {
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="main">
        <section className="main_header">
          <div className="main_header--title">
            <span className="title_label">You have idea —</span>
            <span className="title_label">[ WE HAVE</span>
            <span className="title_label">SOLUTION — ]</span>
            <div className="description">
              <h5>Đó là đam mê chúng tôi luôn theo đuổi.</h5>
              <p>
                Chỉ cần bạn có bất cứ một ý tưởng nào đó cần sự trợ giúp của
                công nghệ, chúng tôi sẽ biến nó thành hiện thực. X-Soft biết bạn
                luôn luôn có những ý tưởng tuyệt vời để giúp công việc trở nên
                thoải mái hơn…
              </p>
            </div>
          </div>
          <div className="main_header--img">
            <img
              src="https://xsoft.vn/wp-content/uploads/2021/09/img3.png"
              alt="img-header"
            />
          </div>
        </section>
        <section className="main_container">
          <div className="main_container--counter">
            <p className="counter_title">Những con số biết nói</p>
            <div className="line"></div>
            <div className="counter_wrap">
              <div className="counter_wrap--item">
                <img
                  className="img_counter"
                  src="https://aztest.vn/uploads/tdfoss-home/member-1.png"
                  alt="img_user"
                />
                <span className="counter_number">{users.length}</span>
                <span className="counter_desc">Tài khoản thành viên</span>
              </div>
              <div className="counter_wrap--item">
                <img
                  className="img_counter"
                  src="https://aztest.vn/uploads/tdfoss-home/exam-1.png"
                  alt="user_user"
                />
                <span className="counter_number">{topics.length}</span>
                <span className="counter_desc">Đề thi</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
