import React from 'react';
import { Box, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TeacherSubmitGrades = () => {
  return (
    <Box sx={{ backgroundColor: '#E0F7FA', minHeight: '100vh', padding: 4 }}>
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796B' }}>Teacher's Section List</Typography>
          <IconButton sx={{ color: '#00796B' }}>
            <i className="material-icons">menu</i> 
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField 
            label="Search by EDP Code..." 
            variant="outlined" 
            sx={{ flexGrow: 1 }} 
          />
          <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: 'white', '&:hover': { backgroundColor: '#005bb5' } }}>
            Search
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#1976d2', color: '#1976d2', '&:hover': { backgroundColor: '#E3F2FD' } }}>
            Refresh
          </Button>
        </Box>

       
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#00796B' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Section</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>EDP Code</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Subject</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Diamond</TableCell>
                <TableCell>4343</TableCell>
                <TableCell>English</TableCell>
                <TableCell>
                  <IconButton color="primary" href="/studentgradesubmit">
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gold</TableCell>
                <TableCell>4545</TableCell>
                <TableCell>Mathematics</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <VisibilityIcon />
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

export default TeacherSubmitGrades;
