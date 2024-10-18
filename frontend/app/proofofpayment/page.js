import React from 'react';
import { TextField, Button, Grid, Box, Container, Typography, Paper } from '@mui/material';

const ProofOfPayment = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'darkblue',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,  
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: 'white',
          padding: 3, 
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"  
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            textAlign: 'center',
            color: '#008080',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Proof of Payment
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: 1 }}>
        
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Name"
              value="Oliver Lambo Batan"
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small"  
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="ID Number"
              value="2343243"
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small" 
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Grade Level"
              value="Grade 1"
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small" 
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>

     
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fee Type"
              value="Enrollment Fee"
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small" 
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Amount"
              value="500"
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small"  
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>

          
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontSize: '14px' }}>
              Payment Proof (Image)
            </Typography>
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                height: 100,  
                backgroundColor: '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: '#888' }}>
                Image Preview
              </Typography>
            </Paper>
          </Grid>

        
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Payment Details"
              multiline
              rows={2}  
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small"  
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 2 }}
            />
          </Grid>

   
          <Grid item xs={12}>
            <Button
              variant="contained"
              href= "/assessment"
              fullWidth
              sx={{
                backgroundColor: '#008080',
                padding: '10px 0',
                fontSize: '14px',  
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#006666',
                },
              }}
            >
              Approve
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProofOfPayment;
