import styled, { keyframes } from 'styled-components'

const AnimateBg = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

export const Container = styled.main`
  height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3rem;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    ${(props) => props.theme.independance} 0%,
    ${(props) => props.theme['forest-green']} 100%
  );
  animation: ${AnimateBg} 10s ease infinite;

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
