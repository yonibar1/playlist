import { Component } from 'react';

import './PlayListPreview.scss';

export function PlayListPreview({ video, onSelectVideo }) {
  return (
    <div className="playlist-preview">
      <div className="img-container">
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="playlist-preview-container">
        <div className="video-details">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
          <p>{video.snippet.publishedAt}</p>
        </div>
      </div>
      <button className="play-video" onClick={() => onSelectVideo(video.id.videoId, video.snippet.title)}>
        Play
      </button>
    </div>
  );
}
