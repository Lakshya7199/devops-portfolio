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
    </>
  );
};

export default Home;
