import styled from 'styled-components'

export const Select = styled.select`
  width: 40px;
  height: 40px;
  background-color: transparent;
  text-align-last: center;
  border: 1px solid ${(props) => props.theme.magnolia};
  border-radius: 6px;
  outline: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.magnolia};
`
