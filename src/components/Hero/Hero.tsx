import { Container } from './styles'

export function Hero() {
  return (
    <Container>
      <h2 className="name">Carlos Pereira</h2>
      <p className="bio-description">
        Graduado em Publicidade e propaganda e Análise e desenvolvimento de
        sistemas, atualmente trabalhando como
        <strong> Product Support Engineer</strong> pleno, na VTEX.
      </p>
      <div className="buttons-wrapper">
        <a
          href="https://drive.google.com/file/d/1S9C7Sui-NtTu1VSGeM-rONIvqXBAfYMV/preview"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Currículo
        </a>
        <a href="#projects" className="link">
          Meus projetos
        </a>
      </div>
    </Container>
  )
}
