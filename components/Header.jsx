'use client'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { HiBell } from 'react-icons/hi'

function Header({ user, title, subtitle }) {
  const [toggleButton, setToggleButton] = useState({notif:false, profile:false})

  return (
    <div className='flex font-raleway pb-8'>
      <div className='flex-1 flex flex-col gap-y-2'>
        <p className='text-4xl font-bold'>{title}</p>
        <p className='font-medium'>{subtitle}</p>
      </div>
      <div className='flex gap-4 select-none items-center'>
        <div className=''>{user.name}</div>
        <div className='w-10 h-10 bg-gray-300 rounded-full text-xl flex items-center justify-center text-gray-700 relative'
          onClick={() => setToggleButton({notif:false, profile:!toggleButton.profile})}
        >
          <div className='flex'>
            <img src={user.image} ferrerpolicy='no-referrer' alt='profile' className='w-10 h-10 rounded-full object-cover' />
          </div>
          { toggleButton.profile && 
            <div className='absolute top-12 w-48 bg-white right-0 flex flex-col gap-y-1 p-1 text-sm rounded-l-lg rounded-br-lg ring ring-gray-300'>
              <a className='hover:bg-gray-200 py-1 rounded-lg w-full text-center cursor-pointer'>Profile</a>
              <button className='hover:bg-red-600 hover:text-white py-1 rounded-lg w-full' onClick={()=>signOut()}>Log out</button>
            </div>
          }
        </div>
        <div className='w-10 h-10 bg-gray-300 rounded-full text-xl flex items-center justify-center text-gray-700 relative'
          onClick={() => setToggleButton({notif:!toggleButton.notif, profile:false})}
        >
          <HiBell />
          { toggleButton.notif && 
            <div className='absolute top-12 w-48 bg-white right-0 flex flex-col gap-y-1 p-1 text-sm rounded-l-lg rounded-br-lg ring ring-gray-300'>
              <a className='py-1 rounded-lg w-full text-center cursor-pointer'>{`You don't have any new notifications`}</a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header