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
      <Link to="/" className="heading-list-card">
        <img
          alt="website logo"
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </Link>
      <div className="heading-list-container">
        <li>
          <Link to="/" className="heading-list-card">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Jobs" className="heading-list-card">
            Jobs
          </Link>
        </li>
      </div>
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
    </ul>
  )
}

export default withRouter(Header)
