//import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/navBar/Navbar";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



function App() {
  return (

    <BrowserRouter>
    <div>
          <Route path={["/create", "/home", "/details:id"]} render = {() => <Navbar/>}/>
          {/* <Route path={"*"} component={Navbar}/> */}
          <Route exact path={"/"} component={ Landing }/>
          <Route path="/create" component={ Create }/>
          <Route path="/home" component={ Home }/>
          <Route path="/details:id" component={ Detail }/>
    </div>
    </BrowserRouter>

    // <div className="App">
      
    //   <BrowserRouter>
    //       <Route path={["/create", "/home", "/details:id"]} render = {() => <Navbar/>}/>
    //     <Switch>
    //       <Route exact path={"/"} component={ Landing }/>
    //       <Route path="/create" component={ Create }/>
    //       <Route path="/home" component={ Home }/>
    //       <Route path="/details:id" component={ Detail }/>
    //     </Switch>
    //   </BrowserRouter>
    // </div>
    // <BrowserRouter>
    // <div>
    //   {/* <Route path={"*"} component={ Navbar }/> */}
    //   
    //   {/* 
    //    */}
    // </div>
    // </BrowserRouter>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


export default App;
