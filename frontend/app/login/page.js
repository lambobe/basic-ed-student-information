'use client'

import React, { useState } from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Snowfall from 'react-snowfall';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0047ab',
    },
  },
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.loginContainer}>
       
      <Snowfall color="white" snowflakeCount={50} speed={[0.01, 0.05]} wind={[0 , 0.1]} />


        <Container maxWidth="xs" style={styles.loginBox}>
          <img
            src="/images/logo.jpg"
            alt="University of Cebu"
            style={styles.logo}
          />
          <TextField
            fullWidth
            label="ID Number or Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
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
          <FormControlLabel
          control={<Checkbox name="remember" color="primary" />}
          label="Remember Me"
          sx={{ display: 'flex', justifyContent: 'flex-end', width: '103%' }}
          />
          <Button fullWidth variant="contained" color="primary" size="large" href="/studentprofile">
            Login
          </Button>
          <div style={styles.loginLinks}>
            <a href="/parentsconsent" style={styles.link}>Register</a>
            <a href="/forgot-password" style={styles.link}>Forgot Your Password?</a>
            <a href="/help" style={styles.link}>Need Help?</a>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

const styles = {
  loginContainer: {
    position: 'relative',
    height: '100vh',
    background: 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(to bottom, #0047ab, #003366)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  loginBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  logo: {
    width: '130px',
    marginBottom: '0rem',
    display: 'block', 
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#0047ab',
  },
  
  '@keyframes blink': {
    '0%, 100%': {
      filter: 'brightness(100%)',
    },
    '50%': {
      filter: 'brightness(50%)',
    },
  },
};

export default LoginPage;
