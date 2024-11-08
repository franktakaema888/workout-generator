import exerciseData from './exerciseData'
  
export default function generateWorkout({ fitnessLevel, workoutType, duration }) {
  const exercises = [];
  const selectedExercises =
    exerciseData[workoutType][fitnessLevel.toLowerCase()];

  if (!selectedExercises) {
    // return an empty array if no exercises match
    return exercises;
  }

  // calculate total number of exercises needed
  const numberOfExercises = Math.floor(duration / 5);

  // shuffle the selected exercises to add variety
  const shuffledExercises = selectedExercises.sort(() => 0.5 - Math.random());

  // repeat the exercise list if necessary to fill the duration
  while (exercises.length < numberOfExercises) {
    exercises.push(
      ...shuffledExercises.slice(0, numberOfExercises - exercises.length)
    );
  }

  // adjust the duration of each exercise to evenly distribute the total duration
  const exerciseDuration = duration / exercises.length;

  const workoutPlan = exercises.map((exercise) => ({
    name: exercise.name,
    duration: Math.round(exerciseDuration),
  }));

  return workoutPlan;
}