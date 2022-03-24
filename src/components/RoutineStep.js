import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";

const RoutineStep = ({ step, deletestep,togglestep }) => {
  return (
    <div className={`task ${step.reminder === true ? 'reminder': '' }`} onDoubleClick = {() => togglestep(step.id)}>
      <h3>
        {step.title} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick = {()=> deletestep(step.id)}/>
      </h3>
      <p>{step.body}</p>
    </div>
  );
};

export default RoutineStep;
