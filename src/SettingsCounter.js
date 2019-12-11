import React from 'react';
import SettingsScreen from './SettingsScreen';
import SettingsBtnsBlock from './settingsBtnsBlock'


class SettingsCounter extends React.Component {



  render = () => {
    return (
      <div className='wrapperSettingsCounter'>
        <SettingsScreen minValue={this.props.minValue}
          onMinValue={this.props.onMinValue}
          maxValue={this.props.maxValue}
          onMaxValue={this.props.onMaxValue}
          onClickCounterValue={this.props.onClickCounterValue}
          errorMax={this.props.errorMax}
          errorMin={this.props.errorMin}
          borderError={this.props.borderError}
          emptyValue={this.props.emptyValue}
        />
        <SettingsBtnsBlock set={this.props.set}
          onSet={this.props.onSet}
          isButtonSet={this.props.isButtonSet}
        />
      </div>
    );
  }
}
export default SettingsCounter;

