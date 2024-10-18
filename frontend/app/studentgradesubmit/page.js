import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TeacherSubmitGrades = () => {
  const students = [
    { name: 'Oliver Pacatang', section: 'Grade 10', id: '2314324', edpCode: '4343', subject: 'English', grades: [78, 89, 90, 78] },
    { name: 'Claire Dungog', section: 'Grade 10', id: '4354345', edpCode: '4343', subject: 'English', grades: [87, 90, 78, 90] },
    { name: 'Johnhay Batan', section: 'Grade 10', id: '2314324', edpCode: '4343', subject: 'English', grades: [88, 87, 89, 90] },
    { name: 'Moises Belacura', section: 'Grade 10', id: '2314324', edpCode: '4343', subject: 'English', grades: [89, 90, 90, 78] },
    { name: 'Bernie Lambo', section: 'Grade 10', id: '2314324', edpCode: '4343', subject: 'English', grades: [76, 89, 95, 98] },
  ];

  const calculateFinalGrade = (grades) => {
    return (grades.reduce((acc, curr) => acc + curr, 0) / grades.length).toFixed(2);
  };

  return (
    <Box sx={{ backgroundColor: '#E0F7FA', minHeight: '100vh', padding: 4 }}>
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>

    
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796B', mb: 4 }}>STUDENTS GRADE SUBMISSION</Typography>

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
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Full Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Section</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Student ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Edp Code</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Subject</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>1st Quarter Grade</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>2nd Quarter Grade</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>3rd Quarter Grade</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>4th Quarter Grade</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Final Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.edpCode}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  {student.grades.map((grade, i) => (
                    <TableCell key={i}>
                      <TextField value={grade} variant="outlined" size="small" sx={{ width: '60px' }} />
                    </TableCell>
                  ))}
                  <TableCell>{calculateFinalGrade(student.grades)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" sx={{ backgroundColor: '#D32F2F', color: 'white', paddingX: 5 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TeacherSubmitGrades;
