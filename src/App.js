import React from 'react';
import './App.css';

import { Switch, Route} from "react-router-dom";

//Pages
import Home from './Pages/Index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
