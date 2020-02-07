import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <img className='video-object' src={imageUrl}/>
            </div>
            <div className='media-body'>
                <div className='media-heading'>
                    {video.snippet.title}
                </div>
            </div>
            {/* {props} */}
        </li>
    )
}

export default VideoListItem;