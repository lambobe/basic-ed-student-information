import React from 'react';
import { TextField, Button, Grid, Box, Container, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Visibility, Search } from '@mui/icons-material';

const CashierApproval = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f7fb',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            marginBottom: 3,
            borderBottom: '4px solid #008080',
            paddingBottom: 1,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Fee
        </Typography>

        {/* Search Bar */}
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Search..."
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
              sx={{
                backgroundColor: '#f5f7fb',
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                borderRadius: 2,
                backgroundColor: '#008080',
                '&:hover': {
                  backgroundColor: '#006666',
                },
              }}
            >
              Refresh Search
            </Button>
          </Grid>
        </Grid>

        {/* Table for Student Fee */}
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#008080' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Last Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>First Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Middle Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Year Level</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell sx={{ color: 'orange', fontWeight: 'bold' }}>Pending</TableCell>
                <TableCell>Lambo</TableCell>
                <TableCell>Bernie Anthony</TableCell>
                <TableCell>Delcampo</TableCell>
                <TableCell>Grade 1</TableCell>
                <TableCell>
                  <IconButton sx={{ color: '#008080' }}>
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default CashierApproval;
