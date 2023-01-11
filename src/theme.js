import { createTheme } from "@mui/material/styles";

export const colors = {
  black0: '#000000',
  gray0: '#515151',
  gray1: '#323232',
  brown0: '#A59263',
  // green0: '#26A17B',
  white0: '#FFFFFF',
  red: '#FF005C',
};

export const fonts = {
  primary: 'IBMPlexSans',
  secondary: 'j3st',
};

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      vsm: 400,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'light',
    background: {
      default: colors.white0,
      black1: colors.black1,
      green: colors.brown0,
      gray0: colors.gray0,
      footer: `linear-gradient(180deg, transparent 0%, ${colors.black2} 31.32%)`,
    },
    primary: {
      main: colors.white0,
      // contrastText: colors.green0,
    },
    secondary: {
      main: colors.brown0,
      contrastText: colors.black0,
    },
    tertiary: {
      main: colors.gray0,
    },
    text: {
      primary: colors.black0,
      secondary: colors.brown0,
      tertiary: colors.gray0,
      gray: 'rgba(254, 244, 236, 0.6)',
    },
    error: {
      main: colors.red,
    },
  },
  typography: {
    fontFamily: [
      'IBMPlexSans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontSize: 14,
      textTransform: 'capitalize',
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    h2: {
      fontSize: 42,
    },
    h3: {
      fontSize: 26,
      fontWeight: 300,
    },
    h4: {
      fontSize: 30,
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 0,
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 0,
      textTransform: 'capitalize',
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'capitalize',
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      vsm: 400,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'light',
    background: {
      default: colors.white0,
      black1: colors.black1,
      green: colors.brown0,
      gray0: colors.gray0,
      footer: `linear-gradient(180deg, transparent 0%, ${colors.black2} 31.32%)`,
    },
    primary: {
      main: colors.white0,
      // contrastText: colors.green0,
    },
    secondary: {
      main: colors.brown0,
      contrastText: colors.black0,
    },
    tertiary: {
      main: colors.gray0,
    },
    text: {
      primary: colors.black0,
      secondary: colors.brown0,
      tertiary: colors.gray0,
      gray: 'rgba(254, 244, 236, 0.6)',
    },
    error: {
      main: colors.red,
    },
  },
  typography: {
    fontFamily: [
      'IBMPlexSans',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontSize: 14,
      textTransform: 'capitalize',
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    h2: {
      fontSize: 42,
    },
    h3: {
      fontSize: 26,
      fontWeight: 300,
    },
    h4: {
      fontSize: 30,
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 0,
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 0,
      marginBottom: 0,
      textTransform: 'capitalize',
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'capitalize',
    },
  },
});