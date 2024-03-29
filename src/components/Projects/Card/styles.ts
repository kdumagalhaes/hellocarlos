import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['raisin-darker']};
  border-radius: 3px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  max-width: 33rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  .wrapper {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .thumbnail {
    object-fit: cover;
    height: 15rem;
    max-width: 33rem;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    border-bottom: 5px solid ${(props) => props.theme['forest-green']};
  }

  .title {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['forest-green']};
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.3rem;
    margin-bottom: 1rem;
  }

  .links-language {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }

  .url {
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme['forest-green']};
    border-radius: 3px;
    color: ${(props) => props.theme['forest-green']};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background-color: ${(props) => props.theme['forest-green']};
      color: ${(props) => props.theme['raisin-darker']};
    }
  }

  .techs {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .language {
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    .thumbnail {
      width: 100%;
    }
  }
`
