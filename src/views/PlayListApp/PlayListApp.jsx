import { Component } from 'react';
import './PlayListApp.scss';
import { PlayListFilter } from '../../cmps/PlayListFilter';
import { PlayListList } from '../../cmps/PlayListList';
import { PlayListPlayer } from '../../cmps/PlayListPlayer';
import { youtubeService } from '../../services/youtube.service';

export class PlayListApp extends Component {
  state = {
    videos: null,
    videoId: 'Y0KxZz5k-RE',
    songName: 'שלמה ארצי - תתארו לכם (קליפ)',
    keyWord: null,
  };
  componentDidMount() {
    this.loadVideos();
  }
  async loadVideos(keyWord = 'shlomo artzi') {
    const videos = await youtubeService.loadVideos(keyWord);
    this.setState({ videos });
  }
  onChangeFilter = ({ keyWord }) => {
    console.log(keyWord, 'at onchangefilter');
    this.setState({ keyWord }, () => this.loadVideos(keyWord));
  };
  onSelectVideo = (videoId, songName) => {
    console.log('songName', songName, videoId, 'VIDEO ID');
    this.setState({ videoId, songName });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="play-list-app">
        <PlayListFilter onChangeFilter={this.onChangeFilter} />
        <div className="main-container">
        <PlayListList onSelectVideo={this.onSelectVideo} videos={videos} />
        {this.state.videoId && this.state.songName && (
            <PlayListPlayer id={this.state.videoId} songName={this.state.songName} />
            )}
            </div>
      </div>
    );
  }
}
