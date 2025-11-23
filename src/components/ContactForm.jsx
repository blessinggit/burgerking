import React from 'react'
import { IoIosPlay } from "react-icons/io";
const ContactForm = ({theme}) => {

  return (
    <div className='mx-auto'>
        <div className={`${theme ? "dark" : ""}  bg-white dark:bg-zinc-800 pb-7 px-12 `}>
        <div className='px-10 mx-10 mx-auto dark:text-white'>
            <h1 className='font-bold text-2xl lg:text-3xl font-poppins'>Or Fill Out The Form Below</h1>
            <form>
            <div className='grid md:grid-cols-2 gap-6  md:gap-20 pt-5'>
                <div className='flex flex-col'>
                    <label className='pb-2 font-bold font-epunda'>Full Name</label>
                    <input type="text" className='border p-2 rounded-md dark:bg-zinc-700 dark:text-white' placeholder='Enter your Full name' />
                </div>
                <div className='flex flex-col '>
                    <label className='pb-2 font-semibold font-epunda'>Phone Number</label>
                    <input type="text" className='border p-2 rounded-md dark:bg-zinc-700 dark:text-white' placeholder='Enter your Phone-Number' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 md:gap-20 pt-5'>
                <div className='flex flex-col'>
                    <label className='pb-2 font-semibold font-epunda'>Email</label>
                    <input type="text" className='border p-2 rounded-md dark:bg-zinc-700 dark:text-white' placeholder='Enter your Email-Address' />
                </div>
                <div className='flex flex-col'>
                    <label className='pb-2 font-semibold font-epunda'>Address</label>
                    <input type="text" className='border p-2 rounded-md dark:bg-zinc-700 dark:text-white' placeholder='Enter your Address' />
                </div>
            </div>
            <div className='flex flex-col pt-5'>
                <label className='pb-2 font-semibold font-epunda'>Inquiry Purpose</label>
                 <input type='text' className='border  p-7 rounded-md dark:bg-zinc-700 dark:text-white'/>
            </div>
           <div className='pt-5 flex right-{end} justify-end'>
            <button className='border-2 bg-orange-400 border-transparent font-montserrat px-11 md:px-15 flex gap-2 items-center text-end'>
                Submit form
                <IoIosPlay size={24}/>
            </button>
           </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ContactForm