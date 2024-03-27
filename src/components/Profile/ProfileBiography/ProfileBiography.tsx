import styles from './ProfileBiography.module.scss'
const ProfileBiography = () => {
  return (
    <p className={styles.paragraph}>
      Graduated in Advertising and Systems Analysis and Development, currently
      working as <strong>Frontend Developer</strong> at
      <a
        className={styles.link}
        href="https://www.tekever.com/"
        target="_blank"
        rel="noreferrer"
      >
        Tekever
      </a>
    </p>
  )
}

export default ProfileBiography
