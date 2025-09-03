import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ProjectIdeaSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#16223B", 
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="h4" color="white" fontWeight={700} mb={1}>
        Do you have Project Idea?
      </Typography>
      <Typography variant="h4" color="white" fontWeight={700} mb={2}>
        Let's discuss your project!
      </Typography>
      <Typography variant="body2" color="grey.400" mb={3}>
        There are many variations of passages of Lorem Ipsum available,
        <br />
        but the majority have suffered alteration.
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, backgroundColor: '#a259ff' }}
        endIcon={<span style={{ fontSize: 20, marginLeft: 4 }}>→</span>}
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Let's work Together
      </Button>
    </Box>
  );
};

export default ProjectIdeaSection;
