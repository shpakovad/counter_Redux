import React from 'react';
import './App.css';
import SettingsCounter from './SettingsCounter';
import Counter from './Counter';
import {connect} from "react-redux";
import {
    onIsButtonIncAC, onIsButtonResetAC, onIsButtonSetAC,
    onMaxValueReduxAC, onMinValueReduxAC, onResetCounterAC,
    onSetEnteredValueAC, onSetIncorrectValueAC, onSetReduxAC,
    setErrorMaxAC, setErrorMinAC, setIncrementAC, setNumberNewColorAC
} from "./reducer";


class App extends React.Component {

    btns = {reset: "reset", inc: "inc", set: "set"};

    //при клике на set значение выбранного мин значения перебрасывается на screen
    onSet = () => {
        let newMinValue = this.props.minValue;
        this.props.onSetRedux(newMinValue);
        this.props.onIsButtonSet(true);
        this.props.onIsButtonInc(false);
        this.props.onIsButtonReset(false);
    };

    //при достижении макс знач-я кнопка inc блокируется
    onInc = () => {
        this.props.setIncrement(this.props.counter);
        if (this.props.counter === this.props.maxValue - 1) {
            this.props.onIsButtonInc(true);
            this.props.setNumberNewColor(true)
        }
    };

    //сбрасывает при достижении макс значения
    onReset = () => {
        this.props.onIsButtonInc(false);
        this.props.setNumberNewColor(false);
        let resetCounterValue = this.props.minValue;
        this.props.onResetCounter(resetCounterValue)
    };

    //событие с мин и макс значениями
    onMinValue = (e) => {
        let setMinValue = Number(e.target.value);
        this.props.onMinValueRedux(setMinValue)
    };
    onMaxValue = (e) => {
        let setMaxValue = Number(e.target.value);
        this.props.onMaxValueRedux(setMaxValue)
    };

    //меняется значение сетчика, в том числе при некорректном вводе. Так же блокируются кновки inc,reset
    onClickCounterValue = () => {
        this.props.onIsButtonSet(false);
        this.props.onIsButtonInc(true);
        this.props.onIsButtonReset(true);
        this.props.setErrorMax(false);
        this.props.setErrorMin(false);
        this.props.onSetEnteredValue();
        if (this.props.maxValue <= -1) {
            this.props.onIsButtonSet(true);
            this.props.setErrorMax(true);
            this.props.setErrorMin(false);
            this.props.onSetIncorrectValue()
        }
        if (this.props.minValue <= -1) {
            this.props.onIsButtonSet(true);
            this.props.setErrorMax(false);
            this.props.setErrorMin(true);
            this.props.onSetIncorrectValue()
        }
        if (this.props.minValue >= this.props.maxValue) {
            this.props.onIsButtonSet(true);
            this.props.setErrorMax(true);
            this.props.setErrorMin(true);
            this.props.onSetIncorrectValue()
        }
    };

    render = () => {
        return (
            <div className="App">
                <SettingsCounter set={this.btns.set}
                                 onSet={this.onSet}
                                 minValue={this.props.minValue}
                                 onMinValue={this.onMinValue}
                                 maxValue={this.props.maxValue}
                                 onMaxValue={this.onMaxValue}
                                 onClickCounterValue={this.onClickCounterValue}
                                 errorMax={this.props.errorMax}
                                 errorMin={this.props.errorMin}
                                 isButtonSet={this.props.isButtonSet}
                />
                <Counter counter={this.props.counter}
                         reset={this.btns.reset}
                         inc={this.btns.inc}
                         onInc={this.onInc}
                         onReset={this.onReset}
                         isButtonInc={this.props.isButtonInc}
                         numberNewColor={this.props.numberNewColor}
                         errorMax={this.props.errorMax}
                         errorMin={this.props.errorMin}
                         isButtonReset={this.props.isButtonReset}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        minValue: state.minValue,
        isButtonSet: state.isButtonSet,
        isButtonInc: state.isButtonInc,
        isButtonReset: state.isButtonReset,
        maxValue: state.maxValue,
        numberNewColor: state.numberNewColor,
        errorMax: state.errorMax,
        errorMin: state.errorMin
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onIsButtonSet(isButtonSet) {
            const action = onIsButtonSetAC(isButtonSet);
            dispatch(action)
        },
        onIsButtonInc(isButtonInc) {
            const action = onIsButtonIncAC(isButtonInc);
            dispatch(action)
        },
        onIsButtonReset(isButtonReset) {
            const action = onIsButtonResetAC(isButtonReset);
            dispatch(action)
        },
        onSetRedux(newMinValue) {
            const action = onSetReduxAC(newMinValue);
            dispatch(action)
        },
        onMinValueRedux(setMinValue) {
            const action = onMinValueReduxAC(setMinValue);
            dispatch(action)
        },
        onMaxValueRedux(setMaxValue) {
            const action = onMaxValueReduxAC(setMaxValue);
            dispatch(action)
        },
        setNumberNewColor(numberNewColor) {
            const action = setNumberNewColorAC(numberNewColor);
            dispatch(action)
        },
        setErrorMax(errorMax) {
            const action = setErrorMaxAC(errorMax);
            dispatch(action)
        },
        setErrorMin(errorMin) {
            const action = setErrorMinAC(errorMin);
            dispatch(action)
        },
        setIncrement(counter) {
            const action = setIncrementAC(counter);
            dispatch(action)
        },
        onResetCounter(resetCounterValue) {
            const action = onResetCounterAC(resetCounterValue);
            dispatch(action)
        },
        onSetIncorrectValue() {
            const action = onSetIncorrectValueAC();
            dispatch(action)
        },
        onSetEnteredValue() {
            const action = onSetEnteredValueAC();
            dispatch(action)
        },
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp