import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const Logo = styled('img')(({ theme }) => ({
  height: 40,
  marginRight: theme.spacing(2),
  borderRadius: '50%',
}));

const navLinks = ['Home', 'About', 'Portfolio', 'Services'];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  const handleDrawerNavClick = (id: string) => {
    scrollToSection(id);
    setDrawerOpen(false); 
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)', 
          // backdropFilter: 'saturate(180%) blur(20px)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 4, md: 8 },
            minHeight: { xs: 64, md: 80 },
          }}
        >
          <Logo src="/assets/pictures/logo.png" alt="Logo" />
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              flexGrow: 1,
              fontFamily: 'Montserrat, Arial, sans-serif',
            }}
          >
            Faith
          </Typography>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navLinks.map((text) => {
              const id = text.toLowerCase();
              return (
                <Button
                  key={text}
                  color="inherit"
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    mx: 0.5,
                    cursor: 'pointer',
                    color: 'text.primary', 
                  }}
                  onClick={() => handleNavClick(id)}
                >
                  {text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
                </Button>
              );
            })}
            <Button
              variant="contained"
              sx={{
                ml: 2,
                bgcolor: '#a259ff',
                textTransform: 'none',
                fontFamily: 'Montserrat, Arial, sans-serif',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: '#8a44e6',
                },
              }}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navLinks.map((text) => {
              const id = text.toLowerCase();
              return (
                <ListItem key={text} disablePadding sx={{ cursor: 'pointer' }}>
                  <ListItemButton onClick={() => handleDrawerNavClick(id)}>
                    <ListItemText
                      primary={text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
            <ListItem disablePadding sx={{ cursor: 'pointer' }}>
              <ListItemButton
                onClick={() => {
                  scrollToSection('contact');
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Add a placeholder Box to offset the fixed AppBar height */}
      <Box sx={{ height: { xs: 64, md: 80 } }} />
    </>
  );
};

export default Navbar;
