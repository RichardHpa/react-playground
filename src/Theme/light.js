import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  drawerInfo: {
    width: 280,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

export default theme;
