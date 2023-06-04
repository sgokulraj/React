import "./App.css";
import data from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [clients, setClients] = useState(data);
  const [index, setIndex] = useState(0);
  let length = data.length - 1;

  function pre() {
    if (index <= 0) {
      setIndex(length);
    } else {
      setIndex(index - 1);
    }
  }

  function next() {
    if (index >= length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function change(btn) {
    if (btn === "pre") {
      pre();
    } else {
      next();
    }
  }

  return (
    <div className="mainContainer">
      <div className="title">
        <h2>Reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="imageContainer">
        <img src={clients[index].image} alt={clients[index].id} />
      </div>
      <div className="reviews">
        <h3>{clients[index].name}</h3>
        <h4>{clients[index].title}</h4>
        <p>{clients[index].quote}</p>
      </div>
      <div className="btncontainer">
        <button className="pre" onClick={() => change("pre")}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => change("next")}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
