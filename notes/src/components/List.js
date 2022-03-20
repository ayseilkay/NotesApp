import React from 'react'
import NoteCard from './ListUI/NoteCard'
import {useSelector} from 'react-redux'

function List() {
  const items = useSelector(state => state.notes.items)
  console.log(items)
  return (
    <div className='flex items-center justify-center mt-10'>
        <div className='grid grid-cols-3'>
        {
          items.map((item,index)=>(
            <NoteCard item={item} key={index}/>
          ))
        }
        </div>
    </div>
  )
}

export default List