import React from 'react';
import './App.css';

class QuoteBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            quoteText : "",
            quoteAuthor : "",
            curColor : this.props.color,
        }

        this.getNewQuote();

        // Bind handles and functions
        this.getNewQuote = this.getNewQuote.bind(this);
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    // Get a quote and author from an API and set status
    getNewQuote() {
        const app = this;
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          app.setState({
            quoteText: data.content,
            quoteAuthor: data.author
          });
        });
    }

    // Handles the new quote button click
    handleNewQuote() {
        const colors = ["gray", "blue", "purple", "red", "orange", "green"];
        let color = colors[Math.floor(Math.random()*colors.length)];
        while(color === this.state.curColor) color = colors[Math.floor(Math.random()*colors.length)];
        this.setState({
            curColor: color
        });
        this.props.onChangeAppColor(color);
        this.getNewQuote();
    }


    render(){
        return (
            <main id="quote-box">
                <div id="quote-content">
                    <div id="text">{ this.state.quoteText }</div>
                    <div id="author">{ this.state.quoteAuthor }</div>
                </div>
                <button onClick={this.handleNewQuote} id="new-quote">Get New Quote</button>
            </main>
        );
    }
}

export default QuoteBox;