import React, { useState, useEffect } from 'react'
import { testNotes, areas } from '../testNotes'
import _ from 'lodash'
const Archive = (props) => {
    
  return (
    <div className='flex flex-col w-1/2 border-r'>
        { areas.map( area => (
            <div>
            <option className='text-2xl mx-4'>{_.capitalize(area)}</option>
            {testNotes.filter((notes) => notes.area === area).map((areaNotes) => (
            <div>
            <option className='mx-8 hover:bg-gray-100'>{_.capitalize(areaNotes.title)}</option>  
            </div>
            ))}
            </div>
        ))     
}
    </div>
  )
}

export default Archive