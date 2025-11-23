import React from 'react'
import { projectData } from '../data.js'
import { skills } from '../data.js'
const ProjectsList = ({ theme }) => {
    return (
        <div className={`${theme ? "dark" : ""} bg-white mx-auto dark:bg-zinc-800  p-10 `}>
            <h1 className='dark:text-white text-center font-epunda font-bold 
            text-3xl lg:text-5xl pt-5'> Recent Projects</h1>
            <hr className='w-40 md:w-45 lg:w-55 border-t-3 pb-8 border-orange-500 my-2 flex items-center px-4 mx-auto' />
            <div className='grid lg:grid-cols-2 p-12 gap-15 shadow-2xl'>
                {projectData.map((project) => (
                    <div className='shadow-2xl dark:bg-zinc-800 ' key={project.id}>
                        <div className=' h-[200px]w-[200px] overflow-hidden'>
                        <img className='w-full h-full inset-0 object-cover rounded-b-4xl' src={project.image} alt={project.title} />
                      </div>
                        <div className='space-y-4 pt-4 text-center '>
                            <h2 className='font-montserrat font-bold text-xl leading-tight dark:text-white'>{project.title}</h2>
                            <p className=' text-zinc-600 font-serif leading-7 text-md dark:text-white'>{project.description}</p>
                            <p className='inline-flex gap-3 py-2 mx-auto font-semibold text-lg'> 
                                {project.skills.map((skillId) => {
                                    const skill = skills.find((s) => s.id === skillId);
                                    return skill ? (
                                        <img key={skill.id} src={skill.image} className='w-10 h-7 rounded-full ' />
                                    ) : null;
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList