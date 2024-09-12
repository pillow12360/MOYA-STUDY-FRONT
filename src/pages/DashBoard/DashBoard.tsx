import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Box, Tab, Tabs } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToolCard from './ToolCard';

// MUI 테마 설정
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// 인프라 도구 데이터
const infrastructureTools = [
  {
    name: 'AWS EC2',
    description: '클라우드 컴퓨팅 서비스',
    iconUri: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    siteUrl: 'https://aws.amazon.com/ec2/',
    details:
      'Amazon Elastic Compute Cloud(EC2)는 안전하고 크기 조정이 가능한 컴퓨팅 파워를 클라우드에서 제공하는 웹 서비스입니다.',
  },
  {
    name: 'Azure SQL',
    description: '클라우드 데이터베이스 서비스',
    iconUri: 'https://azure.microsoft.com/svghandler/sql-database/?width=300&height=300',
    siteUrl: 'https://azure.microsoft.com/en-us/products/azure-sql/',
    details: 'Azure SQL은 항상 최신 상태로 완전히 관리되는 SQL Server 데이터베이스 엔진을 클라우드에서 제공합니다.',
  },
];

// 협업 도구 데이터
const collaborationTools = [
  {
    name: 'Slack',
    description: '팀 커뮤니케이션 플랫폼',
    iconUri: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png',
    siteUrl: 'https://slack.com/',
    details: 'Slack은 팀이 함께 일하고, 협력하고, 소통할 수 있는 중앙 허브입니다.',
  },
  {
    name: 'GitHub',
    description: '버전 관리 및 협업 플랫폼',
    iconUri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    siteUrl: 'https://github.com/',
    details: 'GitHub는 소프트웨어 개발을 위한 버전 제어 및 협업 플랫폼입니다.',
  },
];

// 아키텍처 다이어그램 데이터 (Mermaid 문법)

export default function EnhancedArchitectureDashboard() {
  const [tabValue, setTabValue] = useState(0); // 탭 상태 관리

  // 탭 변경 핸들러
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="인프라 도구" />
              <Tab label="협업 도구" />
              <Tab label="아키텍처 다이어그램" />
            </Tabs>
          </Paper>
          <Box sx={{ mt: 2 }}>
            {tabValue === 0 && (
              <Grid container spacing={3} alignItems="stretch">
                {' '}
                {/* 카드 높이 균일화 */}
                {infrastructureTools.map((tool, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ToolCard {...tool} />
                  </Grid>
                ))}
              </Grid>
            )}
            {tabValue === 1 && (
              <Grid container spacing={3} alignItems="stretch">
                {' '}
                {/* 카드 높이 균일화 */}
                {collaborationTools.map((tool, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ToolCard {...tool} />
                  </Grid>
                ))}
              </Grid>
            )}
            {tabValue === 2 && (
              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  시스템 아키텍처 다이어그램
                </Typography>
                {/* Mermaid 다이어그램 컴포넌트 */}
              </Paper>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
