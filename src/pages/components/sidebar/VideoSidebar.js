import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(true);

    function handdleLike(){
        setLiked(!liked);
    }

  return (
    <div className='videoSidebar' VideoSidebar>
        <div 
            className='videoSidebar__options'
            onClick={handdleLike}
        >
            { liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
            
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__options'>
            <ChatIcon fontSize='large' />
            <p>{messages}</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar;