import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class QuoteBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: {}
        }
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote = async () => {
        const quotesData = this.props.quotes;
        return quotesData[Math.floor(Math.random() * quotesData.length)];
    }

    render() {
        return (
            <React.Fragment> 
                <div id="wrapper">
                    <div id="quote-box">
                        <div class="quote-text">
                            <i class="fa fa-quote-left"> </i><span id="text"></span>
                        </div>
                        <div class="quote-author">
                            - <span id="author"></span>
                        </div>
                        <div class="buttons">
                            <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                            <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                               <FontAwesomeIcon icon={['fab', 'tumblr']} />
                            </a>
                            <button class="button" id="new-quote">New quote</button>
                        </div>
                    </div>
                    <div class="footer"> </div>
                </div>
            </React.Fragment>
        )
    }
}

export default QuoteBox;