import React, { Component } from 'react';
// import components
import Imgdsc from "./image-description";

//https://www.w3schools.com/w3css/img_lights.jpg


class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
  }
  myChangeHandler = (event) => {
    this.setState({url: event.target.value});
  }
  render() {
    return (
      <form>
      <img src={this.state.url}/>
      <input placeholder="image url"
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}


export default Submit;