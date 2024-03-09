'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(14px, -12px) scale(0.75)',
          background: 'red',

        }
      }
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
   
        }
      }
    },
  }
});

export default theme;