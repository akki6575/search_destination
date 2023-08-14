// Write your code here
import {Component} from 'react'
import Item from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  SearchDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input
          className="form-control"
          onChange={this.SearchDestination}
          type="search"
          value=""
        />
        <img
          alt="search icon"
          className="search-icon"
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
        />
        <ul className="item-container">
          {searchResults.map(each => (
            <Item DestinationPlaces={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
