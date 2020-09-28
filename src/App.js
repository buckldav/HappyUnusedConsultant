import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import './App.css';
import { Archive, ToDo } from './pages/HomePages';
import Layout from './components/Layout';



// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: "'Spectral', serif",
    body: "'Source Sans Pro', sans-serif",
    mono: "'Space Mono', monospace",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CSSReset />

        <Layout>
          <Route exact path="/">
            <ToDo />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
