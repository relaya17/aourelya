import React from 'react'
import { Box, Container, Typography, Avatar } from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        py: 4
      }}>
        <Avatar 
          src="/arlet.png" 
          alt="ארלט"
          sx={{ 
            width: { xs: 128, sm: 144, md: 160 }, 
            height: { xs: 128, sm: 144, md: 160 },
            mb: 3,
            border: 4,
            borderColor: 'primary.main',
            boxShadow: 3
          }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Slice of Home Delivery
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Personal Portfolio
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          Welcome to my portfolio website showcasing my work and projects.
        </Typography>
      </Box>
    </Container>
  )
}

export default Home 