import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Sidebar from '../Components/Topbar/sidebar/Sidebar'
import Feed from '../Components/Topbar/feed/Feed'
import Rightbar from '../Components/Topbar/rightbar/Rightbar'
import img1 from '../Assets/Post/3.jpeg'
import img2 from '../Assets/Person/6.jpeg'
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={img1} alt="" className='profileCoverImg' />
                            <img src={img2} alt="" className='profileUserImg' />

                        </div>
<div className="profileInfo">
    <h4 className='profileInfoName'>Anushka Bhattacharya</h4>
    <span className='profileInfoDescription'>Miles to go before I sleep</span>
</div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar Profile/>
                    </div>

                </div>


            </div>
        </>
    )
}
