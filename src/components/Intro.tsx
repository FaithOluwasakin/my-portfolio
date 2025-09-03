import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  backgroundImage:
    'radial-gradient(circle at top left, #f6d36533, transparent 70%), ' + 
    'radial-gradient(circle at bottom right, #fda08533, transparent 70%)',
  backgroundRepeat: 'no-repeat',
}));

const StatBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(242, 242, 242, 0.85)',
  borderRadius: 8,
  padding: theme.spacing(1.5, 3),
  textAlign: 'center',
  minWidth: 150,
  flexGrow: 1,
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
}));

const LogoImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: "20px",
  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
});

const HeroSection: React.FC = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const target = 10;
    const duration = 3000;
    const intervalTime = 300; 
    const step = Math.ceil(target / (duration / intervalTime)); 

    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        setProjectsCount(target);
        clearInterval(interval);
      } else {
        setProjectsCount(count);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {/* Left content */}
      <Box
        sx={{
          flex: '1 1 300px',
          maxWidth: 600,
          color: '#3A3A3A',
          fontFamily: 'Montserrat, Arial, sans-serif',
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold" mb={2}>
          Oluwasakin Faith
        </Typography>

        <Typography variant="h6" sx={{ mb: 3, color: '#555555', fontWeight: 500 }}>
          Software Developer <br />
          Based in Lagos
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#a259ff',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#8a44e6' },
          }}
          aria-label="Say hello"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Say Hello!
        </Button>

        {/* Statistics Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, 
            mt: 4, 
            flexWrap: { xs: 'wrap', sm: 'nowrap' }, 
            justifyContent: 'space-between',
          }}
        >
          <StatBox>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#a259ff' }}>
              1+
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Year Experience
            </Typography>
          </StatBox>
          <StatBox>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#a259ff' }}>
              {projectsCount}+
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Projects Completed
            </Typography>
          </StatBox>
          <StatBox>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#a259ff' }}>
              1+
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Happy Clients
            </Typography>
          </StatBox>
        </Box>
      </Box>

      {/* Right photo */}
      <Box
        sx={{
          flex: '1 1 300px',
          maxWidth: 400,
          textAlign: 'center',
          mt: { xs: 4, md: 0 },
        }}
      >
        <LogoImage src="/assets/pictures/me.JPG" alt="Oluwasakin Faith" sx={{
          marginRight: '-50px',}} />
      </Box>
    </HeroContainer>
  );
};

export default HeroSection;
