import { Button } from '../Button/Button'
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
        <Button text="Resumé" />
        <Button text="Contact" />
      </div>
    </Container>
  )
}
