import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import {
  NavContainer,
  //   NavLogout,
  NavProfile,
  NavprofileCard,
  ModeButton,
} from './Header'

import AllContext from '../../context/AllContext'
import Logout from '../Logout'

const Header = () => (
  <AllContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value

      return (
        <NavContainer theme={lightTheme}>
          <Link to="/">
            <NavProfile
              src={
                lightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavprofileCard>
            <ModeButton theme={lightTheme} onClick={changeTheme} type="button">
              {lightTheme ? <FaMoon /> : <BiSun />}
            </ModeButton>
            <NavProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Logout />
          </NavprofileCard>
        </NavContainer>
      )
    }}
  </AllContext.Consumer>
)
export default Header
