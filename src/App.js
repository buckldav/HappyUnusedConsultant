import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Page1, Page2 } from './pages/HomePages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Page1 />
      </Route>
      <Route path="/2">
        <Page2 />
      </Route>
    </BrowserRouter>
  );
}

export default App;
