import React from 'react';
import './App.css';
import {Redirect, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Route path='/' exact render={() => <Main />} />
      <Route path='/home' component={Home} />
      <Redirect to='/' />
    </React.Fragment>
  );
}

export default App;
