import React from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import mypicture from "../assets/mypicture.webp"
import { motion } from "framer-motion";
const HeroPage = ({ theme }) => {
    return (
        <div className={`${theme ? "dark" : ""} mx-auto bg-white h-[870px] md:h-[650px] dark:bg-zinc-800`}>
            <div
               
                className='grid md:grid-cols-2 gap-4 items-center
         px-6 md:px-20 lg:px-32 py-13 '>

                {/*Text area*/}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.6,
                    }}
                    className='space-y-6 py-10 text-center dark:text-white sm:text-left'>
                    <p className='font-montserrat font-bold text-3xl md:text-6xl'>Hello</p>
                    <p className='font-montserrat font-semibold text-2xl md:text-3xl'>I'm
                        <span className='text-orange-500 pl-3 font-epunda font-bold
                     text-3xl md:text-5xl'>Blessing</span>
                    </p>
                    <p className='font-poppins font-semibold text-3xl lg:text-4xl '>A Frontend Developer</p>

                    {/*buttons*/}
                    <div className='pt-10 space-x-10 font-montserrat font-semibold dark:text-white'>
                        <Link to={'/projects'} className='border-2 p-1 inline-flex gap-2  border-orange-500
                         bg-orange-600 rounded-2xl duration-300 hover:bg-transparent'>
                            <FaEye size={25} />
                            View Projects
                        </Link>
                        <Link to={'/contact'} className='border-2 p-1 inline-flex gap-2 border-orange-500
                        hover:bg-orange-600 duration-300 rounded-2xl bg-transparent'>
                            <IoIosContact size={25} />
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
                {/*picture area*/}
                <motion.div 
                 initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.7,
                    }}
                className='relative mx-auto top-15 sm:top-0'>
                    {/*picture*/}
                    <div className='relative z-10 '>
                        <img src={mypicture} className='block w-64  sm:w-80 md:w-md h-auto object-cover bg-transparent rounded-full' alt='' />
                    </div>
                    <div className='absolute inset-0 '>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[30rem] sm:w-[34rem] md:w-[40rem] aspect-square rounded-full opacity-90"
                            style={{
                                background:
                                    "radial-gradient(closest-side, rgba(255,115,0,0.35), transparent 90%)",
                            }}>

                        </div>
                    </div>


                </motion.div>
            </div>
        </div>
    )
}

export default HeroPage