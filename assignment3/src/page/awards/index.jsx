import { data } from "./data"

const index = ({id}) => {
  return (
    <div className="shadow-xl h-full">
      <div className='text-center mt-10' id={id}>
      <h1 className="text-6xl font-bold mb-10">Awards</h1>
      <div className="text-left mx-32 text-2xl font-medium">
        <ol >
          {data.map((el, i)=>{
            return(
              <div>
                 <li className="text-slate-700">{i+1}. {el.name}</li>
                <div className="flex justify-center ">
                  <img src={el.img} alt="reporter" className="w-96 flex justify-center rounded-lg my-2" />
                </div>
              </div>
            )
          })}
        </ol>
      </div>
    </div>
    </div>
  )
}

export default index