import React, { useState } from "react";

function CreateTask() {
  const [TaskDetails, setTaskDetails] = useState({
    user: "",
    goal: "",
    title: "",
    status: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  return <div></div>;
}

export default CreateTask;
