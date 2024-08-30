'use client'

import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, MenuItem, Grid } from '@mui/material';

const Enrollment = () => {
  const [enrollmentInfo, setEnrollmentInfo] = useState({
    studentID: '',
    GradeLevel: '',
    
    previousSchoolElem: '',
    previousSchoolJuniorHigh: '',
    previousSchoolSeniorHigh: '',
  });

  const [documents, setDocuments] = useState({
    nso: null,
    form137: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentInfo({ ...enrollmentInfo, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments({ ...documents, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enrollment Info:', enrollmentInfo);
    console.log('Uploaded Documents:', documents);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: "url('/images/uc.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)',
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 6,
            }}
          >
            <Paper
              sx={{
                padding: 4,
                borderRadius: 2,
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  color: '#1E3A8A',
                }}
              >
                Enrollment Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Student ID"
                  name="studentID"
                  variant="outlined"
                  value={enrollmentInfo.studentID}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  select
                  label="GradeLevel"
                  name="GradeLevel"
                  variant="outlined"
                  value={enrollmentInfo.course}
                  onChange={handleChange}
                  margin="normal"
                  required
                >
                  <MenuItem value="Grade">Grade 1</MenuItem>
                  <MenuItem value="Grade">Grade 2</MenuItem>
                  <MenuItem value="Grade">Grade 3</MenuItem>
                  <MenuItem value="Grade">Grade 4</MenuItem>
                  <MenuItem value="Grade">Grade 5</MenuItem>
                  <MenuItem value="Grade">Grade 6</MenuItem>
                  <MenuItem value="Grade">Grade 7</MenuItem>
                  <MenuItem value="Grade">Grade 8</MenuItem>
                  <MenuItem value="Grade">Grade 9</MenuItem>
                  <MenuItem value="Grade">Grade 10</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  select
                  label="Semester"
                  name="semester"
                  variant="outlined"
                  value={enrollmentInfo.semester}
                  onChange={handleChange}
                  margin="normal"
                  required
                >
                  <MenuItem value="semester1">Semester 1</MenuItem>
                  <MenuItem value="semester2">Semester 2</MenuItem>
                </TextField>

                {/* Additional Fields for Previous Schools */}
                <TextField
                  fullWidth
                  label="Previous School (Elementary)"
                  name="previousSchoolElem"
                  variant="outlined"
                  value={enrollmentInfo.previousSchoolElem}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Previous School (Junior High)"
                  name="previousSchoolJuniorHigh"
                  variant="outlined"
                  value={enrollmentInfo.previousSchoolJuniorHigh}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Previous School (Senior High)"
                  name="previousSchoolSeniorHigh"
                  variant="outlined"
                  value={enrollmentInfo.previousSchoolSeniorHigh}
                  onChange={handleChange}
                  margin="normal"
                  required
                />

                <Box mt={2}>
                  <Typography variant="body1">Upload Required Documents:</Typography>
                  <TextField
                    fullWidth
                    type="file"
                    name="nso"
                    onChange={handleFileChange}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    type="file"
                    name="form137"
                    onChange={handleFileChange}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #1E3A8A 30%, #6A1B9A 90%)',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6A1B9A 30%, #1E3A8A 90%)',
                      transform: 'scale(1.05)',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    },
                  }}
                >
                  Proceed Enrollment
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Enrollment;
