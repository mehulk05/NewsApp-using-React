import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./NavCategory.css";

export class NavCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        { type: "Home", categoryUrl: "" },
        { type: "Entertainment", categoryUrl: "&category=entertainment" },
        { type: "Sports", categoryUrl: "&category=sports" },
        { type: "Buisness", categoryUrl: "&category=business" },
        { type: "Health", categoryUrl: "&category=health" },
        { type: "Science", categoryUrl: "&category=science" },
        { type: "Technology", categoryUrl: "&category=technology" },
      ],
      selectedCategory: "",
    };
  }

  ClickHandler = (url) => {
    this.setState(
      {
        selectedCategory: url,
      },
      () => {
        console.log(this.state.selectedCategory);
      }
    );
  };
  render() {
    let cat = this.state.category.map((c) => (
      <li key={c.type}>
        {/* <NavLink to={c.type} state={c.categoryUrl} onClick={() => this.ClickHandler(c.categoryUrl)}> */}
          
          <NavLink onClick={this.props.clicked}
         to={{
        pathname: `/${c.type}`,
        state: `${c.categoryUrl}`,
      }}>
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

//   let catgory = [
//     { type: "Home", categoryUrl: "" },
//     { type: "Entertainment", categoryUrl: "&category=entertainment" },
//     { type: "Sports", categoryUrl: "&category=sports" },
//   ];

//   let cat = catgory.map(
//       (c) =>
//         <li key={c.type}

//         >{c.type}</li>);
//   return (
//     <div>
//       <ul>{cat}</ul>
//     </div>
//   );
// }
