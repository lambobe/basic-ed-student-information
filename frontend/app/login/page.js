'use client'

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  IconButton,
  InputAdornment,
} from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const logoUrl = '/images/logo.jpg';

const Login = () => {
  const [IDNum, setIDNum] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { IDNum, password });
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: 'relative',
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >

      <Box
        sx={{
          width: '50%',
          background: 'linear-gradient(to bottom, #1d9fe3, #0072b1)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h4" align="left" sx={{width:'81%'}} gutterBottom>
          More Than Just a School
        </Typography>
        <Typography
          variant="body1"
          align="justify" 
          sx={{ marginTop: 2, width: '80%' }}
        >
          At University of Cebu Lapu-Lapu and Mandaue, we’re not just a place to
          earn a diploma. We’re a community that empowers you to discover your
          passions, develop your talents, and become the best version of
          yourself. Join us, and unlock a transformative educational experience
          beyond the classroom. This is your launchpad for the future we can’t
          wait to see what you’ll accomplish.
        </Typography>
      </Box>

    
      <Paper
        sx={{
          position: 'relative',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          boxShadow: 3,
          height: '100%',
        }}
      >
     
        <img
          src={logoUrl}
          alt="University Logo"
          style={{ maxHeight: '150px'}}
        />

  
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{marginBottom:'40px'}}>
          Basic Education Student Information System
        </Typography>

        <Typography variant="subtitle1" align="left" sx={{ width: '80%' }}>
        Please login to your account
        </Typography>


        <form onSubmit={handleSubmit} style={{ width: '80%' }}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Enter your ID Number or Email"
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
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Log in
          </Button>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button href="/forgot-password" size="small">
              Forgot password?
            </Button>
            <Button href="/parentsconsent" size="small">
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
