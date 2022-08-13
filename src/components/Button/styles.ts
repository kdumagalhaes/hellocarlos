import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.9rem 1.5rem;
  border: 2px solid ${(props) => props.theme.magnolia};
  border-radius: 6px;
  background: transparent;
  color: ${(props) => props.theme.magnolia};
  transition: all 0.3s;
  font-size: 1.1rem;

  &:hover {
    color: ${(props) => props.theme['forest-green']};
    background-color: ${(props) => props.theme.magnolia};
  }
`
