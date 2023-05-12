import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div className='h-full w-[15vw] py-8 px-6 bg-gray-500 text-white shadow-2xl'>
        <nav className='mt-4 ml-10'>
            <ul className='space-y-6 text-xl'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Admin</a></li>
                <li><a href="#">Stats</a></li>
                <li><a href="#">Setting</a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
