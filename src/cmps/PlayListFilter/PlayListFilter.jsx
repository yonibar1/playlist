
import { Component } from 'react'

import './PlayListFilter.scss'

export class PlayListFilter extends Component {
    state = {
        keyWord: ''
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value })
    }
    onSearch = (ev)=>{
        ev.preventDefault()
        this.props.onChangeFilter({ ...this.state })    
    }

    render() {
        const { keyWord } = this.state
        return (
            <div className="play-list-filter">
                <form onSubmit={(ev)=>this.onSearch(ev)}>
                <label htmlFor="input">Search</label>
                <input required placeholder="Search..." type="text" value={keyWord} onChange={this.handleChange} name="keyWord" id="input" />
                <button>Search</button>
                </form>
            </div>
        )
    }
}
