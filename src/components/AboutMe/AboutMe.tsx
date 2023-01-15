import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, Bio } from './styles'

// assets
import ProfilePicture from '../../assets/images/profile-pic.webp'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Translator } from '../i18n/Translator/Translator'

export function AboutMe() {
  return (
    <Container id="about-me">
      <SectionTitle text="aboutMe.title" />
      <Bio>
        <img
          className="profile-pic"
          src={ProfilePicture}
          alt="carlos pereira's picture"
        />
        <div className="wrapper">
          <p className="paragraph">
            <Translator path="aboutMe.firstParagraph" />
          </p>
          <p className="paragraph">
            <Translator path="aboutMe.secondParagraph" />
          </p>
          <p className="paragraph">
            <Translator path="aboutMe.thirdParagraph" />
          </p>
          <div className="resume-social">
            <a
              className="link"
              href="https://drive.google.com/file/d/1S9C7Sui-NtTu1VSGeM-rONIvqXBAfYMV/preview"
              target="_blank"
              rel="noreferrer"
            >
              <Translator path="aboutMe.resumeBtn" />
            </a>
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
