import { LanguageSwitcher } from '../i18n/LanguageSwitcher/LanguageSwitcher'
import { Translator } from '../i18n/Translator/Translator'
import { Container, Header, Logo, NavMenu } from './styles'

export function HeaderNav() {
  return (
    <Container>
      <Header>
        <Logo>
          cp<span className="logo-dot">.</span>
          <span className="seo-text">Carlos Pereira - Frontend developer</span>
        </Logo>
        <NavMenu>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about-me">
                <Translator path="header.navAboutMe" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects">
                <Translator path="header.navProjects" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1S9C7Sui-NtTu1VSGeM-rONIvqXBAfYMV/preview"
                target="_blank"
                rel="noreferrer"
              >
                <Translator path="header.navResume" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <Translator path="header.navContact" />
              </a>
            </li>
          </ul>
        </NavMenu>
        <LanguageSwitcher />
      </Header>
    </Container>
  )
}
