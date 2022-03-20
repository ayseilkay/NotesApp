import React, { useState } from 'react'
import {FiCheck} from 'react-icons/fi'
function Colors() {
  const [checked,setChecked]=useState(false)
  const toggle = ()=>{
    setChecked(true)
  }
  return (
    <div className='flex items-center justify-center gap-x-1'>   
        <button onClick={toggle} className='bg-bg-button1 w-8 h-8 rounded-full flex items-center justify-center' ><FiCheck className='flex items-center justify-center'/></button>
        <button className='bg-bg-button2 w-8 h-8 rounded-full flex items-center justify-center'><FiCheck className='flex items-center justify-center'/></button>
        <button className='bg-bg-button3 w-8 h-8 rounded-full flex items-center justify-center'><FiCheck className='flex items-center justify-center'/></button>
        <button className='bg-bg-button4 w-8 h-8 rounded-full flex items-center justify-center'><FiCheck className='flex items-center justify-center'/></button>
        <button className='bg-bg-button5 w-8 h-8 rounded-full flex items-center justify-center'><FiCheck className='flex items-center justify-center'/></button>
    </div>
  )
}

export default Colors