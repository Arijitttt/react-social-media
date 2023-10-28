import React from 'react'
import Share from '../Share/Share'
import Post from '../Post/Post'
import Posts from '../DummyData'
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper"> 
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
        
       
      
      </div>
    </div>
  )
}
 