import React from 'react'

const CardImage = (props) => {
  return (
    <div className='w-full bg-white/20 backdrop-blur-2xl rounded-md hover:scale-105 transition-all duration-300 border-1 border-blue-200'>
      <img src={props.image} alt="Random" className='w-full h-56 rounded-tl-md rounded-tr-md bg-cover bg-center' />
      <div className="px-4 pt-2 font-bold">Image ID: {props.id}</div>
      <h2 className='px-4 py-2 font-bold'>Author: {props.author}</h2>
    </div>
  )
}

export default CardImage
