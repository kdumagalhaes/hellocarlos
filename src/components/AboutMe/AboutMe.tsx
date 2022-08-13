import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, Bio } from './styles'

// assets
import ProfilePicture from '../../assets/images/profile-pic.webp'
import { Button } from '../Button/Button'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export function AboutMe() {
  return (
    <Container>
      <SectionTitle text="About Me" />
      <Bio>
        <img
          className="profile-pic"
          src={ProfilePicture}
          alt="carlos pereira's picture"
        />
        <div className="wrapper">
          <p className="paragraph">
            Luso-Brazilian professional graduated in Advertising and Software
            Development, passionate for <strong>Front-end development</strong>.
          </p>
          <p className="paragraph">
            I am currently a mid-level Product Support Specialist working on the
            VTEX IO, VTEX Store Framework, VTEX CMS and SRE at VTEX, which has
            allowed me to be directly related to the vision and future of our
            main products, in addition to being in direct contact with Front-end
            tools such as React Developer Tools, VTEX IO CLI (VTEX Toolbelt),
            JavaScript, React JS, CSS, and many others.
          </p>
          <p className="paragraph">
            Previously, I was responsible for managing the Physical Stores
            Product Support Analysts team. As a Product Support Leader, my role
            was to ensure well-being and provide the best environment for the
            team to work with high performance and engagement. In addition, I
            also conducted the planning of actions based on our demands and
            goals.
          </p>
          <div className="resume-social">
            <Button text="Resumé" />
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/kdumagalhaes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={38} color="#EFE9F4" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kdumagalhaes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={38} color="#EFE9F4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Bio>
    </Container>
  )
}
