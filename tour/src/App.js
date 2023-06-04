import "./App.css";
import Tours from "./Tours";
import Loading from "./Loading";
import { useState, useEffect } from "react";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching the data
  useEffect(() => {
    fetchTour();
  }, []);

  async function fetchTour() {
    setLoading(true);
    try {
      let response = await fetch("https://course-api.com/react-tours-project");
      let data = await response.json();
      setTours(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  //using conditional rendering
  if (loading) {
    return <Loading />;
  }

  //removing Tours
  function removeTour(id) {
    const filtered = tours.filter((tour) => {
      return id !== tour.id;
    });
    setTours(filtered);
  }

  //refreshing the page
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours found</h1>
        <button onClick={() => fetchTour()}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
