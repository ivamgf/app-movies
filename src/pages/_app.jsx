import React, { Component }  from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Props from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: Props.elementType.isRequired,
  pageProps: Props.any,
};
