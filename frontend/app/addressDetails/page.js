'use client'

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container, Grid } from '@mui/material';

const AddressDetails = () => {
  const [addressInfo, setAddressInfo] = useState({
    zipCode: '',
    province: '',
    city: '',
    barangay: '',
    streetAddress: '',
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log('Address Info:', addressInfo);
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
          Address Details
        </Typography>
        <form onSubmit={handleAddressSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Zip Code"
                name="zipCode"
                variant="outlined"
                value={addressInfo.zipCode}
                onChange={handleAddressChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Province"
                name="province"
                variant="outlined"
                value={addressInfo.province}
                onChange={handleAddressChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City/Municipality"
                name="city"
                variant="outlined"
                value={addressInfo.city}
                onChange={handleAddressChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Barangay"
                name="barangay"
                variant="outlined"
                value={addressInfo.barangay}
                onChange={handleAddressChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Street Address"
                name="streetAddress"
                variant="outlined"
                value={addressInfo.streetAddress}
                onChange={handleAddressChange}
                margin="normal"
                required
              />
            </Grid>
          </Grid>

          <Box mb={2} mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              href="/previousschool"
            >
              next
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddressDetails;
