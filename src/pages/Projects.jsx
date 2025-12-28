import ProjectCard from "../components/ProjectCard"
import "../styles/projects.css"

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          title="AWS OpenSearch Monitoring"
          description="Real-time alerting using OpenSearch, SNS and Lambda."
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
