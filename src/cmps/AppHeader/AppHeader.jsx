
import { Component } from 'react'

import './AppHeader.scss'

export class AppHeader extends Component {

    render() {
        return (
            <div className="app-header">
            <h1>PlayList</h1>
            <nav>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </nav>
            </div>
        )
    }
}
