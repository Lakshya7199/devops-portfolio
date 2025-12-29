import "../styles/infoCard.css";

const InfoCard = ({ title, description, onClick }) => {
  return (
    <div className="info-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="info-cta">Click to explore →</span>
    </div>
  );
};

export default InfoCard;
