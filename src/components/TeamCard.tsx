import * as React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Collapse, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TechStack {
  name: string;
  iconUri: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  stack: TechStack[]; // 배열로 기술 스택을 정의
  imageSrc: string;
  email: string;
  githubUrl: string; // GitHub URL 추가
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, stack, imageSrc, email, githubUrl }) => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '20px auto', // 카드들을 가운데에 배치
        borderRadius: '12px',
        boxShadow: theme.shadows[4],
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: theme.shadows[6],
        },
      }}
      onClick={handleExpandClick} // 카드를 클릭하면 확장
    >
      {/* Card Header: Team Member's Avatar and Name */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* 아바타 이미지가 없을 경우 기본 아바타 사용 */}
        <Avatar
          src={imageSrc || 'https://via.placeholder.com/150'} // 이미지가 없을 때 기본 이미지 사용
          alt={name}
          sx={{ width: 80, height: 80, marginBottom: '12px' }}
        />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {role}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: '8px' }}>
          {email}
        </Typography>
        <Link href={githubUrl} target="_blank" rel="noopener" underline="hover" sx={{ marginBottom: '16px' }}>
          GitHub
        </Link>
      </Box>

      {/* Card Content: Stack Information */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: '16px',
            textAlign: 'center', // 가운데 정렬
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {/* 기술 스택 아이콘을 표시 */}
            {stack.map((tech, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img src={tech.iconUri} alt={tech.name} style={{ width: 40, height: 40 }} />
                  <Typography variant="body2" sx={{ marginTop: '5px' }}>
                    {tech.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TeamCard;
