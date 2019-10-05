import React from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { fontSize } from "@material-ui/system"




class Display extends React.Component{
     caroselButton = {
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
        outline: 0,
        border: "1px solid #ccc",
        margin: 10,
        borderRadius: 8,
        padding: 15,
        cursor: 'pointer',
    }

    chordStyling = {
        maxWidth: 150
    }
    render(){
        return(
            <div>

                <CarouselProvider 
                naturalSlideWidth={80}
                naturalSlideHeight={20}
                totalSlides={2}
                 > 
                <Slider>
                     <Slide index={0}>
                        <img  style={this.chordStyling} src="https://www.chordbank.com/media/a-hero-750.jpg" />
                    </Slide>
                     <Slide index={1}>
                        <img style={this.chordStyling} src="https://www.chordbank.com/media/a-hero-750.jpg" />
                    </Slide>
                </Slider>
                <ButtonBack style={this.caroselButton}>Back</ButtonBack> 
                <ButtonNext style={this.caroselButton}>Next</ButtonNext> 
                </CarouselProvider>
            </div>
        )
    }
}

export default Display