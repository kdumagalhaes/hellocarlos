import ProfilePic from '../../../images/profile-pic.webp'
import styles from './ProfilePicture.module.scss'
const ProfilePicture = () => {
  return (
    <img
      className={styles.image}
      src={ProfilePic}
      alt="carlos pereira black and white picture"
    />
  )
}

export default ProfilePicture
