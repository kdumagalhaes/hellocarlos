import { useTranslation } from 'react-i18next'
import { Bar, Container, Title } from './styles'

interface SectionTitleProps {
  text: string
}

export function SectionTitle({ text }: SectionTitleProps) {
  const { t } = useTranslation()

  return (
    <Container>
      <Title>{t(text)}</Title>
      <Bar />
    </Container>
  )
}
