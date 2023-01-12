import styled from 'styled-components'

export const Select = styled.select`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.magnolia};
  border-radius: 6px;
  outline: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.magnolia};
`
