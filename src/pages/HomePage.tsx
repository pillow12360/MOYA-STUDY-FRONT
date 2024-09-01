import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
              <Card sx={{ maxWidth: 345, marginBottom: '10px' }}>
                <CardContent
                  onClick={() => handleExpandClick('frontend')}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: expanded.frontend ? theme.palette.action.hover : theme.palette.background.paper,
                  }}
                >
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
                  <IconButton
                    onClick={() => handleExpandClick('frontend')}
                    aria-expanded={expanded.frontend}
                    aria-label="show more"
                    sx={{
                      transform: expanded.frontend ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardContent>
                <Collapse in={expanded.frontend} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '20px',
                      backgroundColor: theme.palette.background.default,
                      borderRadius: '10px',
                      boxShadow: theme.shadows[2],
                      textAlign: 'center',
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      한동찬
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                      프론트엔드 개발자
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      경력: 신입
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, marginBottom: '10px' }}>
                <CardContent
                  onClick={() => handleExpandClick('backend')}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: expanded.backend ? theme.palette.action.hover : theme.palette.background.paper,
                  }}
                >
                  <img
                    src="https://static-00.iconduck.com/assets.00/spring-icon-1024x1023-ljxx8bf7.png"
                    alt="Spring"
                    style={{ width: '50px' }}
                  />
                  <Typography variant="h5" component="h3" sx={{ marginTop: '15px' }}>
                    Back-End
                  </Typography>
                  <Typography variant="body1">Spring 및 MySQL의 통합으로 안정적인 백엔드 api 배포</Typography>
                  <IconButton
                    onClick={() => handleExpandClick('backend')}
                    aria-expanded={expanded.backend}
                    aria-label="show more"
                    sx={{
                      transform: expanded.backend ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardContent>
                <Collapse in={expanded.backend} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '20px',
                      backgroundColor: theme.palette.background.default,
                      borderRadius: '10px',
                      boxShadow: theme.shadows[2],
                      textAlign: 'center',
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      한동찬
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                      백엔드 개발자
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      경력: 신입
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345, marginBottom: '10px' }}>
                <CardContent
                  onClick={() => handleExpandClick('cloud')}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: expanded.cloud ? theme.palette.action.hover : theme.palette.background.paper,
                  }}
                >
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
                  <IconButton
                    onClick={() => handleExpandClick('cloud')}
                    aria-expanded={expanded.cloud}
                    aria-label="show more"
                    sx={{
                      transform: expanded.cloud ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardContent>
                <Collapse in={expanded.cloud} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '20px',
                      backgroundColor: theme.palette.background.default,
                      borderRadius: '10px',
                      boxShadow: theme.shadows[2],
                      textAlign: 'center',
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      한동찬
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
                      클라우드 엔지니어
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      경력: 신입
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 문의하기 */}
      <Box sx={{ padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '30px', color: theme.palette.text.primary }}>
            문의하기
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
            이메일: contact@ictproject.com
          </Typography>
          <Typography variant="body1">전화: 02-123-4567</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
