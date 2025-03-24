import { useEffect ,useState } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState(["hi there" ,"hi" ,"hi"]);
    useEffect(()=>{
      const ws = new WebSocket("ws://localhost:8080");
      ws.onmessage = (event)=>{
        setMessage(m => [...m ,event.data]);
      }

    },[])
  return (
     //@ts-ignore
    <>
     <div className='h-screen  bg-black flex flex-col '>
      <div className='h-[90vh] bg-red-400 flex flex-col p-2 rounded-lg'>
        {message.map((message)=>{
            return <div className='flex  '>
              <span className='text-white text-3xl  bg-black p-3 rounded-lg'>
                {message}
                </span>
            </div>
            
        })}
      </div>
      <div className=" w-full bg-white flex  rounded-lg p-2 ">
      <input type="text" placeholder='send something....' className='rounded-lg border-2 border-black  text-black text-2xl  p-2 bg-white flex-1'></input>
        <button  className='rounded-lg border-2 border-black  text-2xl w-40  p-3 bg-purple-600 text-white '>Send</button>
      </div>
     
    </div> 
    </>
   
  )
}

export default App
