import React from 'react'
import { FaSquarePhone, FaMapLocationDot } from "react-icons/fa6";
import { IoMailUnreadSharp } from "react-icons/io5";

const ContactHero = ({ theme }) => {
  return (
    <div className={`${theme ? "dark" : ""} mx-auto bg-white dark:bg-zinc-800 pt-10 px-12 `}>
      <div className='p-10 mx-10 space-y-7 dark:text-white'>
        <h1 className='text-3xl font-bold font-montserrat lg:text-4xl'>Let's Get <span className='text-orange-500'>In Touch</span></h1>
       {/*address,number,email section*/}
        <div className='grid md:grid-cols-3 p-5 space-y-5 md:space-y-0'>
          <div className='space-y-3 font-semibold font-sans'>
            <FaSquarePhone className='border p-1' size={30}/>
            <p >+234 905 724 7888</p>
          </div>
          <div  className='space-y-3 font-semibold font-sans'>
            <IoMailUnreadSharp className='border p-1' size={30} />
            <p>nwekeblessing06@gmail.com</p>
          </div>
          <div  className='space-y-3 font-semibold font-sans'>
            <FaMapLocationDot className='border p-1' size={30}/>
            <p>HolyFamily hostel,Amansea,Anambra State</p>
          </div>
        </div>
        {/*line*/}
        <hr/>
      </div>
    </div>
  )
}

export default ContactHero