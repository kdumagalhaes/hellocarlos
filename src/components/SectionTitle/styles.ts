import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`

export const Title = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 700;
`

export const Bar = styled.span`
  margin-top: 1rem;
  width: 100px;
  height: 2px;
  background-color: ${(props) => props.theme['forest-green']};
`
