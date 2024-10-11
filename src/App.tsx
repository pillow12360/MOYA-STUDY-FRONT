import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Footer from './layouts/Footer';
import AppAppBar from './layouts/AppAppBar';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import getLPTheme from './themes/getLPTheme';
import store from '@store/Store';
import { Provider } from 'react-redux';
import Dashboard from './pages/DashBoard/DashBoard';
import Calendar from './pages/Calendar/Calendar';
import TldrawComponent from '@pages/tldraw/TldrawComponent';
import DiscordLight from "@pages/Moya/main/DiscordLight";

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={showCustomTheme}
      onChange={toggleCustomTheme}
      aria-label="Platform"
      sx={{
        backgroundColor: 'background.default',
        '& .Mui-selected': {
          pointerEvents: 'none',
        },
      }}
    >
      <ToggleButton value>
        <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
        커스텀 테마
      </ToggleButton>
      <ToggleButton value={false}>Material Design 2</ToggleButton>
    </ToggleButtonGroup>
  );
}

const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            paddingTop: '10%', // AppBar height adjustment
            paddingBottom: '60px', // Extra padding if needed
            bgcolor: 'background.default',
          }}
        >
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<HomePage mode={mode} toggleColorMode={toggleColorMode} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tldraw" element={<TldrawComponent />} />
            <Route path="/moya" element={<DiscordLight />} />
          </Routes>
        </Box>
        <Footer mode={mode} toggleColorMode={toggleColorMode} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
