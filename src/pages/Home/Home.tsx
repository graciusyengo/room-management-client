import React, { useEffect, useState } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FeaturedRooms from "../../components/Featured-rooms/FeaturedRooms"
import Banner from "../../components/Banner/Banner"
import TypeRoom from "../../components/Type-room/TypeRoom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MunicipalityRoom from "../../components/Municipality-room/MunicipalityRoom";

function Home() {

  const [showTextRecherche,setShowTextRecherche]= useState(window.innerWidth<=375)
 
  useEffect(() => {
    const handleResize = () => {
      setShowTextRecherche(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-home">
      <div className="slider-content">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Temps entre les slides (en millisecondes)
            disableOnInteraction: false,
          }}
          speed={800}
          className="mySwiper"
        >
          <div className="background-layer">
            <SwiperSlide
              className="background-slide"
              style={{ backgroundImage: `url("../img/salle.jpg")` }}
            ></SwiperSlide>
            <SwiperSlide
              className="background-slide"
              style={{ backgroundImage: `url("../img/party.jpg")` }}
            ></SwiperSlide>
            <SwiperSlide
              className="background-slide"
              style={{ backgroundImage: `url("../img/mariage.jpg")` }}
            ></SwiperSlide>
          </div>

          <div className="search-container">
            <div className="text">
              <h1 className="title">Salle de fête</h1>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                maxime error eius amet voluptate vero dolorum esse? Debitis
                voluptatibus vitae accusantium magni officia labore. Excepturi
                saepe accusamus accusantium? Maiores, repudiandae?
              </p>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Quartier / Commune ?"
                className="input"
              />

              <select className="input">
                <option value="" disabled selected>
                  Quel type d'événement aimeriez-vous ?
                </option>
                <option value="mariage">Mariage</option>
                <option value="anniversaire">Anniversaire</option>
                <option value="conference">Conférence</option>
                <option value="soiree">Soirée</option>
                <option value="autre">Autre</option>
              </select>
              <input
                type="text"
                placeholder="Nombre de participant ?"
                className="input"
              />

             
              <button className="search-button">

              {showTextRecherche ? (
        <span>Rechercher</span>
      ) : (
        <FontAwesomeIcon icon={faSearch} />
      )}

               
              </button>
          
            </div>
          </div>
        </Swiper>
      </div>

      <FeaturedRooms />
      <Banner />
      <TypeRoom/>
      <MunicipalityRoom/>

    </div>
  );
}

export default Home;
