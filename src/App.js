import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import './style.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Mission from './components/pages/Mission';
import Team from './components/pages/Team';
import JoinUs from './components/pages/JoinUs';
import TermsEnglish from './components/pages/termsEn';
import TermsMandarin from './components/pages/termsZh';
import PolicyChinese from './components/pages/policyZh';
import PolicyEnglish from './components/pages/policyEn';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='--bs-primary'>
      <HashRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/mission' component={Mission} />
        <Route path='/team' component={Team} />
        <Route path='/joinus' component={JoinUs} />
        <Route path='/terms-en' component={TermsEnglish} />
        <Route path='/terms-zh' component={TermsMandarin} />
        <Route path='/policy-en' component={PolicyEnglish} />
        <Route path='/policy-zh' component={PolicyChinese} />
      </HashRouter>
    </div>
  );
}

export default App;
