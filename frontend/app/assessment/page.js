import React from 'react';
import { TextField, Button, Grid, Box, Container, Typography, MenuItem } from '@mui/material';

const AssessmentCreator = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 3,
            color: '#00695c',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Assessment Creator
        </Typography>

        <Grid container spacing={3}>
 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="School Year"
              variant="outlined"
              size="medium"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
            </TextField>
          </Grid>

 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Grade Level"
              variant="outlined"
              size="medium"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            >
              <MenuItem value="Grade 1">Grade 1</MenuItem>
              <MenuItem value="Grade 2">Grade 2</MenuItem>
              <MenuItem value="Grade 3">Grade 3</MenuItem>
     
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assessment Name"
              variant="outlined"
              size="medium"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assessment Description"
              multiline
              rows={3}
              variant="outlined"
              size="medium"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Assessment Date"
              variant="outlined"
              size="medium"
              placeholder="MM/DD/YYYY"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Assessment Time"
              variant="outlined"
              size="medium"
              placeholder="HH:MM"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            />
          </Grid>

        
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assessment Fee"
              variant="outlined"
              size="medium"
              type="number"
              sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}
            />
          </Grid>

          
          <Grid item xs={12}>
            <Button
              variant="contained"
              href="/assessmentsubmission"
              fullWidth
              sx={{
                backgroundColor: '#00695c',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#004d40',
                },
              }}
            >
              Create Assessment
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AssessmentCreator;
