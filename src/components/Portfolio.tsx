import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LinkOrg UK Website',
    category: 'Website',
    description:
      'A modern, user-friendly VoIP platform website for Linkorg, featuring seamless navigation, service details, and customer engagement tools.',
    image: '/assets/pictures/uksite.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Calculator',
    category: 'Website',
    description:
      'A simple yet secure password generator that creates strong, randomized passwords to enhance online security',
    image: '/assets/pictures/calculator.png',
    link: '#',
  },
  {
    id: 3,
    title: 'VOIP Clone',
    category: 'Website',
    description:
      'A pixel-perfect clone of a website component, faithfully replicating its layout, styling, and functionality using React.',
    image: '/assets/pictures/voipclone.png',
    link: '#',
  },
  {
    id: 4,
    title: 'To-Do List',
    category: 'Website',
    description:
      'A functional to-do list app that allows users to add, manage, and track tasks with a clean, intuitive interface.',
    image: '/assets/pictures/todolist.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Tax Calculator',
    category: 'Website',
    description:
      'A tax calculator that quickly computes accurate tax amounts based on user input with a straightforward interface.',
    image: '/assets/pictures/taxcalc.png',
    link: '#',
  },
  {
    id: 6,
    title: 'Product Admin Dashboard',
    category: 'UI-UX Design',
    description:
      'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
    image: '/assets/pictures/me.JPG',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <Box
      id="portfolio" // <-- Add this id for scroll target
      sx={{ maxWidth: 1050, mx: 'auto', px: 3, pt: 6, pb: 3 }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        align="center"
        gutterBottom
        component="h2"
      >
        Portfolio
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        mb={4}
        component="p"
      >
        A curated selection of projects showcasing my skills in building functional and user-focused solutions.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {projects.map(({ id, title, category, description, image, link }) => (
          <Card
            key={id}
            elevation={1}
            sx={{
              width: { xs: '100%', sm: '48%', md: '31%' },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="overline" color="text.secondary" gutterBottom>
                {category.toUpperCase()}
              </Typography>
              <Typography
                gutterBottom
                fontWeight="bold"
                variant="subtitle1"
                color="text.primary"
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {description}
              </Typography>
              <Button
                href={link}
                variant="outlined"
                size="small"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#a259ff',
                  border: '1px solid #a259ff',
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#a259ff',
                    color: '#fff',
                  },
                }}
              >
                Case Study
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
