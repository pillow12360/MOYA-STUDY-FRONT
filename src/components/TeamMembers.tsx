import * as React from 'react';
import { Grid, Box } from '@mui/material';
import TeamCard from './TeamCard'; // TeamCard 컴포넌트를 임포트합니다.

interface TechStack {
  name: string;
  iconUri: string;
}

interface TeamMember {
  name: string;
  role: string;
  stack: TechStack[];
  imageSrc: string;
}

// 팀원 데이터 정의
const teamMembers: TeamMember[] = [
  {
    name: '한동찬',
    role: '프론트엔드',
    stack: [
      { name: 'React', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      {
        name: 'TypeScript',
        iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
    imageSrc: '',
  },
  {
    name: '홍성원',
    role: '백엔드, Dev-Ops',
    stack: [
      {
        name: 'Spring Boot',
        iconUri:
          'https://img.shields.io/badge/Spring%20Boot-3.3-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white',
      },
      {
        name: 'Java',
        iconUri: 'https://img.shields.io/badge/Java-21-007396?style=for-the-badge&logo=java&logoColor=white',
      },
      {
        name: 'MySQL',
        iconUri: 'https://img.shields.io/badge/MySQL-8.0.35-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
      },
      {
        name: 'Redis',
        iconUri: 'https://img.shields.io/badge/Redis-Latest-DC382D?style=for-the-badge&logo=redis&logoColor=white',
      },
      {
        name: 'JPA',
        iconUri: 'https://img.shields.io/badge/JPA-Latest-59666C?style=for-the-badge&logo=hibernate&logoColor=white',
      },
      {
        name: 'QueryDSL',
        iconUri: 'https://img.shields.io/badge/QueryDSL-Latest-0769AD?style=for-the-badge&logoColor=white',
      },
      {
        name: 'Spring Security',
        iconUri:
          'https://img.shields.io/badge/Spring%20Security-6.3.1-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white',
      },
      {
        name: 'AWS',
        iconUri: 'https://img.shields.io/badge/AWS-Cloud-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
      },
      {
        name: 'GitHub Actions',
        iconUri:
          'https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
      },
      {
        name: 'Swagger',
        iconUri: 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black',
      },
    ],
    imageSrc: '',
  },
  {
    name: '고영진',
    role: '백엔드',
    stack: [
      { name: 'Java', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
    imageSrc: '',
  },
  {
    name: '홍정기',
    role: '백엔드',
    stack: [
      { name: 'Java', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
    imageSrc: '',
  },
  {
    name: '심혜원',
    role: '기획',
    stack: [],
    imageSrc: '',
  },
];

function TeamMembers() {
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* 각 팀원에 대해 TeamCard 컴포넌트를 렌더링 */}
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <TeamCard name={member.name} role={member.role} stack={member.stack} imageSrc={member.imageSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamMembers;
