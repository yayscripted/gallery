import React, { Component } from 'react';
// import components


class Homescreen extends Component {

  goSubmit() {
      this.setState({

      });
    
  }

  goView() {
    this.setState({
        
    });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to the gallery!
        </h1>

        <button onClick={() => this.goSubmit()}>
          Click here to submit art!
        </button> 

        <button onClick={() => this.goView()}> 
          Click here to view art!
        </button>
      </div> )
  }
}

export default Homescreen;