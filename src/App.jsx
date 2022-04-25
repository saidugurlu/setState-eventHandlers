// import { useState } from 'react'
import "./App.scss";
import ReactDOM from "react-dom";
import jobs from "./data/jobs.json";

function App() {
  return (
    <div className="App">
      <h1>Job Application Process</h1>
      <div className="jobs">
        {jobs.map((job, index) => {
          return (
            <div key={index} className="job">
              <div className="position">
                {" "}
                <a href={job.url}>{job.position} </a>
              </div>
              <div className="skills"> {job.skills}</div>
              <div className="bulkText">{job.bulkText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
