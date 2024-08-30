'use client'

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container} from '@mui/material';

const Register = () => {
  const [IDNum, setIDNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Register:', { IDNum, password });
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      />
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width:  '400px',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Register
        </Typography>
            <form onSubmit={handleSubmit}>
    <Box mb={2}>
        <TextField
          fullWidth
          label="ID Number"
          type="IDNum"
          variant="outlined"
          value={IDNum}
          onChange={(e) => setIDNum(e.target.value)}
          required
    />
  </Box>
  <Box mb={2}>
    <TextField
      fullWidth
      label="Password"
          type="password"
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </Box>
  <Box mb={4}>
    <TextField
      fullWidth
      label="Confirm Password"
      type="password"
      variant="outlined"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
  </Box>


  <Box mb={2}>
    <Button
      type="submit"
      variant="contained"
      color="success"
      fullWidth
    >
      Register
    </Button>
  </Box>

  <Button 
    href="/login" 
    variant="contained"
    color="primary"
    fullWidth
  >
    Login
  </Button>
         
        </form>
      </Paper>

    </Container>
  );
};

export default Register;
