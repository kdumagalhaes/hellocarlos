import { Container } from './styles'
import { Translator } from '../i18n/Translator/Translator'

export function Hero() {
  return (
    <Container>
      <h2 className="name">Carlos Pereira</h2>
      <p className="bio-description">
        <Translator path="hero.message" />
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
