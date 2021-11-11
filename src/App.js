import { useState,useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar' ;
import Home from "./Pages/Home" ;
import BookMark from "./Pages/BookMark";
import NextMission from "./Pages/NextMission";
import Favourites from "./Pages/Favourites";
import Footer from './Footer/Footer';
import Share from './Share/Share'

function App() {
  
  return (
    <div className="App">
      <Router>
          <NavBar />
          <div className="data">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mission" exact component={NextMission} />
          <Route path="/bookmarks" exact component={BookMark} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
        </div>
      </Router>
      <Share/>
      <Footer/>      
    </div>
  );
}

export default App;
