import { useState } from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import _jobs from "./data/jobs.json";
import { JobsFull } from "./components/JobsFull";
import { JobsList } from "./components/JobsList";

_jobs.forEach((job) => {
  job.status = "send";
});

function App() {
  const [displayKind, setDisplayKind] = useState("full");
  const [jobs, setJobs] = useState(_jobs);

  const saveToLocalStorage = () => {
    const jobAppState = {
      displayKind,
      jobs,
    };
    localStorage.setItem("jobAppState", JSON.stringify(jobAppState));
  };

  const handleToggleView = () => {
    const _displayKind = displayKind === "full" ? "list" : "full";
    setDisplayKind(_displayKind);
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
        <JobsFull jobs={jobs} handleStatusChange={handleStatusChange} />
      ) : (
        <JobsList jobs={jobs} />
      )}
    </div>
  );


 
export default App;
