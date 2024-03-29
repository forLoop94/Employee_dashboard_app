import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='h-auto bg-white p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl'>{children}</div>
  )
}

export default Card