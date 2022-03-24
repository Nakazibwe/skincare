import React from "react";
import RoutineStep from './RoutineStep';
const RoutineSteps = ({routinesteps, onDelete,onToggle}) => {
  
  return (
    <>
    {routinesteps.map((routinestep) => (
        <RoutineStep key={routinestep.id} step = {routinestep} deletestep = {onDelete} togglestep = {onToggle}/>
      ))}
    </>
  );
};

export default RoutineSteps;
