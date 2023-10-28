import React from 'react'
import img1 from './Assets/Person/1.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={img1} alt="" className='shareProfileImg' />
                    <input type="text" placeholder='Whats in your Mind Arijit' className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className='shareOption'>
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className='shareOption'>
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <MeetingRoomIcon htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotionsIcon htmlColor='yellow' className='shareIcon' />
                            <span className='shareOptionText'>Feeling </span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
