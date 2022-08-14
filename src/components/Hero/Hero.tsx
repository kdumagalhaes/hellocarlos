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
          href="https://docs.google.com/document/d/1j8gyBn0wBx-nWUtVNRD5MEvkPCKCfxRCoMG55dWx_CY/edit?usp=sharing"
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
