import { AnimatedRole } from './AnimatedRole/AnimatedRole'
import { Container } from './styles'

export function Hero() {
  return (
    <Container>
      <h2 className='name'>Carlos Pereira</h2>
      <AnimatedRole />
      <p className="bio-description">
        Graduated in Advertising, Software Development student currently working
        as Product Support Engineer at VTEX.
      </p>
    </Container>
  )
}
