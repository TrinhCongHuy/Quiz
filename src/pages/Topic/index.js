import { useEffect, useState } from "react";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="topic">
        <h2>Danh sách các chủ đề:</h2>
        {topics.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên chủ đề</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr key={topic.id}>
                  <td>{topic.id}</td>
                  <td>{topic.name}</td>
                  <td>
                    <Link to={"/quiz/" + topic.id}>Làm bài</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Topic;
