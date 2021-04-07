import { Component } from 'react';

import './PlayListPlayer.scss';

export class PlayListPlayer extends Component {
  render() {
    console.log('this.props.videoId:', this.props);
    return (
      <div className="play-list-player">
        <div className="youtube-container">
          <iframe src={`https://www.youtube.com/embed/${this.props.id}?controls=1`}></iframe>
        </div>
        <h4>{this.props.songName}</h4>
      </div>
    );
  }
}
