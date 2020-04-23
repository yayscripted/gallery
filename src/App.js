import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homescreen from './components/Homescreen';
import Homebutton from './components/Homebutton';

function App() {
  return (
      <div>
          <Homescreen />
          <Homebutton />
      </div>
  );
}
export default App;