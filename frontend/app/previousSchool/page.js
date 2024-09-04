import React from 'react';
import { TextField, Button, Grid, MenuItem, Box, Container } from '@mui/material';

const primaryGrade = [
  { value: '1', label: 'Grade 1' },
  { value: '2', label: 'Grade 2' },
  { value: '3', label: 'Grade 3' },
  { value: '4', label: 'Grade 4' },
  { value: '5', label: 'Grade 5' },
  { value: '6', label: 'Grade 6' },

  
];
const secondaryGrade = [
    { value: '1', label: 'Grade 7' },
    { value: '2', label: 'Grade 8' },
    { value: '3', label: 'Grade 9' },
    { value: '4', label: 'Grade 10' },
  

  ];
const schoolTypes = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
];

const PreviousSchoolDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#8f86fc',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <form>
          <Grid container spacing={3}>
            {/* Secondary School Section */}
            <Grid item xs={12}>
              <h2>Previous School Details</h2>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="School Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Strand"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                select
                label="Last Grade Level"
                variant="outlined"
              >
                {secondaryGrade.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="School Year From"
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="School Year To"
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                select
                label="School Type"
                variant="outlined"
              >
                {schoolTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="LRN"
                variant="outlined"
              />
            </Grid>

            {/* Primary School Section */}
            <Grid item xs={12}>
              <h2>Primary School</h2>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="School Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                select
                label="Last Grade Level"
                variant="outlined"
              >
                {primaryGrade.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="School Year From"
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="School Year To"
                variant="outlined"
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                select
                label="School Type"
                variant="outlined"
              >
                {schoolTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default PreviousSchoolDetails;
