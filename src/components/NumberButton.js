import React from 'react';
import { connect } from 'react-redux';
import { clickDigit } from '../actions/arithmetic';

const NumberButton = (props) => {
    let className = 'field';
    if (props.className) {
        className = `field ${props.className}`
    }
    return (
        <div className={className} onClick={() => props.onClick(props.digit)}>
            <div className="number">{props.digit}</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onClick: (digit) => dispatch(clickDigit(digit)),
});

export default connect(null, mapDispatchToProps)(NumberButton);