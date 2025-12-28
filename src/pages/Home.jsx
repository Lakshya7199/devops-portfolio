import InfoCard from "../components/InfoCard"

function Home() {
  return (
    <section id="home" className="home">
      <h2>Hi, I’m Lakshya 👋</h2>
      <p>
        DevOps & Cloud Engineer specializing in AWS, Kubernetes,
        Terraform, and scalable cloud infrastructure.
      </p>

      <div className="info-grid">
        <InfoCard
          title="Research & Deep Dives"
          description="Technical research and explorations on DevOps, AWS, OpenSearch, and Kubernetes."
          link="/docs/AWS OpenSearch Integration with IAM Identity Center.pdf"
        />
        <InfoCard
          title="Achievements"
          description="Certifications, recognitions, and professional milestones."
          link="/docs/OpenSearch_IAM_Identity_Center_Carousel.pdf"
        />
      </div>
    </section>
  )
}

export default Home
