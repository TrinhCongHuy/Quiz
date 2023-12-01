/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";
import GoBack from "../../components/GoBack";

function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestion, setDataQuestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic(params.id);
      setDataTopic(response);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(params.id);
      setDataQuestion(response);
    };
    fetchApi();
  }, []);
  console.log(dataQuestion);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let selectedAnswers = [];

    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        selectedAnswers.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }
    let options = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      answers: selectedAnswers,
    };

    if (options.answers.length > 0) {
      const response = await createAnswer(options);
      if (response) {
        navigate(`/result/${response.id}`);
      }
    } else {
      alert("Vui lòng điền ít nhất một câu trước khi nộp!");
    }
  };

  return (
    <>
      <div className="quiz">
        <GoBack />
        <h2>Bài quiz chủ đề: {dataTopic && <>{dataTopic.name}</>}</h2>
        <div className="form-quiz">
          <form onSubmit={handleSubmit}>
            {dataQuestion.map((item, index) => (
              <div className="form-quiz__question" key={item.id}>
                <p>
                  Câu {index + 1}: {item.question}
                </p>
                {item.answers.map((itemAns, indexAns) => (
                  <div className="form-quiz__answer" key={indexAns}>
                    <input
                      type="radio"
                      name={item.id}
                      value={indexAns}
                      id={`quiz-${item.id}-${indexAns}`}
                    />
                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                      {itemAns}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button className="btn_send" type="submit">
              Nộp bài
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Quiz;
