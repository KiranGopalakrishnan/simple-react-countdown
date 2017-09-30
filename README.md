# simple-react-countdown

This react component allows you to add a number count down/up in your react project with ease.
The plugin is highly customizable making it easy to adapt it your project needs.

## Installation

To install this Component, run `npm install simple-react-counter`.


## Usage

To use the component, In your react Application just do

```javascript
import React, { Component } from 'react';
//importing the component
import Counter from 'simple-react-counter';
class App extends Component {
  render() {
    return (
      <div className="App">
      //CountTo --> Decides what number will the counter stop counting
      //time--> the time constraint for finishing the count
        <Counter CountTo="10101" time="1000" />
      </div>
    );
  }
}
export default App;
```
Find the project npm registery at : https://www.npmjs.com/package/simple-react-counter
