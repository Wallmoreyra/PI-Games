import React from 'react'
import './card.styles.css';

const Card = ({name, img, rating, genres}) => {
  console.log(name)
  console.log(img)
  console.log(rating)
  console.log(genres)
  return (
    <div className='card-cont'>
      <div className='card-cont-title'>
        <h2>{name}</h2>
      </div>
      <div className='card-cont-img'>
        <img src={img} alt="game_img" />
      </div>
      <div className='card-cont-info'>
        <label>Rating: </label>
        <span>{rating}</span>
      </div>
      <div className='card-cont-info'>
        <label>Generos: </label>
        <span>{genres.join(', ')}</span>
      </div>
    </div>
  )
}
//<Card key={p.id} name={p.name} img={p.img} rating={p.rating} genres={p.genres}
export default Card