// Dashboard.tsx
import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ToolCard from './ToolCard';

const Dashboard: React.FC = () => {
  // Mermaid 다이어그램 정의
  const tools = [
    {
      name: 'AWS',
      description: '개발서버 배포 관리',
      iconUri: '/path-to-aws-icon',
      siteUrl: 'https://ap-northeast-2.console.aws.amazon.com/console/home?region=ap-northeast-2',
      details: 'AWS는 아마존에서 제공하는 클라우드 컴퓨팅 플랫폼으로, 우리 팀은 EC2와 RDS 서비스를 사용하고 있습니다.',
    },
    {
      name: 'Confluence',
      description: '일정 관리 및 컨벤션',
      iconUri: '/path-to-confluence-icon',
      siteUrl: 'https://tonggangag.atlassian.net/wiki/home',
      details: 'Confluence는 팀 협업을 위한 문서 작성 및 관리 툴로, 프로젝트의 전반적인 일정 및 규칙을 관리합니다.',
    },
    {
      name: 'GitHub',
      description: '팀 코드 저장소',
      iconUri: '/path-to-github-icon',
      siteUrl: 'https://github.com/sungwon2598/teamSe',
      details: 'GitHub를 통해 코드의 버전 관리를 진행하며, 풀 리퀘스트와 코드 리뷰를 통해 협업을 강화하고 있습니다.',
    },
    {
      name: 'Jira',
      description: '이슈관리',
      iconUri: '/path-to-jira-icon',
      siteUrl: 'https://tonggangag.atlassian.net/jira/software/projects/KAN/boards/1',
      details: 'Jira는 이슈 추적 및 스프린트 계획에 적합한 툴로, 팀의 진행 상황을 시각적으로 관리합니다.',
    },
    {
      name: 'Slack',
      description: '팀 협업 채널',
      iconUri: '/path-to-slack-icon',
      siteUrl: 'https://app.slack.com/client/T07GWRCMT55/D07GWT6J6BH',
      details: 'Slack은 실시간 커뮤니케이션을 제공하며, GitHub 및 AWS 등과 통합하여 알림을 받을 수 있습니다.',
    },
    {
      name: 'Swagger',
      description: 'API문서 자동화 툴',
      iconUri: '/path-to-swagger-icon',
      siteUrl: 'http://3.39.12.17:8080/swagger-ui/index.html#',
      details: 'Swagger는 API 문서화를 자동으로 생성해주며, 프론트엔드와 백엔드 개발자 간의 협업.',
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ToolCard
                name={tool.name}
                description={tool.description}
                iconUri={tool.iconUri}
                siteUrl={tool.siteUrl}
                details={tool.details}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Container>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Dashboard Overview
        </Typography>

        {/* 대시보드 레이아웃 */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', padding: '20px', boxShadow: 3, borderRadius: '12px' }}>
              <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                프로젝트 아키텍처
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
