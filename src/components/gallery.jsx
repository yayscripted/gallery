import React, { Component } from 'react';
// import components
import Imgdsc from "./image-description";
import './Homescreen.css';


class Gallery extends Component {

    render() {
        return (
        <img className="image"
      src={this.props.url}
      alt="new"
      />
        )
    }

}

export default Gallery;