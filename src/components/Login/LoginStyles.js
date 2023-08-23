import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#fff' : '#181818')};
`

export const LoginCard = styled.div`
  background-color: ${props => (props.theme === true ? '#fff' : '#0f0f0f')};
  color: ${props => (props.theme === true ? '#000' : '#fff')};
  height: 420px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${props => (props.theme === true ? '0 0 12px #ccc' : '')};
`

export const LoginLogo = styled.img`
  height: 36px;
  margin-bottom: 45px;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 36px;
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#e2e8f0' : '#475569')};
  outline: none;
  padding: 10px;
  color: ${props => (props.theme === true ? '#444' : '#fff')};
`
export const LoginLabel = styled.label`
  font-size: 12px;
  color: ${props => (props.theme === true ? ' #94a3b8' : '#fff')};
  font-weight: bold;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: 0;
  outline: none;
  width: 100%;
  color: #ffffff;
  padding: 8px;
  border-radius: 6px;
  margin-top: 18px;
  //   font-weight: bold;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  padding: 0px;
  margin: 0px;
`
