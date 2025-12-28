import ProjectCard from "../components/ProjectCard"
import "../styles/projects.css"

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          title="AWS OpenSearch Monitoring"
          description="Designed and deployed real-time alerting using OpenSearch, SNS, and Lambda with IAM-based security."
        />
        <ProjectCard
          title="CI/CD with GitHub Actions"
          description="Automated testing and deployment pipeline."
        />
      </div>
    </section>
  )
}

export default Projects
