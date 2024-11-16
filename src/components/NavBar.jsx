import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// Always remove unused code, not just comment it out - at least when committing code


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.'); // should remove console logs from production code
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          underline="hover" 
          color="inherit" 
          href="/" 
        >
          Home
        </Link>
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
