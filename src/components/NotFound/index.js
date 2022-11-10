import Header from '../Header'
import './index.css'

const NotFound = () => {
  const name = 'rekha'
  return (
    <>
      <Header />
      <div className="not-found-container">
        <img
          className="not-found"
          alt="not found"
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-details">
          we're sorry, the page you requested could not be found.
        </p>
      </div>
    </>
  )
}

export default NotFound