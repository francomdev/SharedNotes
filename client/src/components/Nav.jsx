import React, { useState } from 'react'


const Nav = () => {
  const [profileClick, setProfileClick] = useState(false)
  
  const handleProfileClick = () => {
    setProfileClick(!profileClick)
  }

  return (
    <nav className='flex flex-row justify-between align-baseline'>
        <h1 className='blue_red_gradient mx-6  my-4 text-center'>
          Shared Notes
          </h1>
        <div className='flex flex-row justify-between'>
        <input className='rounded-md w-60 h-12 mx-8 my-4 px-4 py-2 text-xl border-slate-400 border'
        type="search" name="search" id="search" placeholder='Search' />
        <div className='flex flex-col justify-center text-center mx-2'>
        <img src="/src/assets/profile.svg" alt="profile photo"
        className='rounded-full w-16 h-16 my-2 mx-4 hover:border'
        onClick={handleProfileClick} />
        {profileClick && (
        <div className='-mb-20 z-50  rounded-md p-1 w-full h-max flex flex-col justify-center'>
        <option className=' bg-white hover:text-xl mb-0 -mt-1 -mx-1'>Logout</option>
        <option className=' bg-white hover:text-xl -mx-1 -mb-1'>Settings</option>
        </div>
        )}  
        </div>
      </div>
      </nav>
  )
}

export default Nav