# simple-react-countdown

This react component allows you to add a number count down/up in your react project with ease.
The plugin is highly customizable making it easy to adapt it your project needs.

## Installation

To install this Component, run `npm install simple-react-countdown`.


## Usage

To use the component, In your react Application just do

```javascript
import React, { Component } from 'react';
//importing the component
import Countdown from 'simple-react-countdown';
class App extends Component {
  render() {
    return (
      <div className="App">
      //CountTo --> Decides what number will the coounter stop counting
      //time--> the time constraint for finishing the count
        <Countdown CountTo="10101" time="1000" />
      </div>
    );
  }
}
export default App;
```
Find the project npm registery at : https://www.npmjs.com/package/simple-react-countdown
