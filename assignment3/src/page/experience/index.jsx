import { experience } from "./data"

const index = ({id}) => {
  return (
    <div id={id} className="shadow-xl flex justify-center items-center h-screen">
     <div className="mx-32 ">
      <h1 className="text-center text-6xl font-bold my-10 uppercase">Experience</h1>
      <div className=' columns-3'>
        {experience.map((el, i) =>{
          return(
            <div className="font-medium text-xl flex gap-3">
              <p>👍</p>
              <p>{el.name}</p>
            </div>
          )
        })}
      </div>
    </div> 
    </div>
  )
}

export default index