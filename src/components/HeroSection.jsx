import React from 'react'

const HeroSection = (props) => {
    const { username } = props;


    return (
        <div className='w-full'>
            <section className='max-w-[800px] rounded-md px-4 py-4 mx-auto my-4 bg-blue-500 flex items-center justify-between'>
                <div className="f_content w-1/2 flex flex-col gap-2">
                    <h1 className='font-extrabold text-xl'>Hi, 👋🏻 Coders.!<br></br><span className='font-extrabold text-4xl'>I'm {username}</span></h1>
                    <p>Passionate about Front-end and Python Developer. Today i explore the entire website is deep level of understanding the concept of React.js to build modern and efficient user interface.</p>
                    <div className='my-2'>
                        <a href="#" className='bg-blue-400 font-bold tracking-wide px-4 py-2 rounded-md'>Download CV</a>
                    </div>
                </div>
                <div className="s_content w-1/3">
                    <div className="profile overflow-hidden w-60 h-60 rounded-full bg-white/40 backdrop-blur-md border-1 border-blue-200">
                        <img src="https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJzJTIwcHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
