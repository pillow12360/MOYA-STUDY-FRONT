import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Collapse, Link, Divider } from '@mui/material';
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
        width: '100%', // Card will take full width of the grid item
        maxWidth: 345, // Maximum width to control size on larger screens
        minHeight: 400, // Minimum height to keep the card layout consistent
        margin: '20px auto',
        borderRadius: '16px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)', // Slightly reduce hover scale for better layout consistency
          boxShadow: theme.shadows[6],
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensure consistent vertical alignment
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px',
          height: '100%', // Ensure consistent card height
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
          sx={{
            color: theme.palette.text.secondary,
            marginBottom: '16px',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis', // Truncate text if it overflows
            whiteSpace: 'nowrap',
          }}
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
            overflowY: 'auto', // Scroll if the content overflows
            maxHeight: 100, // Limit the height of the expanded content
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
