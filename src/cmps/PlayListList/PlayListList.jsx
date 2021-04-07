// import { Component } from 'react'
import { PlayListPreview } from '../PlayListPreview'

import './PlayListList.scss'

export function PlayListList({ videos,onSelectVideo }) {
    return (
        <div>
            <h1>List</h1>
            <ul>
                {videos ? videos.map((video, idx) => <li key={idx}><PlayListPreview onSelectVideo={onSelectVideo} video={video} /></li>) : <div>Loading...</div>}
            </ul>

        </div>
    )
}
