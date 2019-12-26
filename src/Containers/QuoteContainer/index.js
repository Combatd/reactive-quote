import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuoteBox from '../../Components/QuoteBox';


class QuoteContainer extends Component {
    constructor() {
        super();

        this.state = {
            quotes: []
        }
    }

    componentDidMount() {
        this.getQuotes();
    }

    getQuotes = async () => {
        try {
            const quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json' , {
                credentials: 'include',
                method: 'Get',
                headers: {
                    'Content-Type': 'applicartion/json'
                }
            });
            const parsedQuotes = await quotes.json();
            this.setState({
                quotes: parsedQuotes.data
            }) 
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <React.Fragment>
                <p>This is the QuoteContainer!</p>
                <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
                <QuoteBox />
            </React.Fragment>
        )
    }

}

export default QuoteContainer;