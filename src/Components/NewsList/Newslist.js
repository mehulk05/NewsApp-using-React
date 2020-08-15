import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "../Spinner/Spinner";
import classes from "./Newslist.module.css";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment'

function Newslist(props) {
  const [post, setPost] = useState([]);
  const [err, seterr] = useState(null);
  const [loading, setloading] = useState(true);
  const [cat, setCat] = useState(null);


  let url1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9e3a2c43de094c8c8aa85c654036e441`;
  if(cat===undefined)
  {
   url1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9e3a2c43de094c8c8aa85c654036e441`;
  }
  else{
     url1 = `https://newsapi.org/v2/top-headlines?country=in${cat}&apiKey=9e3a2c43de094c8c8aa85c654036e441`;
  } 
 
  useEffect(() => {
    setloading(true)
    setCat(props.location.state);
    console.log(props.location.state)

  }, [props.location.state]);

  // let url3="https://cors-anywhere.herokuapp.com/https://timesofindia.indiatimes.com/rssfeedstopstories.cms?feedtype=json"
  // useEffect(() => {
  //   const axiosConfig = {
  //     'Access-Control-Allow-Credentials':true,
  //     'Access-Control-Allow-Origin': url3,
  //     headers: {"Access-Control-Allow-Origin": "*"}
  //   };
  //   Axios.get(url3,{
  //     method: 'GET',
  //     headers : new Headers ({
  //       'Accept':'text/html',
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST, PUT',
  //       'Access-Control-Allow-Headers': 'Content-Type',  
  //     }),
  //     mode:'no-cors'
  //     })
     
  // .then(data =>
  //   {
  //     let d=data.data.channel.item
  //     console.log(d)
  //     setloading(false)
  //     setPost(d)
  //     // d=d.split(`meta property`)
  //     // let d2=d
  //     // let fst=`content="`
  //     // let sec=`"/>`
  //     // let d3=d2[3].match(new RegExp(fst + "(.*)" + sec));
  //     // console.log(d3[1],d2[3])
  //   } )
  //     .catch((e) => {
  //       setloading(false);
  //       seterr(e.toJSON());
  //       console.log(e);
  //     });
  // }, [url3]);
 
  useEffect(() => {
    Axios.get(url1)
      .then((data) => {
        setPost(data.data.articles);
        //console.log(new Date(data.data.articles[0].publishedAt))
        setloading(false);
        console.log(data.data.articles,url1);
      })
      .catch((e) => {
        setloading(false);
        seterr(e.toJSON());
        console.log(e);
      });
  }, [cat,url1]);

  let posts = post.map((p, index) => (

    <Link
      className={classes.colors}
      key={index}
      to={{
        pathname: `${props.location.pathname}/${index}`,
        customObject: p,
        state: p,
      }}
    >
      <div className={`card ${classes.card}`} style={{}}>
        <div className={classes.cardhorizontal}>
          <div className="img-square-wrapper">
            <img className="" src={p.urlToImage} alt="Card  cap" />
          </div>

          <div className={`card-body ${classes.cardbody}`}>
            <h4 className="card-title">{p.title}</h4>
            <p className={`card-text ${classes.limit}`}>
              {p.content}
            </p>
            <p className={`card-text ${classes.limit}`}>
              {p.description}
            </p>
          </div>
        </div>
        <div className="card-footer">
    <small className="text-muted">{moment(p.publishedAt).format('llll')}</small>
        </div>
      </div>
    </Link>
  ));

  let rendered;
  let error;
  let errorMsg;
  if (err && !loading) {
    console.log("Errtor is :", err);
    error = err.code ? err.code : err.name;
    errorMsg = err.message;
    rendered = (
      <>
        <h2 className="red center">{error}</h2>
        <p className="errorMessage center">{errorMsg}</p>
      </>
    );
  }

  if (loading) {
    rendered = <Spinner />;
  }
  if (!loading && posts.length>0) {
   
    rendered = <div>{posts}</div>;
  }

  

 
  return (
    <div>
      
      <div className="container">
        {rendered}
      </div>
    </div>
  );
}

export default withRouter(Newslist);
