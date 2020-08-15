// import React, { useState ,useEffect} from "react";
import classes from "./SingleNews.module.css";
import Parser from 'html-react-parser'
import React, { Component } from 'react'

export class SingleNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      news:this.props.location.state
  }
}
  componentDidMount(){
    //this.props.location.state=this.props.location.customObject
    this.setState({
      news:this.props.location.state
    },
    )
 }
  render() {
     return (
    <div className="container">
     
      <div className={`card ${classes.card}`}>
        <h1 className={classes.h1}>{this.state.news[0]}</h1>
        <img className="card-img-top" src={this.state.news[3]} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{this.state.news[0]}</h4>
          <div className="card-text">{Parser(Parser(this.state.news[2]))}</div>
          <div className="card-text">{Parser(Parser(this.state.news[2]))}</div>
          <a href={this.state.news[1]} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read complete story
          </a>
        </div>

        <div className="card-footer">
          <small className="text-muted">{this.state.news[4]}</small>
        </div>
      </div>
    </div>
  );
  }
}

export default SingleNews

