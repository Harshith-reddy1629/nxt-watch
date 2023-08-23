import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  LoginInput,
  LoginLabel,
  LoginButton,
  ErrorMsg,
} from './LoginStyles'

import './index.css'
import AllContext from '../../context/AllContext'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errMsg: '',
    showError: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    const checkValue = event.target.checked

    this.setState({showPassword: checkValue})
  }

  submitSuccess = token => {
    const {history} = this.props

    Cookies.set('jwt_token', token, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  formSubmission = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const requiredUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(requiredUrl, options)
      const recieved = await response.json()
      console.log(response)
      console.log(recieved)
      if (response.ok === true) {
        this.submitSuccess(recieved.jwt_token)
      } else {
        this.setState({showError: true, errMsg: recieved.error_msg})
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {username, password, showPassword, showError, errMsg} = this.state
    return (
      <AllContext.Consumer>
        {value => {
          const {lightTheme} = value

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginContainer theme={lightTheme}>
              <LoginCard theme={lightTheme}>
                <LoginLogo
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <form onSubmit={this.formSubmission} className="login-form">
                  <div className="input-container">
                    <LoginLabel theme={lightTheme} htmlFor="username">
                      USERNAME
                    </LoginLabel>
                    <LoginInput
                      onChange={this.onChangeUsername}
                      theme={lightTheme}
                      type="text"
                      value={username}
                      id="username"
                    />
                  </div>
                  <div className="input-container">
                    <LoginLabel theme={lightTheme} htmlFor="password">
                      PASSWORD
                    </LoginLabel>
                    <LoginInput
                      onChange={this.onChangePassword}
                      theme={lightTheme}
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      id="password"
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="showpassword"
                      onChange={this.onChangeCheckbox}
                      checked={showPassword}
                    />
                    <label htmlFor="showpassword">Show Password</label>
                  </div>
                  <div>
                    <LoginButton type="submit">Login</LoginButton>
                  </div>
                  {showError && <ErrorMsg>*{errMsg}</ErrorMsg>}
                </form>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default Login
