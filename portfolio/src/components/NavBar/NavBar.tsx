import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#232323',
        boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          My Portfolio
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}