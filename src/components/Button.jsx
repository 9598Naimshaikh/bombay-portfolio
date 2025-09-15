import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children }) => {
  return (
    <div>
      <Link to="https://9598naimshaikh.github.io/Modern_Portfolio/" target='_blank' className='text-md bg-blue-300/50 border-1 border-blue-200 px-4 py-2 rounded-full font-medium hover:underline hover:text-xl transition-all'>{children}</Link>
    </div>
  )
}

export default Button
