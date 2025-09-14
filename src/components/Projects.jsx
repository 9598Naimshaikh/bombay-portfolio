import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const users_Data = [
    {
      "profile_img": "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      "name": "Jane Doe",
      "role": "Lead Product Designer",
      "skills": ["UI/UX", "Figma", "Sketch", "Prototyping", "Design Systems"]
    },
    {
      "profile_img": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
      "name": "Michael Chen",
      "role": "Creative & Modern Web Developer",
      "skills": ["HTML", "CSS", "JavaScript", "GSAP", "Three.js"]
    },
    {
      "profile_img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      "name": "Emily Liu",
      "role": "Data Scientist",
      "skills": ["Python", "Pandas", "Machine Learning", "SQL", "Tableau"]
    },
    {
      "profile_img": "https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJzJTIwcHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "Laura Costa",
      "role": "UX Researcher",
      "skills": ["User Interviews", "Usability Testing", "Wireframing", "Survey Design"]
    }
  ]

  return (
    <div className='w-full'>
      <section className='projects max-w-[800px] rounded-md px-4 py-4 mx-auto my-4 bg-blue-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {users_Data.map((user, key) => {
          return <ProjectCard key={key} profile_img={user.profile_img} name={user.name} role={user.role} skills={user.skills} />
        })}
      </section>
    </div>
  )
}

export default Projects
