import { Interest } from "./data"

const index = ({id}) => {
  return (
    <div id={id} className="shadow-xl flex justify-center items-center h-screen">
      <div className="mx-32 ">
      <h1 className=" text-center text-6xl font-bold uppercase my-10">Interest</h1>
      <div className="columns-3">
        {
          Interest.map((el , i)=>{
            return (
              <div className="flex text-xl font-medium gap-3">
                <p>🤞</p>
                <p>{el.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default index