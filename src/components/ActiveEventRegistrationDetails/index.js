import './index.css'

const eventStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATION_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus} = props

  const renderNoActiveStatus = () => (
    <p>Click on an Event, to view its registration details</p>
  )

  const renderRegistrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <p>Stay tuned We will reopen the registration soon</p>
    </div>
  )

  const renderYetToRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to registered"
        className="yet-registered-img"
      />
      <p>
        A live performance brings so much to your relationship with dance .
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered-img"
      />
      <p>You have already registered for the Event</p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventStatus) {
      case eventStatus.yetToRegister:
        return renderYetToRegistered()
      case eventStatus.registered:
        return renderRegistered()
      case eventStatus.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveStatus()
    }
  }

  return <div>{renderActiveEventRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
