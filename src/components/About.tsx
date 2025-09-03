import React from 'react';
import { Box, Typography, Button, IconButton, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: 1000,
  margin: '48px auto',
  borderRadius: 24,
  boxShadow: '0 8px 32px rgba(60,60,130,0.16)',
  padding: theme.spacing(4, 6),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(4, 3),
    textAlign: 'center',
  },
  paddingBottom: "40px",
}));

const PhotoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    marginBottom: theme.spacing(3),
  },
}));

const ProfileImg = styled('img')(({}) => ({
  width: '100%',
  maxWidth: 240,
  height: 'auto',
  borderRadius: 16,
  objectFit: 'cover',
  boxShadow: '0 0 24px rgba(80,80,120,0.07)',
}));

const SocialBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: 12,
  marginTop: -32,
  boxShadow: '0 4px 24px rgba(160,160,210,0.13)',
  padding: '8px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  zIndex: 1,
  justifyContent: 'center',
}));

const AboutMe: React.FC = () => (
  <Container id="about"> {/* <-- Add this ID */}
    {/* Left: Photo and social links */}
    <PhotoBox>
      <ProfileImg
        src="/assets/pictures/me.JPG"
        alt="Oluwasakin Faith"
        loading="lazy"
      />
      <SocialBox>
        <IconButton
          aria-label="Instagram"
          color="inherit"
          size="small"
          component="a"
          href="https://instagram.com/_faithh_xoxo"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon sx={{ color: '#a259ff' }} />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          color="inherit"
          size="small"
          component="a"
          href="https://github.com/FaithOluwasakin"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ color: '#000' }} />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          color="inherit"
          size="small"
          component="a"
          href="https://linkedin.com/in/faith-oluwasakin-b3a10b2a7/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon sx={{ color: '#a259ff', bgcolor: '#f6f5fe', borderRadius: '50%', p: 0.5 }} />
        </IconButton>
      </SocialBox>
    </PhotoBox>
    {/* Right: Text and actions */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: '#232536',
          fontFamily: 'Montserrat, Arial, sans-serif',
        }}
      >
        I am Professional Web Developer
      </Typography>
      <Typography sx={{ color: '#7a7a8a', mb: 1.5 }}>
        I’m a dedicated full-stack developer with a passion for building seamless, user-focused web applications from concept to deployment. Skilled in both frontend and backend technologies. I thrive on turning complex problems into simple, elegant solutions. I’m committed to continuous learning, delivering high-quality results, and creating digital experiences that make an impact.
      </Typography>
      <Box sx={{
        mt: 3,
        display: 'flex',
        gap: 2,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
      }}>
        <Button
          variant="contained"
          href="#projects"
          sx={{
            bgcolor: '#a259ff',
            fontWeight: 'bold',
            borderRadius: 2,
            px: 3,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#8a44e6' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          Download CV 
        </Button>
        {/* <Button
          variant="outlined"
          component="a"
          href="/assets/cv/FaithOluwasakinCV.pdf"
          download
          sx={{
            color: '#a259ff',
            borderColor: '#a259ff',
            fontWeight: 600,
            borderRadius: 2,
            px: 3,
            textTransform: 'none',
            '&:hover': { borderColor: '#8a44e6', color: '#8a44e6' },
            width: { xs: '100%', sm: 'auto' },
            textAlign: 'center',
          }}
        >
          Download CV
        </Button> */}
      </Box>
    </Box>
  </Container>
);

export default AboutMe;
