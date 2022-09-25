import { useEffect } from "react"
import { useState } from "react"
import { HashLink as Link } from "react-router-hash-link"
import data from "./data"

const index = () => {
    const [active, setActive] = useState("")
    console.log(active);

    useEffect(()=>{

    },[active])


  return (
    <div className='fixed bg-orange-800 h-screen w-96 left-0 flex items-center justify-center'>
        <div className=''>
            <div className='h-60 w-60 rounded-full'>
                <img src="https://i.ibb.co/pd3pwxV/ranto.png" alt="img" className='h-60 w-60 rounded-full object-cover' />
            </div>
            <ul className='text-center text-xl mt-10 font-medium uppercase text-white'>
                {data.map((el, i)=>{
                    return(
                        <Link key={i} to={`#${el.name}`} value={el.name} onClick={(e)=>setActive(el.name)}>
                            <li className={`opacity-50 hover:opacity-90 cursor-pointer my-3 ${active === el.name ? 'opacity-90' : ''}`}>{el.name}</li>
                        </Link>
                    )
                })}
                
            </ul>
        </div>
            
    </div>
  )
}

export default index