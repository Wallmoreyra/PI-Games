import React, { useEffect } from 'react'
import SearchBar from '../../components/searchBar/SearchBar';
import Cards from '../../components/cards/Cards';

import './home.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../redux/actions/action';
function Home(){

  const dispatch = useDispatch()
  const allGames = useSelector(state => state.allGames)

  useEffect(() => {
    dispatch(getGames())
  }, [])

  // const arra = [
  //   {id:12, name:"algo01", img:"en algun lugar", rating:2, genres:["blabla", "algomas","uno mas"] },
  //   {id:13, name:"algo02", img:"en algun lugar", rating:5, genres:["blabla", "algomas"]},
  //   {id:14, name:"algo03", img:"en algun lugar", rating:1, genres:["blabla", "algomas"]},
  //   {id:15, name:"algo04", img:"en algun lugar", rating:3.4, genres:["blabla", "algomas"]}]


  return (
    
    <div>
      
      <SearchBar/>
      <h2>Home</h2>
      <div className='home-cont'>
        <Cards info={allGames} />
      </div>
    </div>

  )
}

export default Home