import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useForm, ValidationError } from '@formspree/react';

const inputSx = {
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    height: '48px',
    '& fieldset': {
      borderColor: '#c4c4c4',
    },
    '&:hover fieldset': {
      borderColor: '#E65D0F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E65D0F',
      borderWidth: 2,
    },
  },
  '& input, & textarea': {
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    color: '#010156',
    padding: '14px 12px', 
  },
  '& label': {
    fontFamily: 'Inter, sans-serif',
    color: '#666666',
    fontSize: '14px',
  },
  '& .MuiInputLabel-shrink': {
    fontSize: '12px',
  },
};

const ContactSection: React.FC = () => {
  const theme = useTheme();

  const [state, formSubmit] = useForm('xrbljveq'); 

  // Track form input values with state
  const [values, setValues] = useState({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!values.name.trim()) newErrors.name = 'Name is required';
    if (!values.email.trim()) newErrors.email = 'Email is required';
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())
    )
      newErrors.email = 'Invalid email address';

    if (!values.subject.trim()) newErrors.subject = 'Subject is required';
    if (!values.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      formSubmit(event);
    }
  };

  const ContactInfoItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
  }> = ({ icon, label, value }) => (
    <Paper
      elevation={3}
      sx={{
        p: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mb: 3,
        borderRadius: 2,
        cursor: 'default', 
        '&:hover': {
          boxShadow: `0 4px 15px #f5f0ff`,
          backgroundColor: '#f5f0ff',
        },
      }}
      tabIndex={-1} 
      role="group"
      aria-label={`${label} information`}
    >
      <Box
        sx={{
          bgcolor: '#a259ff',
          color: 'white',
          borderRadius: 1,
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" component="div">
          {label}
        </Typography>
        <Typography variant="body2" fontWeight="bold" component="div">
          {value}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box
      id="contact"
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 6,
        p: { xs: 2, sm: 4 },
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
        marginBottom: '-15px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Left side */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight={700} mb={1.5}>
          Let’s discuss your Project
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          We’re always happy to hear from you. Whether you have questions, need
          assistance, or just want to say hello, reach out through any of the
          channels below:
        </Typography>

        <ContactInfoItem
          icon={<LocationOnIcon />}
          label="Address:"
          value={
            <a
              href="https://www.google.com/maps/search/?api=1&query=Surulere%2C%20Lagos"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              aria-label="Open map for Surulere, Lagos"
            >
              Surulere, Lagos
            </a>
          }
        />

        <ContactInfoItem
          icon={<EmailOutlinedIcon />}
          label="My Email:"
          value={
            <a
              href="mailto:faitholuwasakin@gmail.com"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
              aria-label="Send email to faitholuwasakin@gmail.com"
            >
              faitholuwasakin@gmail.com
            </a>
          }
        />
        <ContactInfoItem
          icon={<PhoneOutlinedIcon />}
          label="Call Me Now:"
          value={
            <a
              href="tel:+2349060880880"
              style={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
              aria-label="Call phone number +2349060880880"
            >
              09060880880
            </a>
          }
        />

        {/* Social icons */}
        <Stack
          direction="row"
          spacing={2}
          mt={3}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <IconButton
            aria-label="GitHub"
            sx={{ bgcolor: '#a259ff', color: 'white', '&:hover': { bgcolor: '#7a3bdb' } }}
            size="small"
            component="a"
            href="https://github.com/FaithOluwasakin"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: '#a259ff', '&:hover': { color: '#7a3bdb' } }}
            size="small"
            component="a"
            href="https://instagram.com/_faithh_xoxo"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            sx={{ color: '#a259ff', '&:hover': { color: '#a259ff' } }}
            size="small"
            component="a"
            href="https://linkedin.com/in/faith-oluwasakin-b3a10b2a7/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      {/* Right side - form */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Please complete the form below, and we will handle the rest promptly.
        </Typography>

        {state.succeeded ? (
          <Typography variant="h6" color="success.main">
            Thank you for reaching out! We will get back to you soon.
          </Typography>
        ) : (
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="dense"
              required
              name="name"
              aria-required="true"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={
                errors.name || (
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                )
              }
              sx={inputSx}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
              type="email"
              required
              name="email"
              aria-required="true"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={
                errors.email || (
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                )
              }
              sx={inputSx}
            />

            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              margin="dense"
              name="location"
              value={values.location}
              onChange={handleChange}
              sx={inputSx}
            />

            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="dense"
              required
              name="subject"
              aria-required="true"
              value={values.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={
                errors.subject || (
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                )
              }
              sx={inputSx}
            />

            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              required
              name="message"
              aria-required="true"
              value={values.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={
                errors.message || (
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                )
              }
              sx={{ ...inputSx, mb: 3 }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                width: { xs: '100%', sm: 'auto' },
                backgroundColor: '#a259ff',
                '&:hover': { backgroundColor: '#7a3bdb' },
              }}
              type="submit"
              disabled={state.submitting}
              aria-label="Submit contact form"
            >
              Submit
            </Button>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ContactSection;
