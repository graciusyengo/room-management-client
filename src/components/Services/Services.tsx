import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="container-services">
      <h2 className="title-service">
        Quels prestataires recherchez-vous pour votre événement ?
      </h2>
      <p>
        Pour un événement réussi, je gère tous les prestataires dont j’ai besoin
        depuis mon compte.
      </p>
      <div className="grid">
        <div className="grid-item">
          <div className="overlay">
            <div className="icon">🎵</div>
            <div className="name">Animation musicale</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="overlay">
            <div className="icon">🎭</div>
            <div className="name">Animations & Spectacles</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="overlay">
            <div className="icon">💇</div>
            <div className="name">Beauté - Coiffure</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="overlay">
            <div className="icon">💎</div>
            <div className="name">Bijoux</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
