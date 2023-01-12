import React from 'react';

import './App.css';
import {Redirect, Route} from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <Main />} />
      <Redirect to='/' />
    </div>
  );
}

export default App;
