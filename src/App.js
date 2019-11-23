import React from 'react';
import './App.sass';

import { Switch, Route} from "react-router-dom";

//Pages
import Home from './Pages/Index'
import Wir from './Pages/Wir'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wir" component={Wir}/>
      </Switch>
    </div>
  );
}

export default App;
