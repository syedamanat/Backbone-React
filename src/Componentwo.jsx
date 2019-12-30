import React, { Component } from "react";
import ReactDOM from "react-dom";

class Componentwo extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <div>
                <form id="article-form">
                </form>
                <h1 className={this.props.color}>Hello Hello Hello</h1>
            </div>
        );
    }
}
export default Componentwo;

