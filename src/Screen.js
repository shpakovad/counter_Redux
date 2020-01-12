import React from 'react';
import './App.css';


class Screen extends React.Component {

    render = () => {
        let classForNumber = (this.props.numberNewColor === true) ? 'numberNewColor' : ((this.props.errorMax === true) || (this.props.errorMin === true)) ? 'errorText' : 'number';
        return (
            <div className='screen'>
                <div className={classForNumber}> {this.props.counter}
                </div>
            </div>
        );
    }
}

export default Screen;
