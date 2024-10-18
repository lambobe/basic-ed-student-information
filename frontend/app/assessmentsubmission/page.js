import React from 'react';
import { Box, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const AssessmentTable = () => {
  return (
    <Box sx={{ backgroundColor: '#E0F7FA', minHeight: '100vh', padding: 4 }}>
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796B' }}>ASSESSMENT</Typography>
          <IconButton sx={{ color: '#00796B' }}>
            <i className="material-icons">menu</i> {/* Replacing with the actual menu icon */}
          </IconButton>
        </Box>

        {/* Button */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: 'white', '&:hover': { backgroundColor: '#005bb5' } }}>
            Create Assessment
          </Button>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#00796B' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>School Year</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Grade Level</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Assessment Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Assessment Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Assessment Time</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Assessment Fee</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2021-2022</TableCell>
                <TableCell>Grade 10</TableCell>
                <TableCell>Enrollment</TableCell>
                <TableCell>Enrollment Payment</TableCell>
                <TableCell>02/02/2024</TableCell>
                <TableCell>7:40 AM</TableCell>
                <TableCell>500</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1}}>
                    <Button variant="contained" sx={{ backgroundColor: '#388E3C', color: 'white', '&:hover': { backgroundColor: '#2E7D32' } }}>
                      Submit Assessment
                    </Button>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default AssessmentTable;
