import React from 'react'

const index = ({id}) => {
  return (
   <div id={id} className='shadow-xl h-screen flex justify-center items-center'>
     <div className='text-center '>
      <h1 className='text-6xl uppercase font-bold'>Education</h1>
      <div className='text-3xl font-medium'>
        <h1>1. SMK N 1 KETAPANG</h1>
        <h1>2. UNIVERSITAS LAMPUNG</h1>
      </div>
    </div>
   </div>
  )
}

export default index