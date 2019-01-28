import React from 'react';
import { connect } from 'react-redux'
import { clickEqual, allClear, changeSign } from'../actions/arithmetic';
import { recall, store, clear } from'../actions/memory';
import NumberButton from './NumberButton';
import Operator from './Operator';

const Calculator = (props) => {
    const {
        result,
        currentInput,
        onClickEqual,
        onClickSignChange,
        onClickClear,
        onClickStore,
        onClickRecall,
        onClickMemoryClear,
    } = props;
    return (
        <div className="calculator">
            <div className="field full-row">
                <div className="screen">
                    <div className="result">
                        {currentInput || result}
                    </div>
                </div>
            </div>
            <div className="field first-two-grid" onClick={onClickClear}>
                <div className="function">AC</div>
            </div>
            
            <div className="field" onClick={onClickSignChange}>
                <div className="function">+/-</div>
            </div>
            <div className="field">
                <div className="function">%</div>
            </div>
            <Operator operator="÷"/>
            <div className="field" onClick={onClickRecall}>
                <div className="function">mr</div>
            </div>
            <NumberButton digit={7} />
            <NumberButton digit={8} />
            <NumberButton digit={9} />
            <Operator operator="x"/>
            <div className="field" onClick={() => onClickStore(this.props.currentInput)}>
                <div className="function">m+</div>
            </div>
            <NumberButton digit={4} />
            <NumberButton digit={5} />
            <NumberButton digit={6} />
            <Operator operator="-"/>
            <div className="field" onClick={() => onClickStore(this.props.currentInput)}>
                <div className="function">m-</div>
            </div>
            <NumberButton digit={1} />
            <NumberButton digit={2} />
            <NumberButton digit={3} />
            <Operator operator="+"/>
            <div className="field" onClick={onClickMemoryClear}>
                <div className="function">mc</div>
            </div>
            <NumberButton digit={0} className="two-three-grid" />
            <div className="field">
                <div className="number">.</div>
            </div>
            <div className="field" onClick={onClickEqual}>
                <div className="operator">=</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    result: state.calculator.result,
    currentInput: state.calculator.currentInput,
    currentOperator: state.calculator.currentOperator,
});

const mapDispatchToProps = (dispatch) => ({
    onClickEqual: () => dispatch(clickEqual()),
    onClickSignChange: () => dispatch(changeSign()),
    onClickClear: () => dispatch(allClear()),
    onClickRecall: () => dispatch(recall()),
    onClickStore: (input) => dispatch(store(input)),
    onClickMemoryClear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);