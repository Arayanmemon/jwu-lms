import React from 'react'
import Graphs from "../Components/Graphs";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar />
      <Graphs />
    </div>
  )
}
