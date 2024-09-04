'use client'

import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';

const ParentConsent = () => {
  const [open, setOpen] = useState(true);
  const [consentInfo, setConsentInfo] = useState({
    parentName: '',
    studentName: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsentInfo({ ...consentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consent Info:', consentInfo);
   
    setOpen(false); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-consent-form-title"
      aria-describedby="parent-consent-form-description"

    >
      
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom align="center" id="parent-consent-form-title">
          PARENT CONSENT FORM
        </Typography>
        <Typography variant="body2" gutterBottom id="parent-consent-form-description">
          I, {`(Parent/Guardian's Name)`}, hereby give my consent for my child, {`(Student's Name)`}, to participate in the University of Cebu Lapu-Lapu and Mandaue.
        </Typography>
        <Typography variant="body2" paragraph>
          I understand the details of the activity, including any potential risks involved, and I am satisfied with the safety precautions put in place by the organizers.
        </Typography>
        <Typography variant="body2" paragraph>
          I agree that my child will follow all instructions and guidelines provided during the activity. I also grant permission for my child's photograph or video to be taken and used for promotional or educational purposes by the organizers.
        </Typography>
        <Typography variant="body2" paragraph>
          In case of an emergency, I authorize the organizers to take all necessary actions, including seeking medical treatment for my child, if required.
        </Typography>
        <Typography variant="body2" paragraph>
          I release the organizers from any liability for any injuries or accidents that may occur during the activity, unless caused by their negligence or intentional misconduct.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Parent/Guardian's Name"
                name="parentName"
                variant="outlined"
                value={consentInfo.parentName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Name"
                name="studentName"
                variant="outlined"
                value={consentInfo.studentName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Emergency Contact Information"
                name="emergencyContact"
                variant="outlined"
                value={consentInfo.emergencyContact}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Box mt={3} display="flex" justifyContent="space-between" >
            <Button variant="outlined" onclick={handleClose} href="/login"> 
            Close
            </Button>
            <Button variant="contained" color="primary"
              type="submit" href="/partialregistration">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ParentConsent;
