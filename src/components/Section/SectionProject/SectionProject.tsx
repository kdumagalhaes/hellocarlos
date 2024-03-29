import { Project } from '../../Project'
import styles from './SectionProject.module.scss'
import PROJECTS from '../../../data/projects.json'
const SectionProject = () => {
  return (
    <div className={styles.container}>
      {PROJECTS.map((project) => {
        return (
          <div key={project.id} className={styles.project}>
            <Project.Thumb projectId={project.id} name={project.name} />
            <Project.Description
              name={project.name}
              description={project.description}
              techs={project.techs}
            />
            <Project.Buttons
              live={project.live}
              repository={project.repository}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SectionProject
