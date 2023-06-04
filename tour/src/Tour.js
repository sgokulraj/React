import "./App.css";
import { useState } from "react";

function Tour({ tour, removeTour }) {
  const[addText , setAddText] = useState(false);
  // function readMore(){
  //   if(addText){
  //     document.querySelector("p").textContent = tour.info.substr(0,150);
  //     document.querySelector("#btn-read").textContent = 'Read More'
  //   }else{
  //     document.querySelector("p").textContent = tour.info;
  //     document.querySelector("#btn-read").textContent = 'Show Less'
  //   }
  // }
  // function removeFunction() {
  //   removeTour(tour.id);
  // }
  // tour = { id, image, info, name, price };
  return (
    <section className="tour">
      <div className="imageContainer">
        <img src={tour.image} alt={tour.id} />
      </div>
      <div className="tourHead">
        <h3>{tour.name}</h3>
        <h4>₹{tour.price}</h4>
      </div>
      <p className="tourInfo">{addText ? tour.info : tour.info.substr(0,150)}...
      <button id="btn-read" onClick={()=>setAddText(!addText)}>{addText ? 'Show Less' : 'Show More'}</button></p>

      {/* <p className="tourInfo">{tour.info}</p> */}
      <div className="btnContainer">
        <button className="btn-not" onClick={() => removeTour(tour.id)}>
          Not Interested
        </button>
      </div>
    </section>
  );
}
export default Tour;
