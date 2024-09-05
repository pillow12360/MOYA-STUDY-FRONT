// ToolCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Collapse, Grid, Link, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

interface ToolCardProps {
  name: string;
  description: string;
  iconUri: string;
  siteUrl: string;
  details: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, iconUri, siteUrl, details }) => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: '20px auto',
        borderRadius: '16px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        {/* Tool Icon */}
        <Avatar
          src={iconUri || 'https://via.placeholder.com/150'}
          alt={name}
          sx={{ width: 100, height: 100, marginBottom: '16px' }}
        />

        {/* Tool Name */}
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          {name}
        </Typography>

        {/* Tool Description */}
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, marginBottom: '16px', textAlign: 'center' }}
        >
          {description}
        </Typography>

        {/* Site URL Link */}
        <Link
          href={siteUrl}
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ marginBottom: '24px', color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          Visit {name}
        </Link>

        <Divider sx={{ width: '100%', marginBottom: '16px' }} />

        {/* Expand Icon */}
        <IconButton
          onClick={handleExpandClick}
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            marginBottom: '8px',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* Expanded details content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: '16px',
            textAlign: 'left',
            color: theme.palette.text.secondary,
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ToolCard;
