// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: true
     }, () => console.log(this.state.hasBeenClicked))
  };
  //this added allBack function above makes sure that state is updated
  //the syntax of line 18?? why, how would I write it as a separate callback function 
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;