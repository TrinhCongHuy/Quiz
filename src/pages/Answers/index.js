/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getAnswersByUserId,
  getListAnswer,
} from "../../services/answersService";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";

function Answers() {
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const ListUserId = await getAnswersByUserId();
      const listAnswer = await getListAnswer();
      const dataTopic = await getListTopic();

      const userId = ListUserId.map((item) => item.userId);

      const listAnswerUserId = listAnswer.filter(
        (item) => item.userId === userId[0]
      );

      let resultFinal = [];
      for (let i = 0; i < listAnswerUserId.length; i++) {
        resultFinal.push({
          ...dataTopic.find(item => (
            item.id === listAnswerUserId[i].topicId
          )),
          ...listAnswerUserId[i]
        })
      }

      setDataResult(resultFinal);
    };

    fetchApi();
  }, []);

  console.log(dataResult);

  return (
    <>
      <div className="answers">
        <h2>Danh sách các bài đã luyện:</h2>
        {dataResult.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên chủ đề</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataResult.map((topic, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{topic.name}</td>
                  <td>
                    <Link to={`/result/${topic.id}`}>Xem lại</Link>
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

export default Answers;
