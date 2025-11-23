import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoIosClose,IoIosContact  } from "react-icons/io";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";


const Navbar = ({theme,setTheme}) => {
    const [nav, setNav] = useState(false);
    

     useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
  }, [nav]);
    return (
        <div className={`${theme ? "dark" : "" } max-w-[1640px] mx-auto p-5 bg-white dark:bg-zinc-800`}>
            <div className='max-w-[1200px] rounded-4xl bg-zinc-800 dark:bg-zinc-100 m-auto px-3 p-2 justify-between w-full flex items-center'>
                {/*Logo*/}
                <Link to='/'>
                    <div className=' flex gap-5 items-center '>
                        <h2 className='font-montserrat font-semibold text-lg dark:text-black text-white md:text-2xl'>PORT
                            <span className='text-orange-500'>FOLIO</span>
                        </h2>
                    </div>
                </Link>
                {/*NavLink desktop*/}
                <div className=''>
                    <ul className=' space-x-8 font-bold font-epunda text-lg ml-30 text-white dark:text-black hidden lg:flex'>
                        <Link to='/'>
                            <li className=' hover:text-white dark:hover:text-black border-b-2 rounded-2xl border-transparent hover:border-orange-500 hover:scale-115 duration-400 cursor-pointer'>Home</li>
                        </Link>
                        <Link to='/projects'>
                            <li className=' hover:text-white  dark:hover:text-black border-b-2 rounded-2xl border-transparent hover:border-orange-500 hover:scale-115  duration-400 cursor-pointer'>Projects</li>
                        </Link>
                        <Link to='/about'>
                            <li className=' hover:text-white  dark:hover:text-black border-b-2 rounded-2xl border-transparent hover:border-orange-500 hover:scale-115  duration-400 cursor-pointer'>About</li>
                        </Link>
                        <Link to={'/contact'}>
                            <li className=' hover:text-white  dark:hover:text-black border-b-2 rounded-2xl border-transparent hover:border-orange-500 hover:scale-115  duration-400 cursor-pointer'>Contact</li>
                        </Link>
                    </ul>
                </div>

                <div className='ml-25'>
                    <button onClick={() => setNav(!nav)} className='dark:text-zinc-800 text-zinc-100 lg:hidden cursor-pointer'>
                        {nav ? <IoIosClose size={30} /> : <IoMenu size={30} />}
                    </button>
                </div>
                {/*Button*/}
                {!nav ? 
                <div className='border-transparent border-2 mr-5 rounded-2xl'>
                    <div className='bg-white rounded-full'>
                        <button
                            onClick={() => {
                                setTheme(false);
                            }}
                            className='dark:bg-white  dark:text-black bg-black
                            p-2 rounded-2xl text-white'>
                            <IoSunnyOutline />
                        </button>
                        <button
                            onClick={() => {
                                setTheme(true);
                            }} className='dark:bg-black dark:text-white bg-white text-black p-2 rounded-2xl'>
                            <IoMoonSharp />
                        </button>
                    </div>
                </div> : null}
                {/*mobile menu
            -overlay*/}
               
                {/*NavLink mobile*/}
                <div className={nav ? 'fixed inset-0 z-15 top-23 bg-white dark:bg-zinc-800 w-screen overflow-hidden h-screen z-10 lg:hidden' : 'hidden '}>
                    <nav className=' flex text-center justify-center pt-8'>
                        <ul className='gap-10 text-black font-epunda font-bold dark:text-white '>
                            <Link to='/'>
                                <li onClick={() => setNav(!nav)} className='text-2xl pt-4  border-b-2 rounded-2xl
                                 border-transparent hover:border-orange-500 hover:scale-115 duration-400 cursor-pointer font-semibold flex gap-2'>
                                    <FaHome size={28} />
                                    Home
                                </li>
                            </Link>
                            <Link to='/projects'>
                                <li onClick={() => setNav(!nav)} className='text-2xl pt-7 border-b-2 rounded-2xl
                                 border-transparent hover:border-orange-500 hover:scale-115 duration-400 cursor-pointer font-semibold flex gap-2'>
                                    <MdWork size={28} />
                                    Projects
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li onClick={() => setNav(!nav)} className=' text-2xl pt-7 border-b-2 rounded-2xl 
                                border-transparent hover:border-orange-500 hover:scale-115 duration-400 cursor-pointer font-semibold flex gap-2'>
                                    <FaInfoCircle size={28} />
                                    About
                                </li>
                            </Link>
                            <Link to={'/contact'}>
                                <li onClick={() => setNav(!nav)} className=' text-2xl pt-7  border-b-2 rounded-2xl
                                 border-transparent hover:border-orange-500 hover:scale-115 duration-400 cursor-pointer font-semibold flex gap-2'>
                                    <IoIosContact size={28}/>
                                    Contact
                                </li>
                            </Link>
                           
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Navbar