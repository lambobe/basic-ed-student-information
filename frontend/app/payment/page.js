import React from 'react';
import { TextField, Button, Grid, Box, Container } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const PaymentForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'blue',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bacgroundColor: 'blue'
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            textAlign: 'center',
            fontWeight: 600,
            marginBottom: '20px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Payment Form
        </h1>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fee Type"
              value="Enrollment Fee"
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                borderRadius: '10px',
                backgroundColor: '#f5f7fb',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              value="500"
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                borderRadius: '10px',
                backgroundColor: '#f5f7fb',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<CloudUpload />}
              sx={{
                padding: '10px 20px',
                borderRadius: '10px',
                border: '2px dashed #cfd8dc',
                color: '#546e7a',
              }}
            >
              Upload Payment Proof
              <input type="file" hidden />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              placeholder="Enter payment details"
              sx={{
                borderRadius: '10px',
                backgroundColor: '#f5f7fb',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              href="/cashierapproval"
              fullWidth
              sx={{
                padding: '12px 0',
                fontSize: '16px',
                borderRadius: '10px',
                backgroundColor: '#1e88e5',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Submit Payment
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentForm;
