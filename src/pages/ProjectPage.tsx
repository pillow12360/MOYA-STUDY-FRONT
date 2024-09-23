import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const ProjectPage: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        프로젝트 소개
      </Typography>
      <Box sx={{ padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '30px' }}>
            스터디 협업 툴
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default ProjectPage;

// AboutPage.tsx에도 비슷한 구조를 적용
