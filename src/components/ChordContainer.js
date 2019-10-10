import React from "react"
//material UI components for  styling
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import chordVar from "./variationData"
//audio
import Maj1 from "./sounds/Guitar_Chords_-_A_major_1.mp3"
import Maj2 from "./sounds/Guitar_Chords_-_B_major_1.mp3"
import Maj3 from "./sounds/Guitar_Chords_-_C_major_1.mp3"
import Maj4 from "./sounds/Guitar_Chords_-_D_major_1.mp3"
import Maj5 from "./sounds/Guitar_Chords_-_E_major_1.mp3"
import Maj6 from "./sounds/Guitar_Chords_-_F_major_1.mp3"
import Maj7 from "./sounds/Guitar_Chords_-_G_major_1.mp3"

import Min1 from "./sounds/Guitar_Chords_-_A_minor_1.mp3"
import Min2 from "./sounds/Guitar_Chords_-_B_minor_1.mp3"
import Min3 from "./sounds/Guitar_Chords_-_C_minor_1.mp3"
import Min4 from "./sounds/Guitar_Chords_-_D_minor_1.mp3"
import Min5 from "./sounds/Guitar_Chords_-_E_minor_1.mp3"
import Min6 from "./sounds/Guitar_Chords_-_F_minor_1.mp3"
import Min7 from "./sounds/Guitar_Chords_-_G_minor_1.mp3"
//array of imported src
const chordsArray = [Maj1, Maj2, Maj3, Maj4, Maj5, Maj6, Maj7]
//array of imported minor src
const minorChordsArray = [Min1, Min2, Min3, Min4, Min5, Min6, Min7]
//creat new array of HTML Audio elements from chordsArray with src
const audioArray = chordsArray.map(chord => new Audio(chord))
//creat new array of HTML Audio elements from minorChordsArray with src
const minorAudioArray  = minorChordsArray.map(chord => new Audio(chord))

class ChordContainer extends React.Component{
    state={
        play: true,
        type: false,
        chordVar: chordVar,
    }
    //**pause function not yet working** 

    //click plays the audio for chord  with id  taken from chordData that matches audioArray index
    //plays audio associated with current id of, depending on state of play,  handled thru this.state.type which changes 
    //when major/minor button is clicked
    handleSound = () => {
         if (this.state.play){
            audioArray[this.props.currentChord.id].play() 
         }
         else { 
            minorAudioArray[this.props.currentChord.id].play();
         }
    }

    //changes state of type and play, which dictates what audio is to be played and the text of the button 
    handleChordVariation = () => {
        this.setState({
            type: !this.state.type,
            play: !this.state.play
        })
    }

    render(){
        console.log(this.state.chordVar)
        return(
            <div key={this.props.currentChord.id } className={`card cardActive${this.props.currentChord.id}`}>
                <h2 className="chordTitle"> {!this.state.type ? this.props.currentChord.chord : this.state.chordVar[this.props.currentChord.id].chord } </h2>
                <img  style={{maxWidth: 230}} src={ (!this.state.type) ? this.props.currentChord.src : this.state.chordVar[this.props.currentChord.id].src }/>
                <ButtonGroup size="small" color="primary" variant="contained"> 
                    <Button  disabled={this.props.index == this.props.currentChord.id ? false : true} onClick={() => this.handleSound()}>
                        Play Chord
                    </Button>
                    <Button disabled={this.props.index == this.props.currentChord.id ? false : true}
                        onClick={ () => this.handleChordVariation() }>
                        {this.state.type ? "Major " : "Minor" }
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default ChordContainer