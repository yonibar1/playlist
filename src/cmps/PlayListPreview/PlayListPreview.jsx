
import { Component } from 'react'

import './PlayListPreview.scss'

export function PlayListPreview({ video,onSelectVideo }) {
    return (
        <div className="playlist-preview">
            <img src={video.snippet.thumbnails.default.url} alt=""/>
            <div className="video-details">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
                <p>{video.snippet.publishedAt}</p>
            </div>
            <button onClick={()=>onSelectVideo(video.id.videoId,video.snippet.title)}>Play</button>
        </div>
    )
}
