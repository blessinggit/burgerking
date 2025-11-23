import React from 'react'
import Navbar from '../components/Navbar'
import HeroPage from '../components/HeroPage'
import Footers from '../components/Footers'

const Home = ({theme,setTheme}) => {
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <HeroPage theme={theme}/>
    <Footers theme={theme} />
    </>
  )
}

export default Home