import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
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
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
