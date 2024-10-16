'use client'

import React from 'react';
import { Container, Box, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Grid, Paper, Button } from '@mui/material';
import { Dashboard, Notifications, School, Assessment, Book, Grade, AccountCircle } from '@mui/icons-material';

const StudentProfile = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
      
   
      <Drawer
        variant="permanent"
        sx={{
          width: 100,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 100, boxSizing: 'border-box', backgroundColor: '#0072b1', color: '#fff' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
       
          <Avatar
            alt="Student Picture"
            src="/images/profile.png"
            sx={{ width: 60, height: 60, mb: 2, border: '2px solid white' }}
          />

        
          <List sx={{ width: '100%' }}>
            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <Dashboard />
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff'}}>
                <Notifications/>
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <School />
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <Assessment />
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <Book />
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <Grade />
              </ListItemIcon>
            </ListItem>

            <ListItem button sx={{ justifyContent: 'center', color: '#fff' }}>
              <ListItemIcon sx={{ justifyContent: 'center', color: '#fff' }}>
                <AccountCircle />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Drawer>

     
      <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', padding: 3 }}>
       
        <Paper elevation={3} sx={{ padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, backgroundColor: '#0072b1', color: '#fff' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
                alt="Student Picture"
                src="/images/profile.png"
                sx={{
                width: 100,
                height: 100,
                mr: 3,
                border: '4px solid white',
                objectFit: 'cover' // 
                }}
            />
               <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Bernie Anthony D. Lambo
              </Typography>
              <Typography variant="body1">19089176 | BSIT 4</Typography>
              <Typography variant="body2">bernie@university.edu</Typography>
            </Box>
          </Box>
          <Button variant="contained" color="secondary">
            Edit Profile
          </Button>
        </Paper>

        {/* Profile Sections */}
        <Grid container spacing={3}>
          {/* Personal Information */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1E3A8A' }}>Personal Information</Typography>
              <Typography variant="body1"><strong>Full Name:</strong> Bernie Anthony D. Lambo</Typography>
              <Typography variant="body1"><strong>Student ID:</strong> 19089176</Typography>
              <Typography variant="body1"><strong>Course:</strong> BSIT 4</Typography>
              <Typography variant="body1"><strong>Contact:</strong> (123) 456-7890</Typography>
              <Typography variant="body1"><strong>Email:</strong> bernie@university.edu</Typography>
            </Paper>
          </Grid>

          {/* Enrollment Information */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1E3A8A' }}>Enrollment Information</Typography>
              <Typography variant="body1"><strong>Term:</strong> 1st Semester, S.Y. 2024 - 2025</Typography>
              <Typography variant="body1">
                <strong>Status:</strong> 
                <strong style={{ color: 'green'}}> Enrolled</strong>
                </Typography>

              <Typography variant="body1"><strong>Scholarship:</strong> None</Typography>
            </Paper>
          </Grid>

          {/* Additional Sections */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1E3A8A' }}>Achievements</Typography>
              <Typography variant="body1">Dean's List for 2 consecutive semesters.</Typography>
              <Typography variant="body1">Completed Advanced Java Programming course with distinction.</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#1E3A8A' }}>Recent Activities</Typography>
              <Typography variant="body1">Submitted final project for Mobile App Development.</Typography>
              <Typography variant="body1">Registered for upcoming Hackathon competition.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default StudentProfile;
