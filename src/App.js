import React from 'react';
import './App.css';
import QuoteBox from './QuoteBox';

class App extends React.Component {

  constructor() {
    super();
    this.state = ({
      color : "purple"
    });
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  // Change the color of the app
  handleColorChange(color) {
    this.setState({
      color: color
    });
  }

  render(){
    return (
      <div id="app" className={this.state.color}>
        <QuoteBox onChangeAppColor={this.handleColorChange} color={this.state.color}/>
      </div>
    );
  } 
}

export default App;
