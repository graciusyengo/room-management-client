import React from "react";
import "./TypeRoom.css";
import { HiOutlineCake } from "react-icons/hi2";
import { ImManWoman } from "react-icons/im";
import { MdOutlineFestival } from "react-icons/md";
import { FaMartiniGlassEmpty } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BiHomeSmile } from "react-icons/bi";

import { LiaUniversitySolid } from "react-icons/lia";
function TypeRoom() {
  return (
    <div className="container-type-room">
      <h2 className="title-type">Quelle salle recherchez-vous ?</h2>
      <div className="cards">
        <div className="card">
          <ImManWoman  size={45} className="manWoman"/>
          <div>Salle de Mariage</div>
        </div>
        <div className="card">
          <MdOutlineFestival size={45} className="outlineFestical"/>
          <div>Salle de Réception</div>
        </div>
        <div className="card">
          <HiOutlineCake size={45} className="outlineCake" />
          <div>Salle de D'anniversaire</div>
        </div>
        <div className="card">
          <LiaUniversitySolid  size={45} className="universitySolid" />
          <div>Salle Universitaire</div>
        </div>
        <div className="card">
          <FaMartiniGlassEmpty size={45} className="martiniGlassEmpty" />
          <div>Salle de Fêtes</div>
        </div>
        <div className="card">
          <BiHomeSmile size={45}  className="homeSmile"/>
          <div>Château Mariage</div>
        </div>

        <div className="card">
          <FaPersonChalkboard  size={45} className="personneChalkboard" />
          <div>Salle Séminaire</div>
        </div>
      </div>
    </div>
  );
}

export default TypeRoom;
