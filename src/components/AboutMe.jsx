import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter, } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const AboutMe = ({ theme }) => {
    return (
        <div className={`${theme ? "dark" : ""} bg-white dark:bg-zinc-800 mx-auto p-10 `} >
            <div className='grid md:grid-cols-2 p-12 gap-10 shadow-2xl'>
                {/* About Me Content Here */}
                <div >
                    {/*heading*/}
                    <div className='inline-flex gap-5 items-center dark:text-white 
                 font-epunda text-3xl md:text-4xl font-bold mb-5'>
                        <IoPerson size={45} className='text-orange-500' />
                        <h1>About<span>-Me</span></h1>
                    </div>
                    {/*description*/}
                    <div className='leading-loose pt-3 font-poppins dark:text-white '>
                        I'm a 400-level Computer Science student at Nnamdi Azikiwe University (UNIZIK) with a strong passion for building modern, responsive, and user-friendly web applications. I enjoy turning ideas into interactive
                        digital experiences through clean code and creative design.
                        Currently, I’m deepening my skills in ASP.NET, React.js, TailwindCSS,
                        and JavaScript, focusing on both frontend interactivity and backend functionality.
                        My goal is to become a full-stack developer capable of creating scalable web solutions that solve real-world problems.
                        Beyond academics, I love exploring how technology shapes everyday life, collaborating on innovative projects, and continuously learning new tools and frameworks that push me to grow as a developer.
                    </div>
                    {/*socials*/}
                    <div className='inline-flex gap-4 place-items-center pt-10 text-3xl
                     lg:text-4xl text-zinc-800 dark:text-white  '>
                        <FaLinkedin className=' hover:scale-110 duration-300' />
                        <FaSquareFacebook className=' hover:scale-110 duration-300' />
                        <FaSquareXTwitter className=' hover:scale-110 duration-300'/>
                        <FaWhatsappSquare className=' hover:scale-110 duration-300'/>
                        <FaInstagramSquare className=' hover:scale-110 duration-300' />
                    </div>
                </div>
                <div className='shadow-2xl p-8 m-auto dark:text-white'>
                    <p className='font-epunda font-semibold text-xl '>What Drives Me?</p>
                    <div className='shadow-2xl p-4'>
                        <p className='leading-7'>“I believe technology should make life simpler and more connected, and I’m constantly learning how to build products that achieve that.”</p>
                    </div>
                    <p className='font-epunda font-semibold text-xl pt-7 '>My Current Focus?</p>
                    <div className='shadow-2xl p-4'>
                        <p className='leading-7.5'>“Building dynamic interfaces with React and TailwindCSS while learning how to structure efficient backend systems with ASP.NET.”</p>
                    </div>
                     <p className='font-epunda font-semibold text-xl pt-7 '>My Future Goal?</p>
                    <div className='shadow-2xl p-4'>
                        <p className='leading-7.5'>“To contribute to impactful software solutions, join collaborative developer communities, and grow into a professional full-stack engineer.”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe