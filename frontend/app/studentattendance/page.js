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
} from '@mui/material';

const TeacherAttendance = () => {
  const students = [
    { name: 'Oliver Pacatang', section: 'Diamond', grade: 'Grade 2', id: '2314324', edpCode: '2321', subject: 'English', attendance: ['P-23', 'P-42', 'P-44', 'P-45'] },
    { name: 'Claire Dungog', section: 'Diamond', grade: 'Grade 2', id: '4354345', edpCode: '4342', subject: 'English', attendance: ['P-45', 'P-43', 'P-34', 'P-43'] },
    { name: 'Johnhay Batan', section: 'Diamond', grade: 'Grade 2', id: '2314324', edpCode: '4343', subject: 'English', attendance: ['P-32', 'P-38', 'P-43', 'P-26'] },
    { name: 'Moises Belacura', section: 'Diamond', grade: 'Grade 2', id: '2314324', edpCode: '5657', subject: 'English', attendance: ['P-45', 'P-56', 'P-34', 'P-23'] },
    { name: 'Bernie Lambo', section: 'Diamond', grade: 'Grade 2', id: '2314324', edpCode: '5658', subject: 'English', attendance: ['P-32', 'P-34', 'P-45', 'P-32'] },
  ];

  const calculateOverallAttendance = (attendance) => {
    return attendance.reduce((acc, curr) => {
      const num = parseInt(curr.split('-')[1], 10);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
  };

  return (
    <Box sx={{ backgroundColor: '#E0F7FA', minHeight: '100vh', padding: 4 }}>
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>

  
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796B', mb: 4 }}>STUDENT'S ATTENDANCE</Typography>

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
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Grade Level</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Student ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Edp Code</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Subject</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>1st Quarter Attendance</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>2nd Quarter Attendance</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>3rd Quarter Attendance</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>4th Quarter Attendance</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Overall Attendance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.edpCode}</TableCell>
                  <TableCell>{student.subject}</TableCell>
                  {student.attendance.map((attend, i) => (
                    <TableCell key={i}>
                      <TextField value={attend} variant="outlined" size="small" sx={{ width: '60px' }} />
                    </TableCell>
                  ))}
                  <TableCell>{`P-${calculateOverallAttendance(student.attendance)}`}</TableCell>
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

export default TeacherAttendance;
