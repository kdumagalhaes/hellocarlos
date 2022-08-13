import { Bar, Container, Title } from './styles'

interface SectionTitleProps {
  text: string
}

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <Container>
      <Title>{text}</Title>
      <Bar />
    </Container>
  )
}
