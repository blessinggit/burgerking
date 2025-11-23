import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter, } from "react-icons/fa6";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footers = ({ theme }) => {
    return (
        <div>
            <div className={`${theme ? "dark" : ""} dark:bg-white bg-zinc-800 text-center p-6
          font-semibold text-black dark:text-white`}>
                <div className=' bg-white dark:bg-zinc-800 shadow-2xl'>
                    <div className='grid md:grid-cols-2  gap-8 p-9 '>
                        {/*text area*/}
                        <div >
                            <h1 className='font-montserrat font-bold text-xl lg:text-2xl'>Blessing-<span className='text-orange-500'>Frontend Developer</span></h1>
                            <p className='pt-4 leading-loose text-md'>Transforming ideas into beautiful digital experiences.</p>
                            {/*social icons*/}
                            <div className='inline-flex gap-4 place-items-center text-3xl
                                    lg:text-4xl text-zinc-800 dark:text-white  '>
                                <FaLinkedin className=' hover:scale-110 duration-300' size={23} />
                                <FaSquareFacebook className=' hover:scale-110 duration-300' size={23} />
                                <FaSquareXTwitter className=' hover:scale-110 duration-300' size={23} />
                                <FaWhatsappSquare className=' hover:scale-110 duration-300' size={23} />
                                <FaInstagramSquare className=' hover:scale-110 duration-300' size={23} />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            {/*pages*/}
                            <div>
                                <h1 className=' inline-flex font-bold font-poppins text-xl border-b-2 border-orange-500 '>Pages</h1>
                                <ul className='pt-3 font-semibold text-md font-epunda'>
                                    <Link to={'/'}>
                                    <li>Home</li>
                                    </Link>
                                    <Link to={'/projects'}>
                                    <li className='pt-3'>Projects</li>
                                    </Link>
                                    <Link to={'/about'}>
                                     <li  className='pt-3'>About</li>
                                     </Link>
                                    <Link to={'/contact'}>
                                    <li  className='pt-3'>Contact</li>
                                    </Link>
                                   
                                </ul>
                            </div>
                            {/*Tech used*/}
                            <div>
                                <h1 className=' inline-flex font-bold font-poppins text-xl border-b-2 border-orange-500 '>Tech Stack</h1>
                                <ul className='pt-3 space-y-3 font-semibold text-md font-epunda'>

                                    <li>React.js</li>
                                    <li>TailwindCSS</li>
                                    <li>JavaScript</li>
                                    <li>HTML & CSS</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p>© 2024 Blessing — Portfolio Website</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Footers