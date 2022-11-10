import Header from '../Header'
import './index.css'

const Home = () => {
  const name = 'rekha'

  return (
    <div className="home-container">
      <Header />
      <div className="home-card">
        <h1 className="name">Find The Job That Fits Your Life</h1>
        <p className="details">
          Millions of people are searching for jobs, salary information ,
          company reviews. Find job that fits your abilities and potential.
        </p>
        <button type="button" className="find-button">
          Find Jobs
        </button>
      </div>
    </div>
  )
}
export default Home
