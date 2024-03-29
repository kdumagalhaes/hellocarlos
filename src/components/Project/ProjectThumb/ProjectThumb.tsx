import getThumbnail from '../../../utils/getThumbnail'
import styles from './ProjectThumb.module.scss'
interface ProjectThumbProps {
  projectId: string
  name: string
}
const ProjectThumb = ({ projectId, name }: ProjectThumbProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.thumbnail}
        src={getThumbnail(projectId)}
        alt={name}
      />
    </div>
  )
}

export default ProjectThumb
