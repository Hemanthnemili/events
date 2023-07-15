import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <div className="img-sort">
      <div className="image-container">
        <button type="button" onClick={onClickEvent}>
          <img src={imageUrl} alt={name} className="image" />
        </button>
        <h1 className="img-heading">{name}</h1>
        <p className="img-para">{location}</p>
      </div>
    </div>
  )
}

export default EventItem
