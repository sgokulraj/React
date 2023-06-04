import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(3);

  async function fetchData() {
    let response = await fetch("https://course-api.com/react-tabs-project");
    let data = await response.json();
    // console.log(data);
    setLoading(false);
    setJobs(data);
    // console.log(jobs);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  function display(order) {
    if (order === index) {
      return "showClass";
    } else {
      return "hideClass";
    }
  }

  return (
    <main>
      <div className="btnContainer">
        {jobs.map((job) => {
          return (
            <button
              key={job.id}
              className={`btn ${job.order === index ? "active" : ""}`}
              onClick={() => setIndex(job.order)}
            >
              {job.company}
            </button>
          );
        })}
      </div>

      <section>
        {jobs.map((job) => {
          return (
            <div key={job.id} className={`details ${display(job.order)}`}>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <p className="dates">{job.dates}</p>
              <div className="duty">
                {job.duties.map((duty, ind) => {
                  return <p key={ind}> {ind+1}.{"          "}{duty}</p>;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
