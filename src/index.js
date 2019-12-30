import FormContainer from "./FormContainer.jsx";
import $ from 'jquery';
import Backbone from 'backbone'
import React from 'react';
import ReactDOM from 'react-dom';

$(document).ready(function () {

    function Paragraph(props) {
        return <p>{props.text}</p>;
    }

    var FirstView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        render() {
            console.log('Backbone js initiated...')
            // ReactDOM.render(<Paragraph text="hello" />, this.el)
            ReactDOM.render(<FormContainer text="Hello World from the backbone-React Element" />, this.el)

            return this;
        }

    })

    const model = new Backbone.Model();
    const view = new FirstView({ model, el: "#app" });

    // firstView.render();
})