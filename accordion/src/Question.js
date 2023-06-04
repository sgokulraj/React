import { useState } from "react";

function Question({ question }) {
  const [answers, setAnswers] = useState(false);
  return (
    <main className="mainContainer">
      <div>
        <h3>{question.title}</h3>
        <button
          className="btn"
          onClick={() => {
            setAnswers(!answers);
          }}
        >
          {answers ? "-" : "+"}
        </button>
      </div>
      {/* //how to add <hr/>  */}
      <p>{answers ? question.info : ""}</p>
    </main>
  );
}
export default Question;
