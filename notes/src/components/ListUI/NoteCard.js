import React from 'react'

function NoteCard({item}) {

  return (
    <div className={`items-center justify-center bg-slate-400 w-60 h-60  m-2 `}>
      <ul className=''>
        <li className='text-white font-semibold text-lg block bg-blue-400 h-10 p-2 '>{item.title}</li>
        <p className='p-2'>{item.content}</p>
      </ul>
    </div>
  )
}

export default NoteCard