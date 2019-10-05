import React from "react";
import Chords from "./Chords";

class MainChart extends React.Component{
    render(){
        return(
            <ul className="chordsList">
               {this.props.chords.map((chord, i) => (
                   <Chords 
                       chord={chord.chord}
                       id={chord.id}
                       key={i}
                       displayChord={this.props.displayChord}
                   /> 
               ))}
            </ul >
        )
    }
}

export default MainChart 