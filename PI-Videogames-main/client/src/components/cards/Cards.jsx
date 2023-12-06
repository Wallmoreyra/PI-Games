import React from 'react'
import Card from '../card/Card'

import './cards.styles.css';

const Cards = ({info}) => {
  
  return (
    <div className='cards-cont'>
      {
        console.log(info)
        //info.map(p => <Card key={p.id} name={p.name} img={p.img} rating={p.rating} genres={p.genres} />)
      }
    </div>
  )
}
//id:12, name:"algo01", img:"en algun lugar", rating:2, genres:["blabla", "algomas"]
export default Cards