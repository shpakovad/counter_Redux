import React from 'react';
import './App.css';
import Btns from './Btns';




class BtnsBlock extends React.Component {

  render = () => {
    return (
      <div className='btnsBlock'>
        <Btns reset={this.props.reset}
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
export default BtnsBlock;

