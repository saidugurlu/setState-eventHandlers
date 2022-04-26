export const JobsList = ({ jobs }) => {
  return (
    <ul className="jobList">
      {jobs.map((job, index) => {
        return (
          <li key={index} className="job">
            <a href={job.url}>{job.position}</a>
          </li>
        );
      })}
    </ul>
  );
};
