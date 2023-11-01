import { Container } from './styles'
import { Translator } from '../i18n/Translator/Translator'
import VideoBG from '../../assets/videos/video-bg.mp4'

export function Hero() {
  return (
    <Container>
      <video className="video-bg" autoPlay muted loop>
        <source src={VideoBG} type="video/mp4" />
      </video>
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
          <Translator path="hero.btnResume" />
        </a>
        <a href="#projects" className="link">
          <Translator path="hero.btnProjects" />
        </a>
      </div>
    </Container>
  )
}
