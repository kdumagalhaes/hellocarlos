import { useTranslation } from 'react-i18next'

interface TranslatorProps {
  path: string
}

export function Translator({ path }: TranslatorProps) {
  const { t } = useTranslation()

  return <>{t(path)}</>
}
