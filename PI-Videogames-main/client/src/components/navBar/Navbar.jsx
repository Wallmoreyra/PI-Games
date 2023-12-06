import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './navbar.styles.css';
// Por algun motivo las etiquetas link no estan funcionando
function Navbar() {
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        <a href="/"><img src="https://esports.as.com/2020/01/27/G2_Esportslogo_square.png?hash=0fa5532caa9899d8f151aaad2783b2416fb57a42" alt="logo" /></a>
        
      </div>
      <div className='navbar-cont-links'>
        <a className='navbar-link' href="/home">Home</a>
        <a className='navbar-link' href="/create">Formulario</a>
      </div>
    </div>
  )
}

// const Navbar = () => {
//   return (
//     <div className='navbar-cont'>
//       <div className='navbar-cont-img'>
//         <img src="https://esports.as.com/2020/01/27/G2_Esportslogo_square.png?hash=0fa5532caa9899d8f151aaad2783b2416fb57a42" alt="logo" />
//       </div>
//       <div className='navbar-cont-links'>
//         <Link to="/home">Home</Link>
//         <Link to="/create">Formulario</Link>
//       </div>
//     </div>
//   )
// }

export default Navbar;