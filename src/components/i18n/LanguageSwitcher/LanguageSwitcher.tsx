import { Select } from './styles'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, useEffect, useState } from 'react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const [language, setLanguage] = useState('')

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  useEffect(() => {
    language ? i18n.changeLanguage(language) : i18n.changeLanguage('')
  }, [language, i18n])

  return (
    <Select onChange={handleSelection}>
      <option value="pt-BR">PT</option>
      <option value="en-US">EN</option>
      <option value="fr-FR">FR</option>
    </Select>
  )
}
