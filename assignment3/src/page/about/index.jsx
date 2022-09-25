import React from 'react'

const index = ({id}) => {
  return (
    <div className='shadow-xl h-screen flex justify-center items-center'>
      <div id={id} className='text-center pt-10'>
      <h1 className='text-7xl font-bold'>Hai aku Ranto</h1>
      <div className='flex justify-center my-10'>
        <img src="https://i.ibb.co/pd3pwxV/ranto.png" alt="ranto" className='object-cover h-96 w-96 rounded-full a' />
      </div>
      <div className='text-2xl font-medium'>
        <h1>Aku Mahasiswa Universitas Lampung</h1>
        <p>hobiku bermain main dengan komputer dan nonton youtube dan suka membuat konten dan di masukan ke dalam youtube</p>
        <a href="https://www.youtube.com/channel/UClR8DnSdUvspz2nC_m5kwoQ" target={'_blank'}  className='text-blue-800'>Mari belejar teknologi</a>
      </div>
    </div>
    </div>
  )
}

export default index