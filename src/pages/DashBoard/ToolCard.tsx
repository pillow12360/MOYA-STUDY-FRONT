// ToolCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Collapse, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ToolCardProps {
  name: string;
  description: string;
  iconUri: string;
  siteUrl: string; // 사이트 URL
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, iconUri, siteUrl }) => {
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
      {/* Card Header: Tool Icon and Name */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* 툴 아이콘 */}
        <Avatar
          src={iconUri || 'https://via.placeholder.com/150'} // 아이콘이 없을 경우 기본 이미지 사용
          alt={name}
          sx={{ width: 80, height: 80, marginBottom: '12px' }}
        />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: '8px' }}>
          {description}
        </Typography>
        <Link href={siteUrl} target="_blank" rel="noopener" underline="hover" sx={{ marginBottom: '16px' }}>
          Visit Site
        </Link>
      </Box>

      {/* Card Content: Additional Information (if any) */}
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
          {/* 여기에 추가적인 정보를 입력할 수 있습니다 */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ToolCard;
