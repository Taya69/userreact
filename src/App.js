import React from 'react';

import { HomePage } from './features/home-users/Homepage';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { SingleUserPage } from './features/home-users/DetailUser';
import { Navbar } from './features/navBar/Navbar';
import { SinglePagePost } from './features/posts/DetailPost';
import { ChartPage } from './features/chart/Chartpage';


function App() {
  return (
    <Router> 
    <Navbar/>   
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
              <React.Fragment>                     
                <HomePage/>
              </React.Fragment>
            )}
        />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/users/:userId" component={SingleUserPage} />
        <Route exact path="/posts/:postId" component={SinglePagePost} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
