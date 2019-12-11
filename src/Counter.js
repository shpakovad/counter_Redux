import React from 'react';
import './App.css';
import Screen from './Screen';
import BtnsBlock from './BtnsBlock';



class Counter extends React.Component {

  render = () => {
    return (
      <div className='wrapperCounter'>
        <Screen counter={this.props.counter}
          numberNewColor={this.props.numberNewColor}
          errorMax={this.props.errorMax}
          errorMin={this.props.errorMin}
        />
        <BtnsBlock reset={this.props.reset}
          inc={this.props.inc}
          onInc={this.props.onInc}
          onReset={this.props.onReset}
          isButtonInc={this.props.isButtonInc}
          counter={this.props.counter}
          isButtonReset={this.props.isButtonReset}
        />
      </div>
    );
  }
}
export default Counter;

