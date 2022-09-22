import {Link} from 'react-router-dom'
import data from "./data"

const index = () => {

  return (
    <div className='fixed bg-orange-800 h-screen w-96 left-0 flex items-center justify-center'>
        <div className=''>
            <div className='h-60 w-60 rounded-full'>
                <img src="https://i.ibb.co/pd3pwxV/ranto.png" alt="img" className='h-60 w-60 rounded-full object-cover' />
            </div>
            <ul className='text-center text-xl mt-10 font-medium uppercase text-white'>
                {data.map((el, i)=>{
                    return(
                        <Link to={`${el.name}`}>
                            <li className=' opacity-80 hover:opacity-100 cursor-pointer'>{el.name}</li>
                        </Link>
                    )
                })}
                
            </ul>
        </div>
            
    </div>
  )
}

export default index