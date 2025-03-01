import React from 'react'

const Authlayout = ({children}:{children : React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg'>
      {children}
    </div>
  )
}

export default Authlayout
