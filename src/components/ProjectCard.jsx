import React from 'react'

const ProjectCard = (props) => {
    
    return (
        <div className="project_1 p-1 w-full h-60 border-1 border-blue-200 bg-white/20 backdrop-blur-xs rounded-4xl hover:transform-3d hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 justify-center">
            <div className='flex items-center justify-center gap-2'>
                <div className="profile w-[30px] h-[30px] rounded-full bg-blue-400 border-1 border-blue-200 flex items-center">
                    <img src={props.profile_img} alt="Illustrations by my fav AarzooAly" className="w-full h-full object-cover overflow-hidden rounded-4xl" />
                </div>
                <h3 className='text-xl font-extrabold'>Hi, I'm {props.name}</h3>
            </div>
            <p className='text-center'>{props.role}</p>
            <div className="skills flex items-center justify-center gap-2 flex-wrap">
                <p className='bg-pink-300 font-medium px-2 py-[0.8px] rounded-full text-xs border-1 border-blue-300'>{props.skills[0]}</p>
                <p className='bg-blue-300 font-medium px-2 py-[0.8px] rounded-full text-xs border-1 border-blue-300'>{props.skills[1]}</p>
                <p className='bg-yellow-400 font-medium px-2 py-[0.8px] rounded-full text-xs border-1 border-blue-300'>{props.skills[2]}</p>
                <p className='bg-green-400 font-medium px-2 py-[0.8px] rounded-full text-xs border-1 border-blue-300'>{props.skills[3]}</p>
                <p className='bg-blue-300 font-medium px-2 py-[0.8px] rounded-full text-xs border-1 border-blue-300'>{props.skills[4]}</p>

            </div>
            <button className='bg-blue-500/50 backdrop-blur-md border-1 border-blue-200 font-medium cursor-pointer px-4 py-2 rounded-full '>View Github Profile</button>
        </div>
    )
}

export default ProjectCard
