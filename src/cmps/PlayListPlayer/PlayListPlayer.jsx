import { Component } from 'react';

import './PlayListPlayer.scss';

export class PlayListPlayer extends Component {
  render() {
    return (
      <div>
        <video width="750" height="500" controls>
          <source src={`https://www.youtube.com/watch?v=${this.props.videoId}`} type="video/mp4" />
        </video>
        <h4>{this.props.songName}</h4>
      </div>
    );
  }
}
