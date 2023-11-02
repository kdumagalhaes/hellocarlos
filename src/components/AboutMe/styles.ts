import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  padding-top: 4.4rem;

  @media (max-width: 480px) {
    padding: 1.1rem 0;
  }
`

export const Bio = styled.div`
  background-color: ${(props) => props.theme['raisin-darker']};
  border-radius: 4px;
  padding: 1.5rem;
  margin: 1rem auto;
  max-width: 55rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  .paragraph {
    line-height: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .profile-pic {
    max-width: 17rem;
    max-height: 26.5rem;
    border-radius: 4px;
  }

  .link {
    padding: 0.9rem 1.5rem;
    border: 1px solid ${(props) => props.theme.magnolia};
    border-radius: 3px;
    background: transparent;
    color: ${(props) => props.theme.magnolia};
    transition: all 0.3s;
    font-size: 1.1rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme['forest-green']};
      background-color: ${(props) => props.theme.magnolia};
    }
  }

  .resume-social {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      gap: 2rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    box-shadow: none;
    padding: 1rem;

    .profile-pic {
      max-width: 100%;
      max-height: 100%;
    }
  }
`
