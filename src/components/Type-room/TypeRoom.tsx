import React, { useEffect, useState } from "react";
import "./TypeRoom.css";
import { HiOutlineCake } from "react-icons/hi2";
import { ImManWoman } from "react-icons/im";
import { MdOutlineFestival } from "react-icons/md";
import { FaMartiniGlassEmpty } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BiHomeSmile } from "react-icons/bi";

import { LiaUniversitySolid } from "react-icons/lia";
import { useRooms } from "../../context/RoomContext";
import {  ITypeRoomData } from "../../types/type";
import { TypeRoomsService } from "../../services/TypeRoomsService";
function TypeRoom() {

  const  [typeRooms,setTypeRooms]=useState<ITypeRoomData[]>([])
  const [error,setError]= useState<string|null>(null)

  useEffect(()=>{

    const fetchTypeRooms=async()=>{

      try {
        const data= await TypeRoomsService.getTypeRoom()

        console.log(data)
        setTypeRooms(data)
      
        
      } catch (error:any) {

        setError(" erreur lors de la recuperation de type de produit")
        
      }
    }
    fetchTypeRooms()
  },[]

  
  )


  const iconMapping: Record<string, JSX.Element> = {
    ImManWoman: <ImManWoman size={45} className="manWoman" />,
    MdOutlineFestival: <MdOutlineFestival size={45} className="outlineFestival" />,
    HiOutlineCake: <HiOutlineCake size={45} className="outlineCake" />,
    LiaUniversitySolid: <LiaUniversitySolid size={45} className="universitySolid" />,
    FaMartiniGlassEmpty: <FaMartiniGlassEmpty size={45} className="martiniGlassEmpty"  />,
    BiHomeSmile: <BiHomeSmile size={45} className="homeSmile"/>,
    FaPersonChalkboard: <FaPersonChalkboard size={45} className="personneChalkboard" />,
  };

  console.log(iconMapping)
  return (
    <div className="container-type-room">
      <h2 className="title-type">Quelle salle recherchez-vous ?</h2>
      <div className="cards">
        {typeRooms.map((typeRoom)=>(
           <div className="card">
         {iconMapping[typeRoom.icon] || <div>icon non trouver</div>}
           <div>{typeRoom.type}</div>
         </div>

        ))}
       
       
      
      </div>
    </div>
  );
}

export default TypeRoom;
