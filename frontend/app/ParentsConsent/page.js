'use client';

import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Paper } from '@mui/material';

const ParentConsentForm = () => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [consent, setConsent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent Consent Form Submitted:', {
      parentName,
      studentName,
      contactNumber,
      address,
      consent,
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: "url('/images/form-background.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 2,
        }}
      >
        <Paper
          sx={{
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Parent Consent Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Parent/Guardian Name"
                variant="outlined"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Student Name"
                variant="outlined"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Consent Details"
                multiline
                rows={4}
                variant="outlined"
                value={consent}
                onChange={(e) => setConsent(e.target.value)}
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ParentConsentForm;
