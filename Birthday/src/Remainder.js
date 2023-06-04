import React from "react";
import "./App.css";

function Remainder({ people }) {
  
  return (
    <>
      {people.map((pupil) => {
        return (
          <div className="peopleContainer" key={pupil.id}>
            <div className="imageContainer">
              <img
                src={pupil.image}
                alt={pupil.id}
                height={"100px"}
                width={"100px"}
              />
            </div>
            <div>
              <h3>{pupil.name}</h3>
              <p>{pupil.age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Remainder;
