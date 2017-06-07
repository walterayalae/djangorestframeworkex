var React = require('react')
var ReactDOM = require('react-dom')

var BooksList = React.createClass({
    loadBooksFromServer: function(){
        $.ajax({
            url: 'http://127.0.0.1:8000/post/api/1',
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
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
