import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import * as C from'./App.styles';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <C.Container>
        <Header toggleTheme={toggleTheme} />
        <Body />
        <Footer />
      </C.Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
