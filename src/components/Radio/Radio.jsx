import React, { Component } from 'react';
import { connect } from "react-redux";
import './Radio.css';

class Radio extends Component {

  //send a status update to redux to keep track of which radio button was clicked
  handleRadioClick = (number) => {
    let action = {
      type: 'RADIO',
      payload: number
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className='radioGroup'>
      Poor
      < input className = 'radios' type = 'radio' name = 'group1'
      onClick={()=>this.handleRadioClick('1')} /> 1
      < input className = 'radios' type = 'radio' name = 'group1' 
      onClick={()=>this.handleRadioClick('2')} /> 2
      < input className = 'radios'type = 'radio' name = 'group1' 
      onClick={()=>this.handleRadioClick('3')} /> 3
      < input className = 'radios' type = 'radio' name = 'group1' 
      onClick={()=>this.handleRadioClick('4')} /> 4
      < input className = 'radios' type = 'radio' name = 'group1' 
      onClick={()=>this.handleRadioClick('5')} /> 5
      Well
      < br />
      </div>
     );
  }
}

export default connect()(Radio);