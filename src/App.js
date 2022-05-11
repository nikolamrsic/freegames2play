


import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './Components/GamePage/GamePage';
import Navbar from './Components/Nav-bar/Navbar';
import ErrorPage from './Components/404Page/ErrorPage';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import StartPage from './Components/StartPage/StartPage';
function App() {


  return (

    <div className="App  bg-gray-900 h-screen">

     
      <Routes>
        
        <Route exact='true' path='/games' element={<Home/>} />
        <Route exact='true' path='/home' element={<StartPage/>} />
        <Route path='/gameinfo/:id' element={<GamePage />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
      
    </div>

  );
}

export default App;
