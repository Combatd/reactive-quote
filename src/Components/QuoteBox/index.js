import React, { Component } from 'react';
import { connect } from 'react-redux';




class QuoteBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: ''
        }
    }

    render() {
        return (
            <React.Fragment> 
                This is the QuoteBox!
            </React.Fragment>
        )
    }
}

export default QuoteBox;