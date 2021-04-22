import './VideoItem.css';
import React from 'react';

const VideoItem = ({video,onVideoSelect}) => {
    const { title,thumbnails } = video.snippet;
    return ( 
        <div className="video-item item"
            onClick={()=>{onVideoSelect(video)}}>
            
            <img
                alt={title}
                className="ui image" src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
     );
}
 
export default VideoItem;