import Remainder from "./Remainder";
import users from "./Data";
import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState(users);
  console.log(users);
  function clear(){
    return setPerson([])
  }
  return (
    <div className="mainContainer">
      <h2>{person.length} Birthdays Today</h2>
      <Remainder people={person} />
      <button
        onClick={clear}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
