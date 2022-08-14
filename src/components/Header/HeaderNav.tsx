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
              <a href="#about-me">about me</a>
            </li>
            <li className="nav-item">
              <a href="#projects">projects</a>
            </li>
            <li className="nav-item">
              <a
                href="https://docs.google.com/document/d/1j8gyBn0wBx-nWUtVNRD5MEvkPCKCfxRCoMG55dWx_CY/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </NavMenu>
      </Header>
    </Container>
  )
}
