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
  email: string;
  github: string; // 추가된 GitHub 주소 필드
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
      {
        name: 'Material UI',
        iconUri: 'https://velog.velcdn.com/images/diso592/post/1fdea1fb-ce7e-448e-8d71-af51bdb67a6d/image.png',
      },
      {
        name: 'Redux',
        iconUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYiSZ7pgNHIi4X9la9Z1_oHsBpntPBeY6fA&s',
      },
    ],
    imageSrc: 'https://i.pinimg.com/originals/ab/78/aa/ab78aabc7191731a6c5d94f3ae7d3bf0.jpg',
    email: 'pillow12360@gmail.com',
    github: 'https://github.com/pillow12360', // GitHub 주소
  },
  {
    name: '홍성원',
    role: '백엔드, Dev-Ops',
    stack: [
      { name: 'Java', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      {
        name: 'MySQL',
        iconUri:
          'https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png',
      },
      {
        name: 'AWS',
        iconUri: 'https://velog.velcdn.com/images/baeyuna97/post/9948979a-092f-4b30-b031-0ee8cf2cca0d/image.png',
      },
    ],
    imageSrc: 'https://avatars.githubusercontent.com/u/119467493?v=4',
    email: 'tjddnjs2598@naver.com',
    github: 'https://github.com/sungwon2598', // GitHub 주소
  },
  {
    name: '고영진',
    role: '백엔드',
    stack: [
      { name: 'Java', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
    imageSrc: 'https://www.fitpetmall.com/wp-content/uploads/2023/10/shutterstock_1275055966-1.png',
    email: 'example@gmail.com',
    github: 'https://github.com/exampleUser3', // GitHub 주소
  },
  {
    name: '홍정기',
    role: '백엔드',
    stack: [
      { name: 'Java', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', iconUri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
    imageSrc:
      'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg',
    email: 'example@gmail.com',
    github: 'https://github.com/exampleUser4', // GitHub 주소
  },
  {
    name: '심혜원',
    role: '기획',
    stack: [],
    imageSrc: 'https://image.dongascience.com/Photo/2019/09/1568191092998.jpg',
    email: 'example@gmail.com',
    github: 'https://github.com/exampleUser5', // GitHub 주소
  },
];

function TeamMembers() {
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* 각 팀원에 대해 TeamCard 컴포넌트를 렌더링 */}
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <TeamCard
              name={member.name}
              role={member.role}
              stack={member.stack}
              imageSrc={member.imageSrc}
              email={member.email}
              githubUrl={member.github} // GitHub 주소 전달
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamMembers;
