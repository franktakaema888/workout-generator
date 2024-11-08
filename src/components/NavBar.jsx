import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// import { BrowserRouter as  Route } from 'react-router-dom';
// import Benefits from '../Benefits';
// import App from '../App.jsx';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    // Container for nav bar
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {/* Home Nav */}
        <Link 
          underline="hover" 
          color="inherit" 
          href="/" 
        >
          Home
        </Link>
        {/* Workout Benefits Nav */}
        <Link
          underline="hover"
          color="inherit"
          href=""
        >
          Workout Benefits
        </Link>
        {/* Webpage Logo */}
        <Typography sx={{ color: 'text.primary' }}>Fitness+</Typography>
      </Breadcrumbs>
    </div>
  );
}
