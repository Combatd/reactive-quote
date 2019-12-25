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

    render() {
        return (
            <React.Fragment>
                <p>This is the QuoteContainer!</p>
                <QuoteBox />
            </React.Fragment>
        )
    }

}

export default QuoteContainer;