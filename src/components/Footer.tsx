import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#16223B', 
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 4),
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  height: "100px",
}));

const Logo = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src="/assets/pictures/logo.png" alt="Logo" />
      <Typography
        variant="body1"
        component="span"
        sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
      >
        © {new Date().getFullYear()} Faith. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
