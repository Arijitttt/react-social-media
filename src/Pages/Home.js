import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Sidebar from '../../src/Components/Topbar/sidebar/Sidebar'
import Feed from '../Components/Topbar/feed/Feed'
import Rightbar from '../Components/Topbar/rightbar/Rightbar'

export default function Home() {
  return (
    <div>
      
      
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
      
    </div>
  )
}
