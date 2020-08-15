import React, { Component } from "react";
export default class Rss extends React.Component{
    constructor(props) {
         super(props);
         this.state = { feed: [] };
    }

    async componentDidMount() {
        const feed = await parser.parseURL('https://www.reddit.com/.rss');
        this.setState({ feed });
    }

    render() {
        let x =this.state.feed.map((item, i)=> (
            <div key={i}>
                <h1>item.title</h1>
                <a href="">item.link</a>
            </div>
        ))
        return (
        <div>
            <h1>RSS Feed</h1>
            {x}
        </div>
        );
    }
}