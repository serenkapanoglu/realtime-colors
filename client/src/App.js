import React from 'react'
import { useEffect, useState } from 'react';
import Palette from './components/Palette'
import {init, subscribe} from './socketApi';
import './App.css'
function App() {

  const [activeColor, setActiveColor] = useState('#cccc');

  useEffect(()=>{
    init();

    subscribe((color)=>{
      setActiveColor(color);
    });
  },[])


  return (
    <div className='App' style={{backgroundColor:activeColor}}>
      <Palette activeColor={activeColor}/>
    </div>
  )
}

export default App
