import styled from 'styled-components'

export const Container = styled.div``

export const ContactForm = styled.form`
  max-width: 55rem;
  margin: 0 auto 1.7rem auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;

  input,
  textarea {
    padding: 0.6rem;
    border-radius: 6px;
    border: none;
    outline: transparent;
    background-color: ${(props) => props.theme.magnolia};

    &:focus {
      outline: 2px solid ${(props) => props.theme['forest-green']};
    }
  }

  label {
    color: ${(props) => props.theme['forest-green']};
  }
`

export const ButtonSubmit = styled.button`
  margin-top: 1rem;
  width: 100%;
  max-width: 55rem;
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
