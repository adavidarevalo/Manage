import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import CarouselElement from './CarouselElements';
import { DataCarousel } from "../data"
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/Carousel.scss"

const CarouselContainer = () => {
    return(
        <section>
            <h2 className="TitleCarousel">What they've said</h2>
            <Carousel>
                {DataCarousel.map(item => <CarouselElement item={item}/>)}
            </Carousel>
        </section>
    )
}

export default CarouselContainer 