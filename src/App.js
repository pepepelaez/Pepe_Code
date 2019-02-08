import React, { Component } from 'react';
import './App.css';

var wisdoms= [
"Semper Ubi Sub Ubi. (Always wear underwear.)",
"Floss your teeth every day.",
  "You will pay for your sins. If you have already paid, please disregard this message.",
  "Today is a day for firm decisions!! Or is it?",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm.",
"Count your age by friends, not years. Count your life by smiles, not tears",
"Never laugh at live dragons.",
"The secret of life, though, is to fall seven times and to get up eight times.",
"Any fool can know. The point is to understand.",
"Let no man pull you so low as to hate him."
]

class App extends Component {
constructor(props) {
super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
setInterval(this.setRandomWisdom,15000);
  }

setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.setState({
      wisdom: wisdoms[index]
    });
  }

addWisdom() {
wisdoms.push(prompt("What new wisdom do you offer?"));
}

removeCurrentWisdom() {
var index = wisdoms.index0f(this.state.wisdom);
wisdoms.splice(index, 1);
}

 

  render() {
    return  (
      <div className="App">
      {this.state.wisdom}
<button className="more" onClick={this.setRandomWisdom}>Another</button>
<button className="new-wisdom" onClick={this.addWisdom}>New_Wisdom</button>
      </div>
    );
  }
}

export default App;
