import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="home-container">
    <Header />
    <div className="not-found-container">
      <img
        className="not-found"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-details">
        were sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
