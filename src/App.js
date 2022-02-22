
import React from 'react';
import Navbar from './navbar-dropdown/Navbar';
import './App.css';
import Home from './navbar-dropdown/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './navbar-dropdown/pages/Services';
import Products from './navbar-dropdown/pages/Products';
import ContactUs from './navbar-dropdown/pages/ContactUs';
import SignUp from './navbar-dropdown/pages/SignUp';
import Marketing from './navbar-dropdown/pages/Marketing';
import Consulting from './navbar-dropdown/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;