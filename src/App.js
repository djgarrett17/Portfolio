import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Container from './styles/container.css';

// // Components
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js'
// // Pages
import Home from './pages/Home.js';
import Mailchimp from './pages/Mailchimp.js';



const App = () => {

  return (
    // <Router>
      
      
      <div style={Container}>
        {/* <Modal/> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mailchimp" component={Mailchimp} />
         

        </Switch>
        <Footer/>
      </div>
      
    // </Router>
  )
}

export default (App);
