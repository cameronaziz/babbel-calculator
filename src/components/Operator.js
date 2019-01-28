import React from 'react';
import { connect } from 'react-redux';
import { setOperator } from '../actions/arithmetic';

const Operator = (props) => (
    <div className="field" onClick={() => props.onClick(props.operator)}>
        <div className="operator">{props.operator}</div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    onClick: (operator) => dispatch(setOperator(operator)),
});

export default connect(null, mapDispatchToProps)(Operator);