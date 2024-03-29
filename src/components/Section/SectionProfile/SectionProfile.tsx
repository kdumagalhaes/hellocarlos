import { Profile } from '../../Profile'
import styles from './SectionProfile.module.scss'
const SectionProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <Profile.Picture />
      </div>
      <div className={styles.content}>
        <Profile.Name />
        <Profile.Biography />
        <Profile.SocialMedia />
      </div>
    </div>
  )
}

export default SectionProfile
