import React from 'react'
import "./MunicipalityRoom.css"
import { BiHomeSmile } from 'react-icons/bi'
import { FaMartiniGlassEmpty, FaPersonChalkboard } from 'react-icons/fa6'
import { HiOutlineCake } from 'react-icons/hi2'
import { ImManWoman } from 'react-icons/im'
import { LiaUniversitySolid } from 'react-icons/lia'
import { MdOutlineFestival } from 'react-icons/md'
import { useRooms } from '../../context/RoomContext'



function MunicipalityRoom() {

    const { rooms, error } = useRooms();

  // console.log('######',rooms)


  return (
   <div className="container-municipality-room">
         <h2 className="title-municilpality">Location des salles par commune ?</h2>
         <div className="cards">

          {rooms.map((room,key)=>(
            <div className="card" key={key}>
            <ImManWoman  size={45} className="manWoman"/>
            <div>{room.commune}</div>
          </div>

          ))}
           

           
         </div>
       </div>
  )
}

export default MunicipalityRoom