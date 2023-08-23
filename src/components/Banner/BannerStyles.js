import styled from 'styled-components'

export const BannerContainer = styled.div`
  height: 250px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 25px;
  background-size: cover;

  position: relative;
  border-bottom: 1px solid #eee;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    height: 150px;
  }
`

export const BannerLogo = styled.img`
  height: 30px;
  @media (max-width: 768px) {
    height: 18px;
  }
`

export const BannerTextContainer = styled.div`
  height: 100%;
`
export const BannerText = styled.p`
  color: #000;
  padding: 15px 0px;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 12px;
  font-weight: bold;
  margin-top: 8px;
  border-radius: 3px;
  :hover {
    background-color: #1e293b;
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`

export const BannerClose = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  position: absolute;
  right: 8px;
  top: 8px;
  height: 20px;
  width: 20px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    background-color: #fff;
    border-radius: 50%;
  }
`
