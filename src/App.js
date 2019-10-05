import React from 'react';
import logo from './logo.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"

import  Header from "./components/Header"
import Button from "@material-ui/core/Button"
import MainChart from "./components/MainChart"
import Chords from "./components/Chords"
import Display from "./components/Display"
import './App.css';


class App extends React.Component {
  state = {
    chords: [
      {
      chord: "A",
      id: 0
    },
      {
      chord: "B",
      id: 1
    },
      {
      chord: "C",
      id: 2
    },
      {
      chord: "D",
      id: 3
    },
      {
      chord: "E",
      id: 4
    },
      {
      chord: "F",
      id: 5
    },
      {
      chord: "g",
      id: 6
    },
    ],
    showDisplay: false
  }

  displayChord = (e) =>{
console.log(e.target)
    this.setState({
      showDisplay: true,
    })
  }

  render(){ 
  return (
    <div className="App">
      <Header />
      <MainChart displayChord={this.displayChord} chords={this.state.chords} / > 
     {this.state.showDisplay && <Display  intro={this.state.intro} removeTitle={this.removeTitle}/> }

    </div>

  );
  }
}

export default App;
