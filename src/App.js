import React from 'react';
import './App.sass';

import { Switch, Route} from "react-router-dom";

//Pages
import Home from './Pages/Index'
import Events from './Pages/Events'
import ErrorPage from './Pages/ErrorPage'
import Kontakt from './Pages/Kontakt'
import Speisekarte from './Pages/Speisekarte'
import Wir from './Pages/Wir'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wir" component={Wir} />
        <Route path="/speisekarte" component={Speisekarte}/>
        <Route path="/events" component={Events}/>
        <Route path="/kontakt" component={Kontakt} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
