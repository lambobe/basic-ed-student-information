'use client'
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const Admission = () => {
  const [studentInfo, setStudentInfo] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Info:', studentInfo);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        
        <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: "url('/images/kids.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)',
            }}
          />
        </Grid>

   
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 4,
            }}
          >
            <Paper
              sx={{
                padding: 4,
                borderRadius: 2,
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  color: '#1E3A8A',
                }}
              >
                Admission Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  value={studentInfo.firstName}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  value={studentInfo.lastName}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={studentInfo.dob}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  variant="outlined"
                  value={studentInfo.address}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="contact"
                  variant="outlined"
                  value={studentInfo.contact}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #1E3A8A 30%, #6A1B9A 90%)',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6A1B9A 30%, #1E3A8A 90%)',
                      transform: 'scale(1.05)',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admission;
