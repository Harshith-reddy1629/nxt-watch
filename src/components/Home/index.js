import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import {ContentContainer} from '../ProtectedRoute/styles'
import Banner from '../Banner'
import {
  HomeContentContainer,
  HomeSearchBtn,
  HomeSearchInput,
  HomeSearchContainer,
  VideosUlContainer,
} from './Home'
import AllContext from '../../context/AllContext'

import VideoItem from '../VideoItem'

const HomePageStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Home extends Component {
  state = {statusofpage: 'LOADING', listofvideos: [], searchvalue: ''}

  componentDidMount() {
    this.fetchdata()
  }

  fetchdata = async (q = '') => {
    this.setState({statusofpage: HomePageStatus.loading})

    const jwtToken = Cookies.get('jwt_token')

    const requiredUrl = `https://apis.ccbp.in/videos/all?search=${q}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(requiredUrl, options)
      const Data = await response.json()

      if (response.ok === true) {
        const videosList = Data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        this.setState({
          statusofpage: HomePageStatus.success,
          listofvideos: videosList,
        })
      }
    } catch (error) {
      this.setState({statusofpage: HomePageStatus.failed})
    }
  }

  onSearch = () => {
    const {searchvalue} = this.state
    this.fetchdata(searchvalue)
  }

  searchEvent = event => {
    this.setState({searchvalue: event.target.value})
  }

  fetchSuccess = () => {
    const {listofvideos} = this.state

    return (
      <VideosUlContainer>
        {listofvideos.map(each => (
          <VideoItem key={each.id} item={each} />
        ))}
      </VideosUlContainer>
    )
  }

  fetchingFailed = () => <h1>FAILED</h1>

  PageLoading = () => <h1>LOADING...</h1>

  displayOfHomepage = () => {
    const {statusofpage} = this.state
    switch (statusofpage) {
      case HomePageStatus.success:
        return this.fetchSuccess()
      case HomePageStatus.loading:
        return this.PageLoading()
      case HomePageStatus.failed:
        return this.fetchingFailed()

      default:
        return null
    }
  }

  render() {
    const {searchvalue} = this.state
    return (
      <AllContext.Consumer>
        {values => {
          const {lightTheme} = values
          return (
            <ContentContainer data-testid="home">
              <Banner />

              <HomeContentContainer>
                <HomeSearchContainer theme={lightTheme}>
                  <HomeSearchInput
                    theme={lightTheme}
                    value={searchvalue}
                    type="search"
                    placeholder="Search"
                    onChange={this.searchEvent}
                  />

                  <HomeSearchBtn
                    theme={lightTheme}
                    type="button"
                    onClick={this.onSearch}
                  >
                    <AiOutlineSearch />
                  </HomeSearchBtn>
                </HomeSearchContainer>

                {this.displayOfHomepage()}
              </HomeContentContainer>
            </ContentContainer>
          )
        }}
      </AllContext.Consumer>
    )
  }
}
export default Home
