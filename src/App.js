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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: [],
      archive: []
    }
  }

  handleArchive(value, i) {
    this.handleDelete(i)
    const archive = this.state.archive
    archive.push(value)
    this.setState({ archive }, this.updateStorage)
  }

  handleCreate(value) {
    const todo = this.state.todo
    todo.push(value)
    this.setState({ todo }, this.updateStorage)
  }

  handleDelete(i) {
    const todo = this.state.todo
    todo.splice(i, 1)
    this.setState({ todo }, this.updateStorage)
  }

  handleDeleteArchive(i) {
    const archive = this.state.archive
    archive.splice(i, 1)
    this.setState({ archive }, this.updateStorage)
  }

  updateStorage() {
    localStorage.removeItem("state")
    localStorage.setItem("state", JSON.stringify(this.state))
    console.log(localStorage)
  }

  componentDidMount() {
    const state = localStorage.getItem("state")
    if (state) {
      this.setState(JSON.parse(state))
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CSSReset />

          <Layout>
            <Route exact path="/">
              <ToDo 
                todo={this.state.todo} 
                handleArchive={this.handleArchive.bind(this)}
                handleCreate={this.handleCreate.bind(this)} 
                handleDelete={this.handleDelete.bind(this)}  
              />
            </Route>
            <Route path="/archive">
              <Archive
                todo={this.state.archive}
                handleDelete={this.handleDeleteArchive.bind(this)}  
              />
            </Route>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
