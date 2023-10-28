import React from 'react'

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarfriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
              <span className="rightbarOnline">{user.username}</span>
              <span className="rightbarOnlineIcon"></span>
            </div>
           {/* <span className='rightbarUsername></span>
          */}
          </li>
         
    </div>
  )
}
