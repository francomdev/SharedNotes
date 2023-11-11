import react, { useState } from 'react'
import Nav from './components/Nav'
import Archive from './components/Archive'
import Note from './components/Note'
import './App.css'

function App() {
  const [currentNote, setCurrentNote] = useState({title: '', content: ''})
  

  return (
    <div className='w-full h-[100vh]'>
      <Nav />
      <div className='w-full h-full flex flex-row justify-between mt-12'>
      <Archive 

      />
      <Note 
      title = {currentNote.title}
      content = {currentNote.content}
      />
      </div>
    </div>
  )
}

export default App
