import React from 'react'

const FooterPage = () => {
  return (
    <div className='w-full'>
      <footer className='max-w-[800px] rounded-md px-4 py-4 mx-auto my-4 bg-blue-400/50 flex items-center justify-between'>
        <div className='container mx-auto text-center'>
          <p className='text-lg tracking-wide font-bold text-zinc-100'>&copy; {new Date().getFullYear()} Naeem Shaikh React.js Project for showing all concepts.</p>
        </div>
      </footer>
    </div>
  )
}

export default FooterPage
