import styles from './ProfileSocialMedia.module.scss'
import LinkedinIcon from '../../../images/icons/linkedin.svg'
import GitHubIcon from '../../../images/icons/github.svg'
const ProfileSocialMedia = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kdumagalhaes/"
          rel="noreferrer"
        >
          <img className={styles.icon} src={LinkedinIcon} alt="linkedin icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/kdumagalhaes"
          rel="noreferrer"
        >
          <img className={styles.icon} src={GitHubIcon} alt="github icon" />
        </a>
      </li>
    </ul>
  )
}

export default ProfileSocialMedia
