import React from 'react'

function Search() {
  return (
    <div className='flex items-center justify-center pt-6'>
        <input className='w-80 h-10 bg-white text-base font-medium outline-none rounded-3xl p-3 border-[1px] border-gray-400 hover:border-blue-200' placeholder='Search...'></input>
    </div>
  )
}

export default Search