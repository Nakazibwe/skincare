import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RoutineSteps from "./components/RoutineSteps";
import AddRoutineStep from "./components/AddRoutineStep";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  const [showAddRoutineStep, setshowAddRoutineStep] = useState(false);
  const [routinesteps, setRoutinesteps] = useState([]);
  useEffect(() => {
    const getRoutineSteps = async () => {
      const routineStepsFromServer = await fetchroutinesteps();
      setRoutinesteps(routineStepsFromServer);
    };
    getRoutineSteps();
  }, []);
  //Fetch Routine Steps
  const fetchroutinesteps = async () => {
    const res = await fetch("http://localhost:5000/routinesteps");
    const data = await res.json();

    return data;
  };

  //Fetch Routine Step
  const fetchroutinestep = async (id) => {
    const res = await fetch(`http://localhost:5000/routinesteps/${id}`);
    const data = await res.json();

    return data;
  };

  //Add Routine Step
  const addRoutineStep = async (newstep) => {
    const res = await fetch(`http://localhost:5000/routinesteps`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newstep),
    });
    const data = await res.json();
    setRoutinesteps([...routinesteps, data]);
    // const id = Math.floor(Math.random()*1000) + 1
    // const newStep = {id,...newstep }
    // setRoutinesteps([...routinesteps,newStep])
  };

  //Delete Routine Step.
  const deleteRoutineStep = async (id) => {
    await fetch(`http://localhost:5000/routinesteps/${id}`, {
      method: "DELETE",
    });
    setRoutinesteps(
      routinesteps.filter((routinestep) => routinestep.id !== id)
    );
  };

  //Toggle Reminder.
  const toggleReminder = async (id) => {
    const stepToToggle = await fetchroutinestep(id);
    const updatedstep = { ...stepToToggle, reminder: !stepToToggle.reminder };
    const res = await fetch(`http://localhost:5000/routinesteps/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedstep),
    });
    const data = await res.json();
    setRoutinesteps(
      routinesteps.map((routinestep) =>
        routinestep.id === id
          ? { ...routinestep, reminder: data.reminder }
          : routinestep
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setshowAddRoutineStep(!showAddRoutineStep)}
          showAdd={showAddRoutineStep}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddRoutineStep === true && (
                  <AddRoutineStep onAddStep={addRoutineStep} />
                )}
                {routinesteps.length > 0 ? (
                  <RoutineSteps
                    routinesteps={routinesteps}
                    onDelete={deleteRoutineStep}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "There is no skin care routine step to view."
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
