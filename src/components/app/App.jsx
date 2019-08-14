import React from 'react';

import { ThemeProvider } from '@livechat/ui-kit';
import { Container } from '@material-ui/core';

import { Header } from '../header';

import './App.css';

export const App = () => (
  <ThemeProvider>
    <Container maxWidth="xs" style={{padding: 0}}>
      <Header />
    </Container>
  </ThemeProvider>
);
