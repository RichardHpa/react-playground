import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { AuthenticationProvider } from 'context/AuthenticationContext';
import { HashRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getTheme from './Theme/base';
import oidcConfiguration from './configuration';

const queryClient = new QueryClient();

ReactDOM.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {/* <AuthenticationProvider> */}
    <AuthenticationProvider configuration={oidcConfiguration} loggerLevel={oidcLog.DEBUG} isEnabled>
      <ThemeProvider theme={getTheme('LIGHT')}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </ThemeProvider>
    </AuthenticationProvider>
    {/* </AuthenticationProvider> */}
    <ReactQueryDevtools position="bottom-right" />
  </QueryClientProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
