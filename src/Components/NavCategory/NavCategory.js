import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./NavCategory.css";

export class NavCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        { type: "Home", categoryUrl: "/home/feed" },
        { type: "India News", categoryUrl: "/news/india/feed" },
        { type: "World News", categoryUrl: "/news/world/feed" },
        { type: "Entertainment", categoryUrl: "/entertainment/bollywood/feed" },
        { type: "Crime", categoryUrl: "/news/crime/feed" },
        { type: "Sports", categoryUrl: "/sports/feed" },
        { type: "Buisness", categoryUrl: "/business/feed" },
        { type: "Health", categoryUrl: "/lifestyle/health/feed" },
        { type: "Technology", categoryUrl: "/technology/feed" },
        { type: "COVID-19", categoryUrl: "/latest-news/covid-19/feed" },
        { type: "Coronavirus", categoryUrl: "/latest-news/coronavirus/feed" },
      ],
      selectedCategory: "/home/feed",
    };
  }

  ClickHandler = (url) => {
    this.setState({
      selectedCategory: url,
    });
  };
  render() {
   
    let cat = this.state.category.map((c) => (
      <li key={c.type}>
     
        <NavLink
          onClick={this.props.clicked}
          to={{
            pathname: `/${c.type}`,
            state: `${c.categoryUrl}`,
          }}
        >
          {c.type}
        </NavLink>
      </li>
    ));
    return (
      <div>
        <ul className="ullist">{cat}</ul>

        {/* <Newslist selectedCategory={this.state.selectedCategory} /> */}
      </div>
    );
  }
}

export default NavCategory;

