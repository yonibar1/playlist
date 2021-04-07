
import { Component } from 'react'

import './PlayListPreview.scss'

export function PlayListPreview({ video }) {
    return (
        <div>
            {JSON.stringify(video)}
        </div>
    )
}
