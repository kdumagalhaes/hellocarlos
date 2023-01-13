import { Select } from './styles'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, useEffect, useState } from 'react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const [language, setLanguage] = useState('')
  const [locale, setLocale] = useState('')

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
  }

  useEffect(() => {
    language ? i18n.changeLanguage(language) : i18n.changeLanguage('')
  }, [language, i18n])

  useEffect(() => {
    const localeSetInLocalStorage = localStorage.getItem('i18nextLng')
    if (localeSetInLocalStorage) {
      setLocale(localeSetInLocalStorage)
    }
  }, [])

  return (
    <Select onChange={handleSelection}>
      <option value="pt-BR" selected={locale === 'pt-BR'}>
        PT
      </option>
      <option value="en-US" selected={locale === 'en-US'}>
        EN
      </option>
      <option value="fr-FR" selected={locale === 'fr-FR'}>
        FR
      </option>
    </Select>
  )
}
