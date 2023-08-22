import {useState} from 'react'

import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerContainer,
  BannerTextContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerClose,
} from './BannerStyles'

const Banner = () => {
  const [close, setClose] = useState(false)

  const onClose = () => {
    setClose(true)
  }

  return (
    <>
      {!close && (
        <BannerContainer>
          <BannerTextContainer>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerButton>GET IT NOW</BannerButton>
            <BannerClose onClick={onClose}>
              <AiOutlineClose />
            </BannerClose>
          </BannerTextContainer>
        </BannerContainer>
      )}
    </>
  )
}

export default Banner
