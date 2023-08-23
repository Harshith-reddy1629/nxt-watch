import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import moment from 'moment'

import {ContentContainer} from '../ProtectedRoute/styles'

import {
  VideoContainer,
  DescriptionContainer,
  TitleContainer,
  ViewsText,
  ViewsAndLikes,
  ViewsAndUpload,
  ReactionButton,
  ReactionsContainer,
  ChannelDisplay,
  ChannelLogoDesc,
  ChannelNameAndSubs,
  ChannelNameOfVideo,
  ChannelSubsOfVideo,
  DescText,
} from './Video'

const ProgressOfPage = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    progress: ProgressOfPage.loading,
    isLiked: false,
    isDisliked: false,
    saved: false,
  }

  componentDidMount() {
    this.fetchdataOfVideo()
  }

  fetchdataOfVideo = async () => {
    this.setState({progress: ProgressOfPage.loading})

    const {match} = this.props

    const {params} = match

    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)

      const data = await response.json()

      const videodata = data.video_details

      const updatedData = {
        title: videodata.title,
        videoUrl: videodata.video_url,

        channel: {
          name: videodata.channel.name,
          profileImageUrl: videodata.channel.profile_image_url,
          subscriberCount: videodata.channel.subscriber_count,
        },
        viewCount: videodata.view_count,
        publishedAt: videodata.published_at,
        description: videodata.description,
      }

      this.setState({
        videoDetails: updatedData,
        progress: ProgressOfPage.success,
      })
    } catch (error) {
      this.setState({
        progress: ProgressOfPage.failed,
      })
    }
  }

  like = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  dislike = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  successView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state

    const {
      title,
      videoUrl,

      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    return (
      <ContentContainer>
        <VideoContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </VideoContainer>
        <DescriptionContainer>
          <TitleContainer>{title}</TitleContainer>

          <ViewsAndLikes>
            <ViewsAndUpload>
              <ViewsText>{viewCount} Views</ViewsText>
              <ViewsText>{moment(publishedAt).fromNow()}</ViewsText>
            </ViewsAndUpload>
            <ReactionsContainer>
              <ReactionButton reacted={isLiked} onClick={this.like}>
                <BiLike />
                Like
              </ReactionButton>
              <ReactionButton reacted={isDisliked} onClick={this.dislike}>
                <BiDislike />
                Dislike
              </ReactionButton>
              <ReactionButton>
                <BiListPlus />
                Save
              </ReactionButton>
            </ReactionsContainer>
          </ViewsAndLikes>
        </DescriptionContainer>
        <ChannelDisplay>
          <ChannelLogoDesc src={channel.profileImageUrl} />
          <ChannelNameAndSubs>
            <ChannelNameOfVideo>{channel.name}</ChannelNameOfVideo>
            <ChannelSubsOfVideo>
              {channel.subscriberCount} subscribers
            </ChannelSubsOfVideo>
          </ChannelNameAndSubs>
        </ChannelDisplay>
        <DescText>{description}</DescText>
      </ContentContainer>
    )
  }

  render() {
    const {progress} = this.state
    switch (progress) {
      case ProgressOfPage.success:
        return this.successView()
      case ProgressOfPage.loading:
        return (
          <div data-testid="loader">
            <h1>LOADING...</h1>
          </div>
        )
      case ProgressOfPage.failed:
        return <h1>FAILED!</h1>

      default:
        return null
    }
  }
}
export default VideoItemDetails
