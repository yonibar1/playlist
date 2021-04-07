
import { Component } from 'react'
import './PlayListApp.scss'
import { PlayListFilter } from '../../cmps/PlayListFilter'
import { PlayListList } from '../../cmps/PlayListList'
import { PlayListPlayer } from '../../cmps/PlayListPlayer'
import { youtubeService } from '../../services/youtube.service'


export class PlayListApp extends Component {
    state = {
        videos: null
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

    render() {
        const { videos } = this.state
        return (
            <div>
                <PlayListFilter onChangeFilter={this.onChangeFilter} />
                <PlayListList videos={videos} />
                <PlayListPlayer />
            </div>
        )
    }
}
