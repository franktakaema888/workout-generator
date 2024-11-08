import "./App.css";
import {useState} from 'react';
// Import Components
import BasicBreadcrumbs from './components/NavBar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutRoutine from './components/WorkoutRoutine';
import generateWorkout from './utils/workoutGenerator';

function App() {
  
  const [workoutData, setWorkoutData] = useState(null); // workout variable to hold workout data

  // handle sumbission of workout form
  const handleFormSubmit = (data) => {
    // generate workout plan based on the user input data
    const workoutPlan = generateWorkout(data);
    // update the workout state with the workout data and user input
    setWorkoutData({ ...data, exercises: workoutPlan });
  };
  
  return (
    <>
      {/* Navigation Bar at the top */}
      <div><BasicBreadcrumbs /></div>
      <br />
      {/* Card Container for the workout form */}
      <div className="card">
          <h1 className="text-center">Personalized Workout Generator</h1>
          <WorkoutForm onFormSubmit={handleFormSubmit} />
      </div>
      <br />
      {/* Card Container for workout routines that will be generated based on user input */}
      <div className="card">
        <h1 className="text-center">Workout Plan</h1>
        {workoutData && <WorkoutRoutine data={workoutData} />}
      </div>
    </>
  );
}

export default App;
