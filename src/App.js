import React from 'react';

import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import ChordContainer from "./components/ChordContainer"
import chordData from "./components/chordData"


import './App.css';

class App extends React.Component {
  state = {
    showDisplay: false,
    chords: chordData.chordData,
    currentChord: chordData.chordData[0],
    disabled: true,
    transform:  "",
    index: 0
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
  console.log(this.state.index)

  this.setState(prevState => ({
    currentChord: chordData.chordData[newIndex],
    transform: `translateX(-${(this.state.currentChord.id + 1 )* 100}%)`,
    index: prevState.index  + 1
  }))
}

handleClickPrev = () => {
  const newIndex = this.state.currentChord.id - 1 
 
  this.setState(prevState => ({
    currentChord: chordData.chordData[newIndex],
    transform: `translateX(-${(this.state.currentChord.id * 100) - 100}%)`,
    index: prevState.index  - 1
  }))
}

  render(){ 
    return (
      <div className="App">
        <h2 className="title"> Major/Minor Guitar Chords </h2>
        <div className="nextPrevBtn">
          <ButtonGroup size="large" color="primary" variant="contained" > 
            <Button onClick={() => {this.handleClickPrev()} } disabled={this.state.currentChord.id === 0}> Previous Chord </Button >
            <Button onClick={() => this.handleClickNext()}  disabled={this.state.currentChord.id === 6}> Next Chord </Button>
          </ButtonGroup>
        </div>
        <div className={`chordSlider activeSlide activeSlide-${this.state.currentChord.id}`}>
          <div className="chordSliderWrapper" style={{transform: this.state.transform }}>
          {this.state.chords.map(chord => (
                 <ChordContainer  key={chord.id} currentChord={chord} index={this.state.index} />
          ))}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
