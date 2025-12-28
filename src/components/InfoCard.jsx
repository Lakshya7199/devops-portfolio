import "../styles/infoCard.css"

function InfoCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" className="info-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>View PDF →</span>
    </a>
  )
}

export default InfoCard
