import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Let’s Connect</h1>
      <p>
        I’m always open to discussions around DevOps, cloud architecture,
        reliability engineering, and impactful infrastructure work.
      </p>

      <div className="contact-cards">
        <a
          href="mailto:lakshya@example.com"
          className="contact-card"
        >
          📧
          <span>Email</span>
          <small>lakshya@example.com</small>
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="contact-card"
        >
          📞
          <span>Phone</span>
          <small>+91 XXXXX XXXXX</small>
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          💼
          <span>LinkedIn</span>
          <small>linkedin.com/in/your-linkedin</small>
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          🧑‍💻
          <span>GitHub</span>
          <small>github.com/your-github</small>
        </a>
      </div>
    </section>
  );
};

export default Contact;
