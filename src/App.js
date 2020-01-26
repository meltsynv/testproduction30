import React from 'react';
import './App.sass';
import './App-mobile.sass';

import { Route, Switch } from 'react-router-dom';

//Components import
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';

//Pages
import Home from './Pages/Index';
import Events from './Pages/Events';
import ErrorPage from './Pages/ErrorPage';
import Kontakt from './Pages/Kontakt';
import Speisekarte from './Pages/Speisekarte';
import Wir from './Pages/Wir';
import ImpressumPage from "./Pages/Impressum";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wir" component={Wir} />
        <Route path="/speisekarte" component={Speisekarte} />
        <Route path="/events" component={Events} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/impressum" component={ImpressumPage} />
        <Route component={ErrorPage} />
      </Switch>
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
