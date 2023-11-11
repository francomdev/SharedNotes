import React from 'react'

const Note = (props) => {
  return (
    <div className='w-1/2 h-2/3 bg-white rounded-md  mx-4 flex flex-col'>
        <h1 className='text-3xl mx-4 my-2'>{props.title}</h1>
        <p className='mx-4 my-2 overflow-y-auto'>{props.content}</p>
    </div>
  )
}

export default Note