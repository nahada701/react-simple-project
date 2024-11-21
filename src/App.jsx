import './App.css'
import { useState } from 'react'
const changeBg=(colour)=>{
  
}
function App() {
 const[color,setColor]=useState()
 const changeBg=(clr)=>{
  setColor(clr)
 }
  return (
    <>
    <div className='w-100 m-auto d-flex align-items-center justify-content-center' style={{backgroundColor:color,minHeight:'100vh'}}>
      <button className='btn btn-success ms-3' onClick={()=>changeBg('#198754')}> Green</button>
      <button className='btn btn-primary ms-3' onClick={()=>changeBg('#0d6efd')}> Blue</button>
      <button className='btn btn-warning ms-3' onClick={()=>changeBg('#ffc107')}> Orange</button>
      <button className='btn btn-danger ms-3' onClick={()=>changeBg('#dc3545')}> Red</button>

    </div>

    </>
  )
}

export default App
