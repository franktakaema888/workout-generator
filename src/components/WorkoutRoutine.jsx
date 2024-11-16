import {
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const defaultExercises = [
  { name: 'Exercise 1', duration: 5 },
  { name: 'Exercise 2', duration: 10 },
]

export default function WorkoutRoutine({ data }) {
  const { name, fitnessLevel, workoutType, duration, exercises } = data;

  const exerciseList = exercises || defaultExercises;

  // lots of redundant comments
  return (
    <Container sx={{ mt: 5 }}>
      <div>
        <h2>{`${name}'s`} Routine</h2> 
        <p><strong>Fitness Level:</strong> {fitnessLevel}</p>
        <p><strong>Workout Type:</strong> {workoutType}</p>
        <p><strong>Total Duration:</strong> {duration} minutes</p>
      </div>

      <div>
        <List>
          {exerciseList.map((exercise, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                primary={exercise.name}
                secondary={`${exercise.duration} minutes`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}
