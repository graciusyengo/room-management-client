import React from 'react'
import "./MunicipalityRoom.css"
import { BiHomeSmile } from 'react-icons/bi'
import { FaMartiniGlassEmpty, FaPersonChalkboard } from 'react-icons/fa6'
import { HiOutlineCake } from 'react-icons/hi2'
import { ImManWoman } from 'react-icons/im'
import { LiaUniversitySolid } from 'react-icons/lia'
import { MdOutlineFestival } from 'react-icons/md'



function MunicipalityRoom() {

  // const { rooms, error } = useRooms();

  // console.log('######',rooms)


  return (
   <div className="container-municipality-room">
         <h2 className="title-municilpality">Location des salles par commune ?</h2>
         <div className="cards">
           <div className="card">
             <ImManWoman  size={45} className="manWoman"/>
             <div>Makala</div>
           </div>
           <div className="card">
             <MdOutlineFestival size={45} className="outlineFestical"/>
             <div>Gombe</div>
           </div>
           <div className="card">
             <HiOutlineCake size={45} className="outlineCake" />
             <div>Lemba</div>
           </div>
           <div className="card">
             <LiaUniversitySolid  size={45} className="universitySolid" />
             <div>Matete</div>
           </div>
           <div className="card">
             <FaMartiniGlassEmpty size={45} className="martiniGlassEmpty" />
             <div>Ngaliema</div>
           </div>
           <div className="card">
             <BiHomeSmile size={45}  className="homeSmile"/>
             <div>Masina</div>
           </div>
           <div className="card">
             <FaPersonChalkboard  size={45} className="personneChalkboard" />
             <div>Limete</div>
           </div>
         </div>
       </div>
  )
}

export default MunicipalityRoom