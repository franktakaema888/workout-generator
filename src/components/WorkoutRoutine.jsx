import {
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

export default function WorkoutRoutine({ data }) {
  // destructure data prop to get the relevant information
  const { name, fitnessLevel, workoutType, duration, exercises } = data;

  // Ensure that 'exercises' is provided;
  const exerciseList = exercises || [
    { name: 'Exercise 1', duration: 5 },
    { name: 'Exercise 2', duration: 10 },
  ];

  return (
    // Container for styling
    <Container sx={{ mt: 5 }}>
      {/* Displays users workout details */}
      <div>
        {/* show user's name */}
        <h2>{`${name}'s`} Routine</h2> 
        {/* fitness level */}
        <p><strong>Fitness Level:</strong> {fitnessLevel}</p>
        {/* workout type */}
        <p><strong>Workout Type:</strong> {workoutType}</p>
        {/* total duration of workout */}
        <p><strong>Total Duration:</strong> {duration} minutes</p>
      </div>

      {/* Section to list the exercises */}
      <div>
        <List>
          {/* maps over the exerciseList array to create list items for each exercise */}
          {exerciseList.map((exercise, index) => (
            <ListItem key={index} disableGutters>
              {/* displays the exercise name and duration */}
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
