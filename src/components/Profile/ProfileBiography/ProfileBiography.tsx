import styles from './ProfileBiography.module.scss'
const ProfileBiography = () => {
  return (
    <p className={styles.paragraph}>
      Tech/music lover & Frontend Dev with diverse experience, team-focused for
      optimal outcomes, currently working at
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
