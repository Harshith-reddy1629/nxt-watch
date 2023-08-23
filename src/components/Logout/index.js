import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import 'reactjs-popup/dist/index.css'

import {NavLogout} from '../Header/Header'
import AllContext from '../../context/AllContext'

import './index.css'
import {PopopContent} from './Logout'

const Logout = props => {
  const Loggingout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <AllContext.Consumer>
      {values => {
        const {lightTheme} = values

        return (
          <Popup
            modal
            trigger={
              <NavLogout theme={lightTheme} type="button" data-testid="theme">
                Logout
              </NavLogout>
            }
          >
            {close => (
              <PopopContent theme={lightTheme}>
                <p>Are you sure want to logout? </p>
                <div className="btns">
                  <button
                    className="close-btn"
                    type="button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                  <button
                    onClick={Loggingout}
                    type="button"
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </div>
              </PopopContent>
            )}
          </Popup>
        )
      }}
    </AllContext.Consumer>
  )
}
export default withRouter(Logout)
