//import react <-- ONly need react
import React from 'react'
import axios from 'axios'




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "something is here"
    }
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    console.log("button has been clicked");
    axios.get('/strings')
    .then((response) => {
      this.setState({string: response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.clickHandle} >Click Me!</button>

        <div>{this.state.string}</div>
      </div>
    )

  }

}

//send get function to server
//connect button to get response

//receieve from string from server
//render that string to the page

//make a button and on that event
  //make a get request
  //receive the string response
  //take that response and store it in state.property


