import "./App.css";
import Tour from './Tour'

function Tours({ tours, removeTour}) {
  return (
    <>
      <div className="titlecontainer">
        <h1 className="heading">Tours</h1>
        <div className="underline"></div>
      </div>
      <main>
        {
            tours.map((tour)=>{
                return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
            })
        }
      </main>
    </>
  );
}

export default Tours;
