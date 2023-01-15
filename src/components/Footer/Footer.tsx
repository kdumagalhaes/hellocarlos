import { Translator } from '../i18n/Translator/Translator'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <footer>
        <p>
          <Translator path="footer.text" /> <strong>React</strong> +{' '}
          <strong>TypeScript</strong> :)
        </p>
      </footer>
    </Container>
  )
}
