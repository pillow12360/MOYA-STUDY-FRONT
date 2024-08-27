import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ToggleColorMode from './ToggleColorMode';
import { PaletteMode } from '@mui/material';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        SEOIL ICT PROJECT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter({ mode, toggleColorMode }: AppAppBarProps) {
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Company
              </Typography>
              <ul>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <IconButton href="https://www.facebook.com" color="inherit">
                <FacebookIcon />
              </IconButton>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

              <IconButton href="https://www.twitter.com" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com" color="inherit">
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Resources
              </Typography>
              <ul>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
