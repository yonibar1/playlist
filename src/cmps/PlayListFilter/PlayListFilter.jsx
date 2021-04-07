
import { Component } from 'react'

import './PlayListFilter.scss'

export class PlayListFilter extends Component {
    state = {
        filter: ''
    }
    handleChange = ({ target }) => {
        console.log(target);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const { filter } = this.state
        return (
            <div>
                <label htmlFor="input">Search</label>
                <input placeholder="Search..." type="text" value={filter} onChange={this.handleChange} name="filter" id="input" />
            </div>
        )
    }
}
