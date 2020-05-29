import React, { Component } from 'react';
// import components
import Submit from "./submit";
import Gallery from "./gallery";
import './Homescreen.css';

class Homescreen extends Component {

  constructor() {
    super();
    this.state = {
      showGallery: false,
      showSubmit: false
    };
  }

  goSubmit() {
      this.setState({
        showSubmit: true,
        showGallery: false
      });
    
  }

  // goView() {
  //   this.setState({
  //     showGallery: true,
  //     showSubmit: false
  //       //renders gallery component multiple times 
  //   });
  // }

  render() {

    return (
      <div>
        <h1 className="title">
          Welcome to the gallery!
        </h1>

        <button className="subbtn" onClick={() => this.goSubmit()}>
          Click here to submit art!
        </button> 

        {this.state.showGallery && (<Gallery />)}
        {this.state.showSubmit && (<Submit />)}
      </div> )
  }
}

export default Homescreen;