import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state={
      currentCount:true
    };
  }
  componentDidMount(){
    var countTo = parseInt(this.props.CountTo);
    var time = parseInt(this.props.time);
    //Time interval calculated based user input
    var timerInterval = Math.round(countTo/time);
    //Initial counter
    var counter = 0;
    //Checking if timerInterval is less than zero or not
    var dividedByTimeResult = timerInterval<1?1:timerInterval;
    //Pertaining the current scope
    var selfe = this;
    //Timer function
    var tickTimer =setInterval(function(){
      var requiredStep =(counter+parseInt(dividedByTimeResult*timerInterval))<countTo?parseInt((countTo/time)*timerInterval):parseInt(countTo-counter);
      counter>=countTo?clearInterval(tickTimer):counter = counter+requiredStep;
      if (selfe.refs.myRef) {
        selfe.setState({currentCount:counter});
      }
    }, timerInterval);
  }
  render() {

    return (
      <span ref="simple-react-counter">{this.state.currentCount}</span>
    );
  }
}


export default Counter;
