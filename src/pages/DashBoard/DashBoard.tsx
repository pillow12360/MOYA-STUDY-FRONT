// Dashboard.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import ToolCard from './ToolCard';

const Dashboard = () => {
  const tools = [
    {
      name: 'AWS',
      description: '개발서버 배포 관리',
      iconUri: '/path-to-aws-icon', // 아이콘 경로를 설정해주세요.
      siteUrl: 'https://ap-northeast-2.console.aws.amazon.com/console/home?region=ap-northeast-2',
    },
    {
      name: 'Confluence',
      description: '일정 관리 및 컨벤션',
      iconUri: '/path-to-confluence-icon',
      siteUrl: 'https://tonggangag.atlassian.net/wiki/home',
    },
    {
      name: 'GitHub',
      description: '팀 코드 저장소',
      iconUri: '/path-to-github-icon',
      siteUrl: 'https://github.com/sungwon2598/teamSe',
    },
    {
      name: 'Jira',
      description: '이슈관리',
      iconUri: '/path-to-jira-icon',
      siteUrl: 'https://tonggangag.atlassian.net/jira/software/projects/KAN/boards/1',
    },
    {
      name: 'Slack',
      description: '팀 협업 채널',
      iconUri: '/path-to-slack-icon',
      siteUrl: 'https://app.slack.com/client/T07GWRCMT55/D07GWT6J6BH',
    },
    {
      name: 'Swagger',
      description: 'API문서 자동화 툴',
      iconUri: '/path-to-swagger-icon',
      siteUrl: 'http://3.39.12.17:8080/swagger-ui/index.html#',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={4}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ToolCard name={tool.name} description={tool.description} iconUri={tool.iconUri} siteUrl={tool.siteUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
