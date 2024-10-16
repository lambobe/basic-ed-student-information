'use client'

import React, { useState } from 'react';
import { Container, Box, Button, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Brightness1 } from '@mui/icons-material';

const RequiredDocuments = () => {
  const [documents, setDocuments] = useState([{ type: '', file: null }]);

  const handleFileChange = (e, index) => {
    const { name, files } = e.target;
    const updatedDocuments = [...documents];
    updatedDocuments[index] = { ...updatedDocuments[index], [name]: files[0] };
    setDocuments(updatedDocuments);
  };

  const handleTypeChange = (e, index) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].type = e.target.value;
    setDocuments(updatedDocuments);
  };

  const addUploadField = () => {
    setDocuments([...documents, { type: '', file: null }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Uploaded Documents:', documents);
  };

  return (
    <Container maxWidth="xl" disableGutters 
    sx={{ height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: 0,}}>
      <Grid container sx={{ height: '100%' }}>
        
      
        <Grid item xs={12} md={6} 
        sx={{ display: 'flex',  
        justifyContent: 'center', 
        alignItems: 'center' }}>
          
        <Box sx={{ 
          width: '100%', 
          height: '100%' 
          }}>
          <img src="/images/uclm.png" alt="Upload Illustration" 
          style={{ width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          borderRadius: '0',
          filter: 'brightness(70%)'
          }} />
          </Box>
        </Grid>
        
        
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 6, width: '100%', maxWidth: '600px' }}>
            <Paper sx={{ padding: 4, borderRadius: 2, width: '100%', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1E3A8A' }}>
                Required Documents Upload
              </Typography>
              <Typography variant="body1" gutterBottom>
                Scanned copies must be clear/legible. Each file must not exceed 10MB.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Accepted file format for 2x2 ID Picture are JPG/PNG, all documents should be in PDF format.
              </Typography>

              <form onSubmit={handleSubmit}>
                {documents.map((doc, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Select Document Type</InputLabel>
                      <Select
                        value={doc.type}
                        onChange={(e) => handleTypeChange(e, index)}
                        fullWidth
                      >
                        <MenuItem value="idPicture">2x2 ID Picture</MenuItem>
                        <MenuItem value="birthCertificate">Birth Certificate</MenuItem>
                        <MenuItem value="lcr">Local Civil Registrar (LCR)</MenuItem>
                        <MenuItem value="escGranteeCertificate">ESC Grantee Certificate</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                      <input
                        type="file"
                        name="file"
                        onChange={(e) => handleFileChange(e, index)}
                        style={{ marginTop: '10px' }}
                      />
                    </FormControl>
                  </Box>
                ))}

                <Button type="button" onClick={addUploadField} sx={{ mt: 2 }}>
                  Add Another Upload
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  href="/payment"
                  fullWidth
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #1E3A8A 30%, #6A1B9A 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6A1B9A 30%, #1E3A8A 90%)',
                      transform: 'scale(1.05)',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequiredDocuments;
