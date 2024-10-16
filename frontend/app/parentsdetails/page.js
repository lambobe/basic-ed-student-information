'use client'
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container, Grid } from '@mui/material';

const phoneNumberPattern = /^[0-9]{11}$/;

const ParentDetails = () => {
  const [studentInfo, setStudentInfo] = useState({
    motherfullname: '',
    motheroccup: '',
    mothercontact: '',
    fatherfullname: '',
    fatheroccup: '',
    fathercontact: '',
  });

  const [errors, setErrors] = useState({
    mothercontact: '',
    fathercontact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });

    if (name === 'mothercontact' || name === 'fathercontact') {
      if (!phoneNumberPattern.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Invalid contact number. Must be 11 digits.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent Info:', studentInfo);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: "url('/images/basic-ed.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      />
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '47%',
          maxWidth: '800px',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Parent's Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mother's Full Name"
                name="motherfullname"
                variant="outlined"
                value={studentInfo.motherfullname}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mother's Occupation"
                name="motheroccup"
                variant="outlined"
                value={studentInfo.motheroccup}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Mother's Contact Number"
                name="mothercontact"
                variant="outlined"
                value={studentInfo.mothercontact}
                onChange={handleChange}
                margin="normal"
                error={!!errors.mothercontact}
                helperText={errors.mothercontact}
                required
              />
            </Grid>

     
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Father's Full Name"
                name="fatherfullname"
                variant="outlined"
                value={studentInfo.fatherfullname}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Father's Occupation"
                name="fatheroccup"
                variant="outlined"
                value={studentInfo.fatheroccup}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Father's Contact Number"
                name="fathercontact"
                variant="outlined"
                value={studentInfo.fathercontact}
                onChange={handleChange}
                margin="normal"
                error={!!errors.fathercontact}
                helperText={errors.fathercontact}
                required
              />
            </Grid>
          </Grid>

          <Box mb={2} mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              href="/addressdetails"
              fullWidth
            >
              Next
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ParentDetails;
