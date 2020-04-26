import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // użycie krótszej nazwy, by nie pisać nadmiarowo

import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { PageNotFound } from './components/PageNotFound';


const App = () => {
  return (
    <Router>
      <section>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>  
        <Footer />
      </section>
    </Router>
  );
}


export default App;
