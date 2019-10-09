import React from 'react';
import logo from './logo.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"

import  Header from "./components/Header"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import MainChart from "./components/MainChart"
import Chords from "./components/Chords"
import Display from "./components/Display"

import ChordContainer from "./components/ChordContainer"
import chordData from "./components/chordData"


import './App.css';

class App extends React.Component {
  state = {
    showDisplay: false,
    chords: chordData.chordData,
    currentChord: chordData.chordData[0],
    disabled: true,
    transform:  ""
  }

//   displayChord = (e) =>{
// console.log(e.target)
//     this.setState({
//       showDisplay: true,
//     })
//   }
// translateX = () => {
//   let transform = this.transform.slice(11, 16)
//   console.log(transform)
//   return transform
// }

handleClickNext = () => {
  const newIndex = this.state.currentChord.id + 1 
  const checkIndex = this.state.currentChord.id + 2

  this.setState(prevState => ({
    currentChord: chordData.chordData[newIndex],
    transform: `translateX(-${this.state.currentChord.number * 100}%)`
  }))
}



handleClickPrev = () => {
  const newIndex = this.state.currentChord.id - 1 
  const checkIndex = this.state.currentChord.id - 2
  
  this.setState(prevState => ({
    currentChord: chordData.chordData[newIndex],
    transform: `translateX(-${this.state.currentChord.percent - 100}%)`

  }))
}



  render(){ 
    return (
      <div className="App">
        <ButtonGroup > 
          <Button onClick={() => {this.handleClickPrev()} } disabled={this.state.currentChord.id === 0}> Previous Chord </Button >
          <Button onClick={() => this.handleClickNext()}  disabled={this.state.currentChord.id === 6}> Next Chord </Button>
        </ButtonGroup>
        <div className="chordSlider">
          <div className="chordSliderWrapper" style={{transform: this.state.transform }}>
          {this.state.chords.map(chord => (
                 <ChordContainer  key={chord.id} currentChord={chord} />
          ))}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
