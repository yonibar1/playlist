
import { Component } from 'react'
import './PlayListApp.scss'
import { PlayListFilter } from '../../cmps/PlayListFilter'
import { PlayListList } from '../../cmps/PlayListList'
import { PlayListPlayer } from '../../cmps/PlayListPlayer'
import { youtubeService } from '../../services/youtube.service'


export class PlayListApp extends Component {
    state = {
        videos: null,
        videoId:null,
        songName:null
    }
    componentDidMount() {
        this.loadVideos()
    }
    async loadVideos() {
        const videos = await youtubeService.loadVideos()
        this.setState({ videos })
    }
    onChangeFilter = (filterBy) => {
        console.log(filterBy);
        // this.setState({ filterBy }, () => this.loadContacts())
    }
    onSelectVideo = (videoId,songName) =>{
        console.log('songName',songName,videoId,'VIDEO ID');
        this.setState({videoId,songName})
    }

    render() {
        const { videos } = this.state
        return (
            <div>
                <PlayListFilter onChangeFilter={this.onChangeFilter} />
                <PlayListList onSelectVideo={this.onSelectVideo} videos={videos} />
                <PlayListPlayer />
            </div>
        )
    }
}
