import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useState } from 'react';

const App = () => {
  const[theme,setTheme] = useState(false);
  return (
    <div className={`${theme ? "dark" : "" } bg-white dark:bg-zinc-800 grid place-items-center
     h-screen w-full`}>
      <div className='bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl'>
        <button 
        onClick={()=>{
          setTheme(false);
        }}
        className='bg-transparent dark:hover:bg-zinc-100/60 dark:text-white
         p-3 hover:bg-zinc-200 rounded-lg text-black'>
          <IoSunnyOutline />
        </button>
        <button
         onClick={()=>{
          setTheme(true);
        }} className='bg-transparent p-3  dark:hover:bg-zinc-100/60 dark:text-white hover:bg-zinc-200 rounded-lg text-black'>
          <IoMoonSharp />
        </button>
      </div>
    </div>
  )
}

export default App