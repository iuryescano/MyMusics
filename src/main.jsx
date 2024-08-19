import React from 'react'
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global';

import { Profile } from './pages/Profile/index'

import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
