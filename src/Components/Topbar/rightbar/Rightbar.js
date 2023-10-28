import React from 'react'
import img1 from './Assets/gift.png'
import img2 from './Assets/ad.png'
import img3 from './Assets/Person/4.jpeg'
import { Users } from '../DummyData'
import Online from './Online'
export default function Rightbar({ Profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src={img1} alt="" />
          <span className="birthdayText"><b>Jimmy Anderson</b> & <b>4 other friends</b> have a birthday today </span>
        </div>
        <img className='rightbarAd' src={img2} alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
const ProfileRightbar=()=>{
  return(
    <>
    <h4>User Information Title</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Kolkata</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madhyamgram</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className='rightbarTitle'>User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className='rightbarFollowingImg'/>
        <span className="rightbarFollowingName">Stone Andersonn</span>
      </div>
    </div>
    </>
  )
}
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
{
  Profile ? <ProfileRightbar/> : <HomeRightbar/>
}
      </div>
    </div>
  )
}
