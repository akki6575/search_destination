// Write your code here
import './index.css'

const Item = props => {
  const {DestinationPlaces} = props
  const {name, imgUrl} = DestinationPlaces

  return (
    <li className="container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default Item
