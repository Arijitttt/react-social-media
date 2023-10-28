import React, { useState } from 'react'

import img3 from './Assets/like.png'
import img4 from './Assets/heart.png'
import Users from '../DummyData'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post({post}) {
  
  
  const[Like,setLike]=useState(post.like)
  const [Isliked,setIsLiked]=useState(false)

const likeHandler=()=>{

  setLike(Isliked ? Like-1 : Like+1)
  setIsLiked(!Isliked)
}
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img src={post.profilePicture} alt="" className='postProfileImg'/>
            <span className="postUsername">
              {Users.filter((u)=>u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className='postImg'/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src={img3} onClick={likeHandler} alt="" />
            <img className='likeIcon' src={img4} onClick={likeHandler} alt="" />
            <span className="postlikeCounter">{Like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className='postCommentText'>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
