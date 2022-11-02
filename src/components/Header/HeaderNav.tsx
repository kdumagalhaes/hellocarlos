import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
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
              <a href="#about-me">sobre mim</a>
            </li>
            <li className="nav-item">
              <a href="#projects">projetos</a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1S9C7Sui-NtTu1VSGeM-rONIvqXBAfYMV/preview"
                target="_blank"
                rel="noreferrer"
              >
                currículo
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">contato</a>
            </li>
          </ul>
        </NavMenu>
        <LanguageSwitcher />
      </Header>
    </Container>
  )
}
