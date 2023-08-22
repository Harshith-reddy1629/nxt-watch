import {withRouter, Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import AllContext from '../../context/AllContext'

import {
  SidebarContainer,
  UlContainer,
  LiItem,
  ContactDiv,
  ContactLogo,
} from './Sidebar'
import {TransparentButton} from '../ProtectedRoute/styles'

import './index.css'

const Sidebar = props => {
  console.log(1, props)
  const {location} = props
  const {pathname} = location
  return (
    <AllContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <SidebarContainer theme={lightTheme}>
            <UlContainer theme={lightTheme}>
              <Link to="/">
                <LiItem theme={lightTheme}>
                  <TransparentButton
                    activeRoute={pathname === '/'}
                    bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                    theme={lightTheme}
                    type="button"
                  >
                    <p className="route-option">
                      <AiFillHome
                        color={pathname === '/' ? 'red' : undefined}
                      />{' '}
                      Home
                    </p>
                  </TransparentButton>{' '}
                </LiItem>
              </Link>
              <Link to="/trending">
                <LiItem>
                  <TransparentButton
                    activeRoute={pathname === '/trending'}
                    bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                    theme={lightTheme}
                    type="button"
                  >
                    <p className="route-option">
                      <HiFire
                        color={pathname === '/trending' ? 'red' : undefined}
                      />{' '}
                      Trending
                    </p>
                  </TransparentButton>{' '}
                </LiItem>
              </Link>
              <Link to="/gaming">
                <LiItem>
                  <TransparentButton
                    activeRoute={pathname === '/gaming'}
                    bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                    theme={lightTheme}
                    type="button"
                  >
                    <p className="route-option">
                      <SiYoutubegaming
                        color={pathname === '/gaming' ? 'red' : undefined}
                      />{' '}
                      Gaming
                    </p>
                  </TransparentButton>{' '}
                </LiItem>
              </Link>
              <Link to="/saved-videos">
                <LiItem>
                  <TransparentButton
                    activeRoute={pathname === '/saved-videos'}
                    bgColor={lightTheme ? '#f1f5f9' : '#383838'}
                    theme={lightTheme}
                    type="button"
                  >
                    <p className="route-option">
                      <BiListPlus
                        color={pathname === '/saved-videos' ? 'red' : undefined}
                      />{' '}
                      Saved videos
                    </p>
                  </TransparentButton>{' '}
                </LiItem>
              </Link>
            </UlContainer>
            <ContactDiv>
              <p>CONTACT US</p>
              <div>
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
                <p>Enjoy! Now to see your channels and recommondations!</p>
              </div>
            </ContactDiv>
          </SidebarContainer>
        )
      }}
    </AllContext.Consumer>
  )
}

export default withRouter(Sidebar)
