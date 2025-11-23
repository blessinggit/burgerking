import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import Footers from '../components/Footers'
const Contact = ({theme, setTheme}) => {
    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <ContactHero theme={theme} />
            <ContactForm theme={theme}/>
            <Footers theme={theme} />
        </>
    )
}

export default Contact