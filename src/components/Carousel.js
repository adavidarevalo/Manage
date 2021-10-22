import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const CarouselContainer = () => {
    return(
        <section>
            <h2>What they've said</h2>
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </section>
    )
}

export default CarouselContainer 