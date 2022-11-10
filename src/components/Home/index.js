import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-card">
        <h1 className="name">Find The Job That Fits Your Life</h1>
        <p className="details">
          Millions of people are searching for jobs, salary information ,
          company reviews. Find job that fits your abilities and potential.
        </p>
        <Link to="/jobs" className="jobs-link">
          <button type="button" className="find-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
