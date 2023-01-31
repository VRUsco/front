import React from 'react'

const NotFound = () => {
  return (
    <div className='container mx-auto my-24 w-full text-center'>
        <p className='font-extrabold text-6xl'>404</p>
        <p className='font-semibold text-xl'>Page not found</p>
        <a href="/" className=''>Go home</a>
    </div>
  )
}

export default NotFound