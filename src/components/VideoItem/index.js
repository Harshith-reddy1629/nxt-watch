import {Link} from 'react-router-dom'

import {
  VideoCard,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetailsTextContainer,
  VideoTitle,
  ChannelName,
  ViewsText,
} from './VideoItem'

const VideoItem = props => {
  const {item} = props

  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    //  publishedAt
  } = item
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <VideoCard>
        <VideoThumbnail src={thumbnailUrl} alt="thumbnail" />
        <VideoDetailsContainer>
          <ChannelLogo src={channel.profileImageUrl} />
          <VideoDetailsTextContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsText>{viewCount} Views</ViewsText>
          </VideoDetailsTextContainer>
        </VideoDetailsContainer>
      </VideoCard>
    </Link>
  )
}
export default VideoItem
