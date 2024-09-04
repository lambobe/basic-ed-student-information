
'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid
} from '@mui/material';

const phoneNumberPattern = /^[0-9]{11}$/; 

const AdditionalDetails = () => {
  const [studentInfo, setStudentInfo] = useState({
    nationality: '',
    gender: '',
    status: '',
    dob: '',
    bplace: '',
    religion: '',
    indipeople: '',
    motherfullname: '',
    motheroccup: '',
    mothercontact: '',
    fatherfullname: '',
    fatheroccup: '',
    fathercontact: '',
  });

  const [errors, setErrors] = useState({
    mothercontact: '',
    fathercontact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });

    if (name === 'mothercontact' || name === 'fathercontact') {
      if (!phoneNumberPattern.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Invalid contact number. Must be 11 digits.'
        });
      } else {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Info:', studentInfo);
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
        height: '200vh',
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
          Additional Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nationality"
                name="nationality"
                variant="outlined"
                value={studentInfo.nationality}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  name="gender"
                  value={studentInfo.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">LGBTQ</MenuItem>
                  <MenuItem value="preferNotToSay">Prefer Not to Say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel id="status-select-label">Civil Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  name="status"
                  value={studentInfo.status}
                  onChange={handleChange}
                  label="Civil Status"
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                  <MenuItem value="widowed">Widowed</MenuItem>
                  <MenuItem value="preferNotToSay">Prefer Not to Say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                variant="outlined"
                value={studentInfo.dob}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birthplace"
                name="bplace"
                variant="outlined"
                value={studentInfo.bplace}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Religion"
                name="religion"
                variant="outlined"
                value={studentInfo.religion}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={14}>
              <FormControl component="fieldset" margin="none" required>
                <Typography variant="subtitle1">Belonging to any Indigenous People(IP) Community/Indigenous Cultural Community</Typography>
                <RadioGroup
                  name="indipeople"
                  value={studentInfo.indipeople}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Mother's Full Name"
                name="motherfullname"
                variant="outlined"
                value={studentInfo.motherfullname}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Mother's Occupation"
                name="motheroccup"
                variant="outlined"
                value={studentInfo.motheroccup}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Mother's Contact Number"
                name="mothercontact"
                variant="outlined"
                value={studentInfo.mothercontact}
                onChange={handleChange}
                margin="normal"
                error={!!errors.mothercontact}
                helperText={errors.mothercontact}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Father's Full Name"
                name="fatherfullname"
                variant="outlined"
                value={studentInfo.fatherfullname}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Father's Occupation"
                name="fatheroccup"
                variant="outlined"
                value={studentInfo.fatheroccup}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Father's Contact Number"
                name="fathercontact"
                variant="outlined"
                value={studentInfo.fathercontact}
                onChange={handleChange}
                margin="normal"
                error={!!errors.fathercontact}
                helperText={errors.fathercontact}
                required
              />
            </Grid>
          </Grid>

          <Box mb={2} mt={2}>
            <Button
            
              type="submit"
              variant="contained"
              color="success"
              href="/addressDetails"
              fullWidth
            >
              Next
            </Button>
          </Box>

        </form>
      </Paper>
    </Container>
  );
};

export default AdditionalDetails;
