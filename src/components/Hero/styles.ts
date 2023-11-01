import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3rem;

  .video-bg {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }

  .name {
    font-size: 4rem;
    font-weight: 700;
  }

  .bio-description {
    max-width: 40rem;
    text-align: center;
    line-height: 180%;
  }

  .buttons-wrapper {
    display: flex;
    gap: 1rem;
  }

  .link {
    padding: 0.2rem 1.5rem;
    border: 2px solid ${(props) => props.theme.magnolia};
    border-radius: 6px;
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

  @media (max-width: 480px) {
    gap: 1.5rem;

    .name {
      font-size: 2.5rem;
    }

    .bio-description {
      max-width: 20rem;
    }
  }
`
