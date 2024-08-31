import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface HomePageProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const HomePage = ({ mode, toggleColorMode }: HomePageProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', textAlign: 'center' }}>
      {/* Hero Section */}
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
            ICT-PROJECT 2024
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            프로젝트 시작
          </Typography>
        </Container>
      </Box>

      {/* 팀 구성 및 기술 스택 */}
      <Box sx={{ padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '30px' }}>
            팀 구성
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    style={{ width: '50px' }}
                  />
                  <Typography variant="h5" component="h3" sx={{ marginTop: '15px' }}>
                    Front-End
                  </Typography>
                  <Typography variant="body1">
                    React, TypeScript, MUI를 사용하여 사용자 친화적인 인터페이스를 만듭니다.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBnrqr2tLtfIEgfzjYUqOFHdQTM-TIKXWug&s"
                    alt="Spring"
                    style={{ width: '50px' }}
                  />
                  <Typography variant="h5" component="h3" sx={{ marginTop: '15px' }}>
                    Back-End
                  </Typography>
                  <Typography variant="body1">Spring, MySql와의 통합을 통해 강력한 서버 로직을 구현합니다.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
                    alt="AWS"
                    style={{ width: '50px' }}
                  />
                  <Typography variant="h5" component="h3" sx={{ marginTop: '15px' }}>
                    Cloud
                  </Typography>
                  <Typography variant="body1">
                    AWS 인프라를 활용해 확장성과 신뢰성을 갖춘 클라우드 환경을 구축합니다.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 문의하기 */}
      <Box sx={{ padding: '50px 0', backgroundColor: theme.palette.grey[900], color: '#fff' }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '30px' }}>
            문의하기
          </Typography>
          <Typography variant="body1">이메일: contact@ictproject.com</Typography>
          <Typography variant="body1">전화: 02-123-4567</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
