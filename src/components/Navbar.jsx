import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-full'>
      <header className='max-w-[800px] rounded-full px-4 py-4 mx-auto my-4 bg-blue-500 h-full flex items-center justify-between'>
        <Link to="/bombay-portfolio" className='font-extrabold text-2xl'>DEV.Bombay</Link>
        <nav>
            <ul className='flex items-center justify-center gap-4'>
                <li><Link to="/bombay-portfolio" className='text-md hidden lg:flex font-medium hover:underline hover:text-xl transition-all'>Home</Link></li>
                <li><Link to="/bombay-portfolio/templates" className='text-md hidden lg:flex font-medium hover:underline hover:text-xl transition-all'>Templates</Link></li>
                <li><Button>Portfolio</Button></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
