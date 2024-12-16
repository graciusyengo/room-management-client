import React from 'react'
import "./FeaturedRooms.css"
import { GoHeart } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function FeaturedRooms() {
  return (
<section className="featured-rooms">
  <h2>Suggestions</h2>
  <p>
    Découvrez les lieux mis en avant ce mois-ci parmi une sélection de plus
    de 20 000 établissements situés en France, en Belgique et en Suisse.
  </p>

  <div className="room-grid">
    <div className="room-card">
      <span className="tag">Salle</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image1.jpg" alt="Winhome Bellecour" />
      <div className="room-info">
        <h3>Winhome Bellecour</h3>
        <p>Lyon 2ème arrondissement (Rhône)</p>
        <div className="rating">
          ★★★☆☆ 
        </div>
        <button className="contact-btn">Contacter</button>
      </div>
    </div>

    <div className="room-card">
      <span className="tag">Salle</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image2.jpg" alt="Appartement Le Loft Triangle d’Or" />
      <div className="room-info">
        <h3>Appartement Le Loft Triangle d’Or</h3>
        <p>Paris 8ème (Paris)</p>
        <div className="rating">
          ★★★★☆ 
        </div>
        <button className="contact-btn">Contacter</button>
      
      </div>
    </div>

    <div className="room-card">
      <span className="tag">Salle</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image2.jpg" alt="Appartement Le Loft Triangle d’Or" />
      <div className="room-info">
        <h3>Appartement Le Loft Triangle d’Or</h3>
        <p>Paris 8ème (Paris)</p>
        <div className="rating">
          ★★★★☆ 
        </div>
        <button className="contact-btn">Contacter</button>
      
      </div>
    </div>


    <div className="room-card">
      <span className="tag">Salle</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image2.jpg" alt="Appartement Le Loft Triangle d’Or" />
      <div className="room-info">
        <h3>Appartement Le Loft Triangle d’Or</h3>
        <p>Paris 8ème (Paris)</p>
        <div className="rating">
          ★★★★☆ 
        </div>
        <button className="contact-btn">Contacter</button>
      
      </div>
    </div>

    <div className="room-card provider-card">
      <span className="tag">Prestataire</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image3.jpg" alt="LeVeL Paris Club" />
      <div className="room-info">
        <h3>LeVeL Paris Club</h3>
        <p>Paris 8ème (Paris)</p>
        <p className="services">Services offerts : Décoration, Musique</p>
        <div className="rating">
          ★★★★★
        </div>
        <button className="contact-btn">Contacter</button>
     
      </div>
    </div>


    
    <div className="room-card provider-card">
      <span className="tag">Prestataire</span>
      <span className="heart-icon"><GoHeart />
      </span>
      <img src="../img/image3.jpg" alt="LeVeL Paris Club" />
      <div className="room-info">
        <h3>LeVeL Paris Club</h3>
        <p>Paris 8ème (Paris)</p>
        <p className="services">Services offerts : Décoration, Musique</p>
        <div className="rating">
          ★★★★★
        </div>
        <button className="contact-btn">Contacter</button>
     
      </div>
    </div>
  </div>
</section>



  )
}

export default FeaturedRooms
