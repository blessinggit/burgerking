import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsList from '../components/ProjectsList'
import Footers from '../components/Footers'
const Projects = ({theme, setTheme}) => {
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <ProjectsList theme={theme} />
    <Footers theme={theme} />
    </>
  )
}

export default Projects