import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const profileStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {profile: '', profileView: profileStatus.initial}

  componentDidMount() {
    this.renderProfileView()
  }

  renderProfileView = async () => {
    this.setState({profileView: profileStatus.inProgress})

    const profileApiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.profile_details
      // console.log(updatedData)

      const updatedProfile = {
        name: updatedData.name,
        profileImageUrl: updatedData.profile_image_url,
        shortBio: updatedData.short_bio,
      }

      this.setState({
        profile: updatedProfile,
        profileView: profileStatus.success,
      })
    } else {
      this.setState({profileView: profileStatus.failure})
    }
  }

  renderProfile = () => {
    const {profileView} = this.state

    switch (profileView) {
      case profileStatus.success:
        return this.renderSuccess()
      case profileStatus.failure:
        return this.renderFailure()
      case profileStatus.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  renderSuccess = () => {
    const {profile} = this.state
    const {name, profileImageUrl, shortBio} = profile
    //    console.log(profile)

    return (
      <div className="profile-card">
        <img alt={name} src={profileImageUrl} className="profile-image" />
        <h1 className="profile-name">{name}</h1>
        <p className="bio-details">{shortBio}</p>
      </div>
    )
  }

  //   testid="loader"

  renderLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div className="failure-card">
      <button type="button" className="retry-button">
        Retry
      </button>
    </div>
  )

  render() {
    return (
      <div className="job-container">
        <Header />

        <div className="job-card">
          <div className="profile-container">
            {this.renderProfile()}
            <hr className="separator" />
            <h1 className="type-name">Type of Employment</h1>
            <ul className="employment-card">
              {employmentTypesList.map(eachType => (
                <li className="employment-list">
                  <input type="checkbox" />
                  {eachType.label}
                </li>
              ))}
            </ul>
            <hr className="separator" />
            <h1 className="type-name">Salary Range</h1>
            <ul className="employment-card">
              {salaryRangesList.map(eachType => (
                <li className="employment-list">
                  <input type="checkbox" />
                  {eachType.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
