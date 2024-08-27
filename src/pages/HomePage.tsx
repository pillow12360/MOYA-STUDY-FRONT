import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { PaletteMode } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

interface HomePageProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const HomePage = ({ mode, toggleColorMode }: HomePageProps) => {
  return (
    <Box sx={{ p: 3 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleColorMode}
        startIcon={mode === 'light' ? <NightsStayIcon /> : <WbSunnyIcon />}
        sx={{ mt: 2 }}
      >
        {mode === 'light' ? '다크 모드' : '라이트 모드'}
      </Button>

      <Typography variant="body1" paragraph>
        SEOIL ICT 프로젝트 2024
      </Typography>
    </Box>
  );
};

export default HomePage;
