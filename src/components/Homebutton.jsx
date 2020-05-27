import React, { Component } from 'react';
// import components
import Homescreen from "./Homescreen";
import Submit from "./submit";
import Gallery from "./gallery";


class Homebutton extends Component {
  goHome() {
    this.setState({
      // showHomescreen: true,
      // showGallery: false,
      // showSubmit: false
      //props.forceUpdate();
    });
  
}
  render() {
    return (
      <div className="btnPsn">
        <button className="hmbutton" onClick={() => this.goHome()}>
            <img className="hmbutton" src="https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_960_720.png"/>
        </button>
        
      </div> )
    }
}

export default Homebutton;