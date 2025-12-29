import "../styles/modal.css";

const Modal = ({ title, description, items, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <h2>{title}</h2>

        <p className="modal-description">
          {description}
        </p>

        <div className="modal-list">
          {items.map((item, index) => (
            <div className="modal-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-more"
              >
                View more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
