import React from "react"
//material UI components for  styling
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
//audio
import Maj1 from "./sounds/Guitar_Chords_-_A_major_1.mp3"
import Maj2 from "./sounds/Guitar_Chords_-_B_major_1.mp3"
import Maj3 from "./sounds/Guitar_Chords_-_C_major_1.mp3"
import Maj4 from "./sounds/Guitar_Chords_-_D_major_1.mp3"
import Maj5 from "./sounds/Guitar_Chords_-_E_major_1.mp3"
import Maj6 from "./sounds/Guitar_Chords_-_F_major_1.mp3"
import Maj7 from "./sounds/Guitar_Chords_-_G_major_1.mp3"
//array of imported src
const chordsArray = [Maj1, Maj2, Maj3, Maj4, Maj5, Maj6, Maj7]
//creat new array of HTML Audio elements from chordsArray with src
const audioArray = chordsArray.map(chord => new Audio(chord))

class ChordContainer extends React.Component{

    state={
        play: true 
    }
    //pause function not yet working
    //click plays the audio for chord  with id  taken from chordData that matches audioArray index
    handleSound = () => {
        this.setState({
            play: false,
        })
        audioArray[this.props.currentChord.id].play() 
    }

    render(){
        return(
            <div key={this.props.currentChord.id } className="card">
                <h2 className="chordTitle"> {this.props.currentChord.chord} </h2>
                <img  style={{maxWidth: 230}} src={this.props.currentChord.src}/>
                <ButtonGroup size="small" color="primary" variant="contained"> 
                    <Button onClick={() => this.handleSound()}> Play Chord </Button>
                    <Button> Major </Button>
                    <Button> Minor </Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default ChordContainer