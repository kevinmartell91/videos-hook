import './VideoItem.css';

import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {



    return (
        <div
            onClick={() => onVideoSelect(video)}
            className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title} />

            <div className="content">
                <a href="/" className="header">{video.snippet.title}</a>
            </div>

        </div>
    )
}

export default VideoItem
