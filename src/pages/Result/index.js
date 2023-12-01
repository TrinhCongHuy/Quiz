/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getListQuestion } from "../../services/questionService";
import GoBack from "../../components/GoBack";
import '../../components/GlobalStyles/GlobalStyles.scss';

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestions = await getListQuestion(dataAnswers.topicId);

      let resultFinal = [];
      for (let i = 0; i < dataQuestions.length; i++) {
        resultFinal.push({
          ...dataQuestions[i],
          ...dataAnswers.answers.find(
            (item) => item.questionId === dataQuestions[i].id
          ),
        });
      }
      setDataResult(resultFinal);
    };
    fetchApi();
  }, []);

  const totalSentence = dataResult.length;
  const resultTrue = dataResult.reduce((sum, itemCount) => {
    if (itemCount.correctAnswer === itemCount.answer) {
      sum++;
    }
    return sum;
  }, 0);
  const resultFalse = dataResult.reduce((sum, itemCount) => {
    if (itemCount.correctAnswer !== itemCount.answer) {
      sum++;
    }
    return sum;
  }, 0);
  const rate = (resultTrue / totalSentence) * 100;

  return (
    <>
      <div className="result">
        <GoBack />
        <h2>Kết quả:</h2>
        <div className="result_final">
          <span className="result_item">
            Đúng: <strong>{resultTrue}</strong>{" "}
          </span>
          <span className="result_item">
            Sai: <strong>{resultFalse}</strong>{" "}
          </span>
          <span className="result_item">
            Tổng số câu: <strong>{totalSentence}</strong>
          </span>
          <span className="result_item">
            Tỷ lệ đúng: <strong>{rate}%</strong>
          </span>
        </div>
        <div className="result__list">
          {dataResult.map((item, index) => (
            <div className="result__item" key={item.id}>
              <p>
                Câu {index + 1}: {item.question}
                {item.correctAnswer === item.answer ? (
                  <span className="result_tag result__tag--true">Đúng</span>
                ) : (
                  <span className="result_tag result__tag--false">Sai</span>
                )}
              </p>
              {item.answers.map((itemAns, indexAns) => {
                let className = "";
                let checked = false;

                if (item.answer === indexAns) {
                  checked = true;
                  className = "result__item--selected";
                }
                if (item.correctAnswer === indexAns) {
                  className = "result__item--result";
                }
                return (
                  <div className="result-quiz__answer" key={indexAns}>
                    <input type="radio" checked={checked} disabled />
                    <label className={className}>{itemAns}</label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <button className="btn_send">
          {dataResult.length > 0 && (
            <Link to={"/quiz/" + dataResult[0].topicId}>Làm lại</Link>
          )}
        </button>
      </div>
    </>
  );
}

export default Result;
