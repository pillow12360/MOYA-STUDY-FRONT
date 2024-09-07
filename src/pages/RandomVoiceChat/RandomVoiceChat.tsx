import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AccountCircle, Mic, MicOff, CallEnd, Person } from '@mui/icons-material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // Purple
    },
    secondary: {
      main: '#3f51b5', // Indigo
    },
  },
});

export default function RandomVoiceChat() {
  const [isMatched, setIsMatched] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleFindMatch = () => {
    // Simulating a match being found
    setTimeout(() => setIsMatched(true), 1500);
  };

  const handleEndCall = () => {
    setIsMatched(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #9c27b0, #3f51b5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              VoiceMatch
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="user profile"
              onClick={() => setIsProfileOpen(true)}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Card sx={{ width: '100%', maxWidth: 400, mt: 8 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            {!isMatched ? (
              <>
                <Typography variant="h6" align="center">
                  Ready to meet someone new?
                </Typography>
                <Button variant="contained" color="primary" size="large" onClick={handleFindMatch}>
                  Find Match
                </Button>
              </>
            ) : (
              <>
                <Avatar sx={{ width: 80, height: 80 }}>
                  <Person sx={{ width: 60, height: 60 }} />
                </Avatar>
                <Typography variant="h6">Connected with a match!</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    color="primary"
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <MicOff /> : <Mic />}
                  </IconButton>
                  <IconButton color="error" onClick={handleEndCall} aria-label="End call">
                    <CallEnd />
                  </IconButton>
                </Box>
              </>
            )}
          </CardContent>
        </Card>

        <Dialog open={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
          <DialogTitle>User Profile</DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, pt: 2 }}>
              <Avatar sx={{ width: 100, height: 100 }}>
                <Person sx={{ width: 80, height: 80 }} />
              </Avatar>
              <Typography variant="h5">John Doe</Typography>
              <Typography variant="body2" color="text.secondary">
                Active Member
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}
