import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import './style.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Mission from './components/pages/Mission';
import Team from './components/pages/Team';
import JoinUs from './components/pages/JoinUs';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='--bs-primary'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/mission' component={Mission} />
          <Route path='/team' component={Team} />
          <Route path='/joinus' component={JoinUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
