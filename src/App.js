import React from "react";

import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SingleNews from "./Components/NewsList/SingleNews/SingleNews";

import Layout from "./Components/Menubar/Layout/Layout";
import Newslist from "./Components/NewsList/Newslist";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Layout/>
        <Switch>
        
          <Route path="/:category" exact component={Newslist}></Route>
          <Route path="/:category/:id" component={SingleNews}></Route>
          <Route exact path="/" render={() => (<Redirect to="/Home" />)} /> 
        </Switch>
        {/* <Redirect from="/" to="/Home" /> */}
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
