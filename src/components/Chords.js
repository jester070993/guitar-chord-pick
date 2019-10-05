import React from "react"
import Button from "@material-ui/core/Button"

class Chords extends React.Component{
    render(){
        return(
            <div className="chord" onClick={(e) => this.props.displayChord(e)} >
                <Button   variant="outlined"> {this.props.chord} </Button>
            </div>
        )
    }
}

export default Chords 