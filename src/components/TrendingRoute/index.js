import {HiFire} from 'react-icons/hi'
import {ContentContainer} from '../ProtectedRoute/styles'
import {HeadingOfContainer, HeadingOfPage, SpanElement} from './trending'

const TrendingRoute = () => (
  <ContentContainer>
    <HeadingOfContainer>
      <HeadingOfPage>
        <SpanElement>
          <HiFire />
        </SpanElement>{' '}
        Trending
      </HeadingOfPage>
    </HeadingOfContainer>
  </ContentContainer>
)

export default TrendingRoute
