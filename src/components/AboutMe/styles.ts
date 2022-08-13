import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  padding-top: 4.4rem;

  @media (max-width: 480px) {
    padding: 1.1rem 0;
  }
`

export const Bio = styled.div`
border-radius: 6px;
padding: 1rem;
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
    max-width: 19rem;
    max-height: 28.5rem;
    border-radius: 6px;
  }

  .resume-social {
    margin-top: 2.5rem;
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

    .profile-pic {
      max-width: 100%;
      max-height: 100%;
    }
  }
`
