import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
import 'babel-polyfill';

var BooksList = React.createClass({

    loadBooksFromServer: function(){
      fetch('http://127.0.0.1:8000/post/api/1', { method: "GET"})
        .then(response => response.json())
        .then(books => {
          this.setState({
            data:books
          })
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadBooksFromServer();

    },

    render: function() {

        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    <li>{this.state.data.title}</li>
                    <li>{this.state.data.tags}</li>
                    <li>{this.state.data.article}</li>
                    <li>{this.state.data.date}</li>
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<BooksList />,
    document.getElementById('container'))
