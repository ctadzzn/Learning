import { useState } from "react";

function ToDoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    return storageJobs ?? [];
  });

  const handelAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input
        autoFocus
        value={job}
        onChange={(e) => setJob(e.target.value)}
        type="input"
      />
      <button onClick={handelAdd}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
