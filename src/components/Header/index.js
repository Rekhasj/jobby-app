import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ul className="header-card">
      <li>
        <Link to="/" className="heading-list-card">
          <img
            alt="website logo"
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>
      </li>
      <li>
        <div className="heading-list-container">
          <Link to="/" className="heading-list-card">
            Home
          </Link>

          <Link to="/Jobs" className="heading-list-card">
            Jobs
          </Link>
        </div>
      </li>
      <li>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Header)
