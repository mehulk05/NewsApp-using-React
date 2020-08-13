// import React, { useState ,useEffect} from "react";
import classes from "./SingleNews.module.css";

import React, { Component } from 'react'

export class SingleNews extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      news:{}
  }
}
  componentDidMount(){
    this.setState({
      news:this.props.location.state
    })
  }
  render() {
     return (
    <div className="container">
     
      <div className={`card ${classes.card}`}>
        <h1 className={classes.h1}>{this.state.news.title}</h1>
        <img className="card-img-top" src={this.state.news.urlToImage} alt="Card " />
        <div className="card-body">
          <h4 className="card-title">{this.state.news.title}</h4>
          <p className="card-text">{this.state.news.content}</p>
          <p className="card-text">{this.state.news.description}</p>
          <a href={this.state.news.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read complete story
          </a>
        </div>

        <div className="card-footer">
          <small className="text-muted">{this.state.news.publishedAt}</small>
        </div>
      </div>
    </div>
  );
  }
}

export default SingleNews

// function SingleNews(props) {
//   const [tstate,setState] = useState(props.location.state);


//   useEffect(()=>{
//     setState(props.location.state)
//     props.rerenderParentCallback()
//   },[tstate])

// if(tstate==null || tstate==undefined){
//   console.log("no data found")
// }
//   return (
//     <div className="container">
//       <p>Hello</p>
//       <div className={classes.card}>
//         <h1>{tstate.title}</h1>
//         <img className="card-img-top" src={tstate.urlToImage} alt="Card " />
//         <div className="card-body">
//           <h4 className="card-title">{tstate.title}</h4>
//           <p className="card-text">{tstate.content}</p>
//           <p className="card-text">{tstate.description}</p>
//           <a href={tstate.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//             Read complete story
//           </a>
//         </div>

//         <div className="card-footer">
//           <small className="text-muted">{tstate.publishedAt}</small>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleNews;
