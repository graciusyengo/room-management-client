import React, { useContext, useEffect, useState } from 'react'
import "./FeaturedRooms.css"
import { GoHeart } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IRoomData } from '../../types/type';
import { useRooms } from '../../context/RoomContext';


function FeaturedRooms() {
  const { rooms, error } = useRooms();
console.log("###",rooms)
  return (
<section className="featured-rooms">
  <h2>Suggestions</h2>
  <p>
  Découvrez les lieux mis en avant ce mois-ci parmi une sélection exclusive de salles des fêtes situées à Kinshasa.
  </p>
     <div className="room-grid">
     {rooms.map((room,index)=>(
     <div className="room-card" key={index}>
       <span className="tag">Salle</span>
       <span className="heart-icon"><GoHeart />
       </span>
  <img src={`/img/${room.images}`} alt={room.nom}  />
       <div className="room-info">
         <h3>{room.nom}</h3>
         <p>{room.adresse}</p>
         <div className="rating">
           ★★★☆☆ 
         </div>
         <button className="contact-btn">Contacter</button>
       </div>
     </div>
))}
   </div>



 
</section>



  )
}

export default FeaturedRooms


