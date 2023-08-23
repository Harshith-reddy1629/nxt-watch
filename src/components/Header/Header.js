import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 35px;
  background-color: ${props => (props.theme === true ? '#fff' : '#181818')};
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`
export const NavLogout = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#3b82f6' : '#fff')};
  color: ${props => (props.theme === true ? '#3b82f6' : '#fff')};
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 3px;
  :hover {
    color: ${props => (props.theme === true ? '#fff' : '#181818')};
    background-color: ${props => (props.theme === true ? '#3b82f6' : '#fff')};
  }
`

export const NavProfile = styled.img`
  height: 30px;
`

export const NavprofileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const ModeButton = styled.button`
  background-color: transparent;
  border: 0px solid ${props => (props.theme === true ? '#000' : '#fff')};
  color: ${props => (props.theme === true ? '#000' : '#fff')};
  font-weight: bold;
  font-size: 15px;
  border-radius: 15px;
  outline: none;
  height: 25px;
  width: 25px;
`
