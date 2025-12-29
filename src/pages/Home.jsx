import { useState } from "react";
import InfoCard from "../components/InfoCard";
import Modal from "../components/Modal";
import "../styles/home.css";

import { researchData } from "../data/researchData";
import { achievementsData } from "../data/achievementsData";
import { certificationsData } from "../data/certificationsData";

const Home = () => {
  const [modalData, setModalData] = useState(null);

  const cards = [researchData, achievementsData, certificationsData];

  return (
    <>
      {/* HERO */}
      <section className="hero fade-in">
        <h1>Hi, I’m Lakshya 👋</h1>
        <p>
          I’m a <strong>DevOps & Cloud Engineer</strong> focused on building
          reliable, scalable infrastructure using{" "}
          <strong>AWS, Kubernetes, Terraform</strong>, and modern cloud-native
          practices.
        </p>
      </section>

      {/* CARDS */}
      <section className="info-section">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            onClick={() => setModalData(card)}
          />
        ))}
      </section>

      {/* MODAL */}
      {modalData && (
        <Modal
          title={modalData.title}
          description={modalData.intro}
          items={modalData.items}
          onClose={() => setModalData(null)}
        />
      )}
    <section className="philosophy fade-in">
      <h2>How I Approach DevOps</h2>
      <p>
        I design and operate systems with a focus on <strong>reliability</strong>,
        <strong> security</strong>, and <strong>automation</strong>. My approach
        emphasizes Infrastructure as Code, least-privilege access, production-grade
        observability, and eliminating manual operational work wherever possible.
      </p>
    </section>
    <section className="tools">
      <h2>Core Tooling</h2>
      <div className="tools-grid">
        <span>AWS (EKS, IAM, S3, CloudFront, Lambda)</span>
        <span>Terraform (IaC, State, Modules)</span>
        <span>Docker & Kubernetes</span>
        <span>GitHub Actions (CI/CD)</span>
        <span>Prometheus & Grafana</span>
        <span>OpenSearch</span>
      </div>
    </section>

    </>
  );
};

export default Home;
