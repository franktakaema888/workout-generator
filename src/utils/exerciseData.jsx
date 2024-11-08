// Created synthetic workout data
// Possible Improvement for this would be to use OpenAI's API to generate workout routines for the application
const exerciseData = {
    cardio: {
      beginner: [
        { name: 'Walking', duration: 5 },
        { name: 'Jogging', duration: 5 },
        { name: 'Jumping Jacks', duration: 5 },
      ],
      intermediate: [
        { name: 'Running', duration: 5 },
        { name: 'Burpees', duration: 5 },
        { name: 'Mountain Climbers', duration: 5 },
      ],
      advanced: [
        { name: 'Sprinting', duration: 5 },
        { name: 'High-Intensity Interval Training', duration: 5 },
        { name: 'Box Jumps', duration: 5 },
      ],
    },
    strength: {
      beginner: [
        { name: 'Bodyweight Squats', duration: 5 },
        { name: 'Knee Push-ups', duration: 5 },
        { name: 'Glute Bridges', duration: 5 },
      ],
      intermediate: [
        { name: 'Lunges', duration: 5 },
        { name: 'Push-ups', duration: 5 },
        { name: 'Plank', duration: 5 },
      ],
      advanced: [
        { name: 'Weighted Squats', duration: 5 },
        { name: 'Pull-ups', duration: 5 },
        { name: 'Deadlifts', duration: 5 },
      ],
    },
    flexibility: {
      beginner: [
        { name: 'Neck Stretches', duration: 5 },
        { name: 'Shoulder Rolls', duration: 5 },
        { name: 'Ankle Circles', duration: 5 },
      ],
      intermediate: [
        { name: 'Hamstring Stretch', duration: 5 },
        { name: 'Quad Stretch', duration: 5 },
        { name: 'Triceps Stretch', duration: 5 },
      ],
      advanced: [
        { name: 'Full Body Stretch', duration: 5 },
        { name: 'Yoga Flow', duration: 5 },
        { name: 'Pilates Routine', duration: 5 },
      ],
    },
  };
  
export default exerciseData;  