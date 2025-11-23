import React from 'react'
import AboutMe from '../components/AboutMe'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
const About = ({theme, setTheme}) => {
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <AboutMe theme={theme} />
            <Footers theme={theme} />
        </>
    )
}

export default About