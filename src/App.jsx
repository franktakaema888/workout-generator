import "./App.css";
import {useState} from 'react';
// redundant comment
import BasicBreadcrumbs from './components/NavBar'; // Why not call it NavBar instead of BasicBreadcrumbs? This is a bit confusing
import WorkoutForm from './components/WorkoutForm';
import WorkoutRoutine from './components/WorkoutRoutine';
import generateWorkout from './utils/workoutGenerator';

function App() {
  // I recommend to set the default state in the data structure to expect here, e.g. {}, [], "", 0, false
  const [workoutData, setWorkoutData] = useState(null); 

  // handle sumbission of workout form
  const handleFormSubmit = (data) => {
    // generate workout plan based on the user input data
    const workoutPlan = generateWorkout(data);
    // update the workout state with the workout data and user input
    setWorkoutData({ ...data, exercises: workoutPlan });
  };
  
  return (
    <>
      {/* If you named the component appropriately, then this comment wouldn't be necessary */}
      <div><BasicBreadcrumbs /></div>
      <br />
      {/* Redundant comment */}
      <div className="card">
          <h1 className="text-center">Personalized Workout Generator</h1>
          <WorkoutForm onFormSubmit={handleFormSubmit} />
      </div>
      <br />
      {/* Redundant comment somewhat */}
      {/* Why not conditionally render the whole section? Seems like it might be a bit confusing to see a Workout Plan heading, but not seeing a workout plan */}
      <div className="card">
        <h1 className="text-center">Workout Plan</h1>
        {workoutData && <WorkoutRoutine data={workoutData} />}
      </div>
    </>
  );
}

export default App;
