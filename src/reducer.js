export const ON_SET = 'ON_SET';
export const ON_MINVALUE = 'ON_MINVALUE';
export const ON_MAXVALUE = 'ON_MAXVALUE';
export const BUTTON_INC = 'BUTTON_INC';
export const BUTTON_RESET = 'BUTTON_RESET';
export const BUTTON_SET = 'BUTTON_SET';
export const NUMBER_COLOR = 'NUMBER_COLOR';
export const ERROR_MAX = 'ERROR_MAX';
export const ERROR_MIN = 'ERROR_MIN';
export const INCREMENT = 'INCREMENT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const INCORRECT_VALUE_COUNTER = 'INCORRECT_VALUE_COUNTER';
export const ENTERED_VALUE_COUNTER = 'ENTERED_VALUE_COUNTER';

const initialState = {
    maxValue: 0,
    minValue: 0,
    counter: "Enter value and press 'Set'",
    isButtonInc: false,
    numberNewColor: false,
    errorMax: false,
    errorMin: false,
    isButtonSet: true,
    isButtonReset: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_SET:
            return {
                ...state,
                isButtonSet: action.isButtonSet
            };
        case BUTTON_INC:
            return {
                ...state,
                isButtonInc: action.isButtonInc
            };
        case BUTTON_RESET:
            return {
                ...state,
                isButtonReset: action.isButtonReset
            };
        case ON_SET:
            return {
                ...state,
                counter: action.newMinValue,
            };
        case ON_MINVALUE:
            return {
                ...state,
                minValue: action.setMinValue
            };
        case ON_MAXVALUE:
            return {
                ...state,
                maxValue: action.setMaxValue
            };
        case NUMBER_COLOR:
            return {
                ...state,
                numberNewColor: action.numberNewColor
            };
        case ERROR_MAX:
            return {
                ...state,
                errorMax: action.errorMax
            };
        case ERROR_MIN:
            return {
                ...state,
                errorMin: action.errorMin
            };
        case INCREMENT:
            return {
                ...state,
                counter: action.counter+1,
            };
        case RESET_COUNTER:
            return {
                ...state,
                counter: action.resetCounterValue
            };
        case INCORRECT_VALUE_COUNTER:
            return {
                ...state,
                counter: "Incorrect Value!"
            };
        case ENTERED_VALUE_COUNTER:
            return {
                ...state,
                counter: "Enter value and press 'Set'"
            };
        default:
            return state
    }
};

export const onIsButtonSetAC = (isButtonSet) => {
    return {type: BUTTON_SET, isButtonSet}
};
export const onIsButtonIncAC = (isButtonInc) => {
    return {type: BUTTON_INC, isButtonInc}
};
export const onIsButtonResetAC = (isButtonReset) => {
    return {type: BUTTON_RESET, isButtonReset}
};
export const onSetReduxAC = (newMinValue, isButtonInc, isButtonReset, isButtonSet) => {
    return {type: ON_SET, newMinValue, isButtonInc, isButtonReset, isButtonSet}
};
export const onMinValueReduxAC = (setMinValue) => {
    return {type: ON_MINVALUE, setMinValue}
};
export const onMaxValueReduxAC = (setMaxValue) => {
    return {type: ON_MAXVALUE, setMaxValue}
};
export const setNumberNewColorAC = (numberNewColor) => {
    return {type: NUMBER_COLOR, numberNewColor}
};
export const setErrorMaxAC = (errorMax) => {
    return {type: ERROR_MAX, errorMax}
};
export const setErrorMinAC = (errorMin) => {
    return {type: ERROR_MIN, errorMin}
};
export const setIncrementAC = (counter) => {
    return {type: INCREMENT,counter}
};
export const onResetCounterAC = (resetCounterValue) => {
    return {type: RESET_COUNTER, resetCounterValue}
};
export const onSetIncorrectValueAC = () => {
    return {type: INCORRECT_VALUE_COUNTER}
};
export const onSetEnteredValueAC = () => {
    return {type: ENTERED_VALUE_COUNTER}
};

export default (reducer)