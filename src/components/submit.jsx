import React, { Component } from 'react';
// import components
import Imgdsc from "./image-description";
import './Homescreen.css';

//https://www.w3schools.com/w3css/img_lights.jpg


class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
    this.state = { desc: '' };
  }
  myChangeHandler = (event) => {
    this.setState({url: event.target.value});
  }
  myChangeHandler1 = (event) => {
    this.setState({desc: event.target.value});
  }
  render() {
    return (
      <form>
      <img src={this.state.url}/>
      <input className="input" placeholder="image url"
        onChange={this.myChangeHandler}
      />
      <p>{this.state.desc}</p>
    <input className="input" placeholder="description" onChange={this.myChangeHandler1}
      />
      </form>
    );
  }
}


export default Submit;