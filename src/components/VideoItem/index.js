import {Link} from 'react-router-dom'

// import {BsDot} from 'react-icons/bs'

import moment from 'moment'

import {
  VideoCard,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetailsTextContainer,
  VideoTitle,
  ChannelName,
  ViewsText,
  ViewsAndPublished,
} from './VideoItem'

const VideoItem = props => {
  const {item} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <VideoCard>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <VideoDetailsTextContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsAndPublished>
              <ViewsText>{viewCount} Views </ViewsText>
              {/* <ViewsText>
                <BsDot />
              </ViewsText> */}{' '}
              <ViewsText> {moment(publishedAt).fromNow()}</ViewsText>
            </ViewsAndPublished>
          </VideoDetailsTextContainer>
        </VideoDetailsContainer>
      </VideoCard>
    </Link>
  )
}
export default VideoItem
