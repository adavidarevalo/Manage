import React from 'react'

const CarouselElement = ({item}) => {
  const {image, name, comentary} = item
  return(
    <div className="CarouselElement">
        <img src={image} alt="Person"/>
      <div>
        <h4>{name}</h4>
        <p>"{comentary}"</p>
      </div>
    </div>
  )
}

export default CarouselElement