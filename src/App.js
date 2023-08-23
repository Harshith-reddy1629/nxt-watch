import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import AllContext from './context/AllContext'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import TrendingRoute from './components/TrendingRoute'
import Gaming from './components/Gaming'
import SavedVideos from './components/Savedvideos'
import NotFound from './components/NotFound'

import './App.css'
import VideoItemDetails from './components/VideoRoute'

// Replace your code here
class App extends Component {
  state = {lightTheme: true}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme} = this.state
    return (
      <AllContext.Provider value={{lightTheme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        {/* <div>
          <Login />
        </div> */}
      </AllContext.Provider>
    )
  }
}

export default App
