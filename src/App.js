import React from "react";

import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SingleNews from "./Components/NewsList/SingleNews/SingleNews";

import Layout from "./Components/Menubar/Layout/Layout";

import Footer from "./Components/Footer/Footer";

import NewsList2 from "./Components/NewsList2/NewsList2";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Layout/>
        <Switch>
        
          <Route path="/NewsApp-using-React/:category" exact component={NewsList2}></Route>
          <Route path="/NewsApp-using-React/:category/:id" component={SingleNews}></Route>
          <Route exact path="/NewsApp-using-React/" render={() => (<Redirect to="/NewsApp-using-React/Home" />)} /> 
        </Switch>
       
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
