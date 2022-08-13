import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 4.4rem 0;

  @media (max-width: 480px) {
    padding: 1.1rem 0;
  }
`

export const ProjectsGrid = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`
