import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quoteText : "",
            quoteAuthor : "",
            curColor : this.props.color,
            tweetURL : "https://twitter.com/intent/tweet/?text="
        }
    }

    render(){
        return (
            <main id="quote-box">
                <div id="quote-content">
                    <div id="text">{ this.state.quoteText }</div>
                    <div id="author">{ this.state.quoteAuthor }</div>
                </div>
                <button id="new-quote">Get New Quote</button>
                <a href={ this.state.tweetURL } id="tweet-quote"><FontAwesomeIcon icon={['fab', 'twitter-fa']} /> Tweet Quote</a>
            </main>
        );
    }
}

export default QuoteBox;