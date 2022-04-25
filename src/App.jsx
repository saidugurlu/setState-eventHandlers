import { useState } from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import _jobs from "./data/jobs.json";
//import card from "./components/card"

_jobs.forEach((job) => {
  job.status = "send";
});

function App() {
  const [displayKind, setDisplayKind] = useState("full");
  const [jobs, setJobs] = useState(_jobs);
  console.log(jobs);
  const handleToggleView = () => {
    setDisplayKind(displayKind === "full" ? "list" : "full");
  };
  const handleStatusChange = (job) => {
    switch (job.status) {
      case "send":
        job.status = "wait";
        break;
      case "wait":
        job.status = "interview";
        break;
      case "interview":
        job.status = "declined";
        break;
      case "declined":
        job.status = "accepted";
        break;
      case "accepted":
        job.status = "send";
        break;
    }
    setJobs([...jobs]);
  };
  return (
    <div className="App">
      <h1>Job Application Process</h1>
      <button onClick={handleToggleView}>Toggle View</button>
      {displayKind === "full" ? (
        <div className="jobs">
          {jobs.map((job, index) => {
            return (
              <div key={index} className={`job ${job.status}`}>
                <div className="header">
                  <div className="position">
                    <a href={job.url}>{job.position} </a>
                  </div>
                  <button
                    onClick={() => handleStatusChange(job)}
                    className="status"
                  >
                    {job.status}
                  </button>
                </div>
                <div className="skills"> {job.skills}</div>
                {job.status !== 'declined' && (
									<div className="bulkText">
										{job.bulkText}
									</div>
								)}
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="jobList">
          {jobs.map((job, index) => {
            return (
              <li key={index} className="job">
                <a href={job.url}>{job.position}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
