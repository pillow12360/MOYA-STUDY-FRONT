
import { PaletteMode, ThemeOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { gray } from './getLPTheme'; // 기존 테마의 색상 재사용

const getMoyaTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    background: {
      default: '#e3e5e8',
      paper: mode === 'light' ? '#f2f3f5' : '#2f3136',
    },
    text: {
      primary: mode === 'light' ? '#060607' : '#ffffff',
      secondary: mode === 'light' ? '#6a7480' : '#b9bbbe',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'hidden',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:hover': {
            backgroundColor: alpha(gray[400], 0.1),
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: mode === 'light' ? alpha(gray[300], 0.8) : alpha(gray[700], 0.6),
        },
      },
    },
  },
});

export default getMoyaTheme;