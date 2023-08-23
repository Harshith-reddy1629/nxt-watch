import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'
import Header from '../Header'
import {Container, BodyContainer} from './styles'
import AllContext from '../../context/AllContext'
import Sidebar from '../Sidebar'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <AllContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <Container theme={lightTheme}>
            <Header />
            <BodyContainer>
              <Sidebar />
              <Route {...props} />
            </BodyContainer>
          </Container>
        )
      }}
    </AllContext.Consumer>
  )
}

export default ProtectedRoute
