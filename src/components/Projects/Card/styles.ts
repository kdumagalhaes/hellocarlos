import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 6px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  max-width: 33rem;

  .wrapper {
    padding: 1rem;
  }

  .thumbnail {
    max-width: 33rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
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
  }

  .url {
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme['forest-green']};
    border-radius: 6px;
    color: ${(props) => props.theme['forest-green']};
    text-decoration: none;
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
