import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video)
        return <div>Loding..</div>
    
    const { title,description } = video.snippet;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (  
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="ui inverted segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
 
export default VideoDetail;