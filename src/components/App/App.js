import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Admin from "../Admin/Admin";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#039be5',
      },
      secondary: {
        main: '#d50000',
        dark: '',
      },
    },
  }
)

class App extends Component {


  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>"And my last reminder of the day, which is my last reminder of every day, is...?"</i> - Luke</h4>
            </header>
            <br />
            <Route exact path='/' component={Feeling} />
            <Route path='/understanding' component={Understanding} />
            <Route path='/support' component={Support} />
            <Route path='/comments' component={Comments} />
            <Route path='/review' component={Review} />
            <Route path='/admin' component={Admin} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default connect()(App);
