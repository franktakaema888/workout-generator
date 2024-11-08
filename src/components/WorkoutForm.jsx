import { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';

export default function WorkoutForm({ onFormSubmit }) {
  const [name, setName] = useState("Enter Name"); // Name State 
  const [fitnessLevel, setFitnessLevel] = useState(''); // Fitness Level State
  const [workoutType, setWorkoutType] = useState(''); // Workout Type State
  const [duration, setDuration] = useState(15); // Duration State

  // handle sumbission of workout form for user data
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name, fitnessLevel, workoutType, duration });
  };

  return (
  <>
    {/* For Container */}
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      {/* Enter Name */}
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Select Fitness Level from Drop Down */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="fitness-level-label">Fitness Level</InputLabel>
        <Select
          labelId="fitness-level-label"
          value={fitnessLevel}
          label="Fitness Level"
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          {/* Items for fitness level options */}
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
      {/* Select Workout Type */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="workout-type-label">Workout Type</InputLabel>
        <Select
          labelId="workout-type-label"
          value={workoutType}
          label="Workout Type"
          onChange={(e) => setWorkoutType(e.target.value)}
        >
          {/* Items for workout type options */}
          <MenuItem value="cardio">Cardio</MenuItem>
          <MenuItem value="strength">Strength</MenuItem>
          <MenuItem value="flexibility">Flexibility</MenuItem>
        </Select>
      </FormControl>
      {/* Select Duration of Workout */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="workout-type-label">Duration (minutes)</InputLabel>
        <Select
          labelId="duration-label"
          value={duration}
          label="Duration (minutes)"
          onChange={(e) => setDuration(e.target.value)}
        >
          {/* Items for duration of workout */}
          <MenuItem value="15">15 min</MenuItem>
          <MenuItem value="30">30 min</MenuItem>
          <MenuItem value="45">45 min</MenuItem>
          <MenuItem value="60">60 min</MenuItem>
          <MenuItem value="75">75 min</MenuItem>
          <MenuItem value="90">90 min</MenuItem>
        </Select>
      </FormControl>

      {/* Submit Button to generate workout */}
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Generate Workout
      </Button>
    </Box>
  </>
  );
}