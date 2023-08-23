import styled from 'styled-components'

export const SidebarContainer = styled.div`
  //   height: ;
  width: 220px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme === true ? '#fff' : '#191919')};
  justify-content: space-between;
  @media (max-width: 576px) {
    display: none;
  }
`
export const UlContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: ${props => (props.theme === true ? '#1e293b' : '#fff')};
`

export const LiItem = styled.li`
  margin-bottom: 4px;
`
export const ContactDiv = styled.div`
  padding: 20px;
  font-family: 'Times New Roman', Times, serif;
`
export const ContactLogo = styled.img`
  height: 30px;
  margin: 10px 10px 10px 0;
`
