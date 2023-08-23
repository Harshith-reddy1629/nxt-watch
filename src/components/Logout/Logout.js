import styled from 'styled-components'

export const PopopContent = styled.div`
  height: 100%;
  color: ${props => (props.theme === true ? '#191919' : '#fff')};
  background-color: ${props => (props.theme === true ? '#fff' : '#191919')};
  border-radius: 6px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export const Sample = styled.p``
