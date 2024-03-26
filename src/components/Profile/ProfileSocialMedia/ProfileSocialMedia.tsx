import styles from './ProfileSocialMedia.module.scss'
const ProfileSocialMedia = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a target="_blank" href="#">
          Linkedin
        </a>
      </li>
      <li>
        <a target="_blank" href="#">
          GitHub
        </a>
      </li>
    </ul>
  )
}

export default ProfileSocialMedia
