import "./App.css";
import questions from "./data";
import Ques from "./Question";

function App() {
  return (
    <div className="container">
      <div className="headLine">
        <h1>Frequently asked questions</h1>
        {questions.map((question) => {
          return <Ques key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
}

export default App;
