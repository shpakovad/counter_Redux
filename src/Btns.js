import React from 'react';
import './App.css';



class Btns extends React.Component {



  render = () => {
    return (
      <div className='btns'>
        {
          this.props.set &&
           <button className='set' onClick={this.props.onSet} disabled={this.props.isButtonSet}> {this.props.set}   </button>
        }
        {this.props.inc && this.props.reset && <div>
          <button onClick={this.props.onInc} disabled={this.props.isButtonInc}
            className='inc disabled'> {this.props.inc} </button>

          <button className='reset' onClick={this.props.onReset}  disabled={this.props.isButtonReset}
          > {this.props.reset} </button>
        </div>
        }
      </div>
    );
  }
}
export default Btns;


