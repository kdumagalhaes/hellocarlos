import styles from './ProfileName.module.scss'
const ProfileName = () => {
  return (
    <>
      <h1 className={styles.title}>Carlos Pereira</h1>
      <h2 className={styles['sub-title']}>Software Developer</h2>
    </>
  )
}

export default ProfileName
