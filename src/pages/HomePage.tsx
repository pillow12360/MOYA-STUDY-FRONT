import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TeamMembers from '@components/TeamMembers';

interface HomePageProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const HomePage = ({ mode, toggleColorMode }: HomePageProps) => {
  const [expanded, setExpanded] = useState({ frontend: false, backend: false, cloud: false });
  const theme = useTheme();

  const handleExpandClick = (section: keyof typeof expanded) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Box sx={{ minHeight: '100vh', textAlign: 'center' }}>
      <Box
        sx={{
          backgroundImage: 'url(/path-to-your-image.jpg)', // 실제 이미지 경로 사용
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          position: 'relative',
          color: theme.palette.text.primary,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            MOYA Study
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            2024.09 ~ 2024.12
          </Typography>
        </Container>
      </Box>

      {/* 팀 구성 및 기술 스택 */}
      <Box sx={{ padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '30px' }}>
            팀 구성
          </Typography>
          <TeamMembers />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
