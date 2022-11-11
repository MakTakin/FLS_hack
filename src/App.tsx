import React, { FC } from 'react';
import { Provider } from 'react-redux';
import 'rc-slider/assets/index.css';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import { store, history } from './store';

import Root from './views/Root';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#000',
      contrastText: '#fff',
      light: '#ced4dacc'
    },
    warning: {
      // main: '#FFF063',
      main: '#edb229',
    },
    error: {
      main: '#D41B2C',
    },
    info: {
      main: '#00CFB5',
      contrastText: '#fff',
    },
    text: {
      primary: '#0C2340',
    },
    vistaBlue: {
      main: '#688CE8',
    },
    richBlue: {
      main: '#5450E4',
    },
    lime: {
      main: '#BFED33',
    },
    merckLemon: {
      main: '#FFF063',
    },
    offWhite: {
      // main: '#F7F7F7',
      // main: '#f6f8fb',
      main: '#f8f9fd',
      contrastText: '#ced4da',

    },
    merckBlue: {
      main: '#0C2340',
    },
    borderColor: '#ced4da',
  },
  shape: {
    borderRadius: 4,
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    offWhite: Palette['primary'];
    vistaBlue: Palette['primary'];
    richBlue: Palette['primary'];
    lime: Palette['primary'];
    merckLemon: Palette['primary'];
    merckBlue: Palette['primary'];
    borderColor: string;
  }
  interface PaletteOptions {
    offWhite: PaletteOptions['primary'];
    vistaBlue: PaletteOptions['primary'];
    richBlue: PaletteOptions['primary'];
    lime: PaletteOptions['primary'];
    merckLemon: PaletteOptions['primary'];
    merckBlue: PaletteOptions['primary'];
    borderColor: string;
  }
}

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>
            <Root />
          </Router>
        </Provider>
    </ThemeProvider>
  );
};

export default App;
