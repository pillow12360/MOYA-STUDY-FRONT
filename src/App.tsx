import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import getMoyaTheme from './themes/getMoyaTheme';
import React from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Footer from './layouts/Footer';
import AppAppBar from './layouts/AppAppBar';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from './themes/getLPTheme';
import store from '@store/Store';
import { Provider } from 'react-redux';
import Dashboard from './pages/DashBoard/DashBoard';
import TldrawComponent from '@pages/tldraw/TldrawComponent';
import {Moya} from '@pages/Moya/Component/Moya';

interface AppContentProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const AppContent: React.FC<AppContentProps> = ({ mode, toggleColorMode }) => {
  const location = useLocation();
  const isMoyaRoute = location.pathname === '/moya';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        ...(isMoyaRoute
            ? {
              padding: 0,
              overflow: 'hidden',
            }
            : {
              paddingTop: '10%',
              paddingBottom: '60px',
            }
        ),
        bgcolor: 'background.default',
      }}
    >
      {!isMoyaRoute && <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />}
      <Routes>
        <Route path="/" element={<HomePage mode={mode} toggleColorMode={toggleColorMode} />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tldraw" element={<TldrawComponent />} />
        <Route
          path="/moya"
          element={
            <Box sx={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              overflow: 'hidden'
            }}>
              <Moya />
            </Box>
          }
        />
      </Routes>
      {!isMoyaRoute && <Footer mode={mode} toggleColorMode={toggleColorMode} />}
    </Box>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const moyaTheme = createTheme(getMoyaTheme(mode));

  const location = useLocation();
  const isMoyaRoute = location.pathname === '/moya';

  return (
    <Provider store={store}>
      <ThemeProvider theme={isMoyaRoute ? moyaTheme : (showCustomTheme ? LPtheme : defaultTheme)}>
        <CssBaseline />
        <AppContent mode={mode} toggleColorMode={toggleColorMode} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;