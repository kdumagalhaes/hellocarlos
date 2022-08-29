import { Container } from './styles'

export function Hero() {
  return (
    <Container>
      <h2 className="name">Carlos Pereira</h2>
      <p className="bio-description">
        Graduated in Advertising, Software Development student currently working
        as <strong>Product Support Engineer</strong> at VTEX.
      </p>
      <div className="buttons-wrapper">
        <a
          href="https://drive.google.com/file/d/1TP5-ap0kg_rmWGaplx6linlmZjZZ_1Ef/view"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Resume
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </div>
    </Container>
  )
}
