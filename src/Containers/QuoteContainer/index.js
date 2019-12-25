import React, { Component } from 'react';
import { connect } from 'react-redux';



class QuoteContainer extends Component {
    constructor() {
        this.state = {
            quote: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <p>This is the QuoteContainer!</p>
            </React.Fragment>
        )
    }

}

export default QuoteContainer;