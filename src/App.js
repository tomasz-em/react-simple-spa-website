import React from 'react';

import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Nav } from './components/Nav';


const App = () => {
  return (
    <section>
        <Nav />
        <Home />
        <About />
        <Contact />
        <Footer />
    </section>
  );
}


export default App;
