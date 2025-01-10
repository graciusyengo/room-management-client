import React from 'react'
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Testimonials() {
  return (
<section className="testimonials">

<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 3000, // 3 secondes entre les slides
            disableOnInteraction: false, // Continue même après interaction de l'utilisateur
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiperTestimonial"
      >
        <SwiperSlide className='swiper-slideTestimonial'> <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Jean Dupont"/>
      </div>
      <div className="client-info">
        <h3>Jean Dupont</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Un service exceptionnel ! Les salles sont magnifiques, et l'équipe est très professionnelle. Je recommande vivement."
    </p>
  </div></SwiperSlide >

        <SwiperSlide  className='swiper-slideTestimonial'>  <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Paul Martin"/>
      </div>
      <div className="client-info">
        <h3>Paul Martin</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Très satisfait ! La rapidité et l’efficacité de l’équipe sont impressionnantes. Je reviendrai sans hésitation."
    </p>
  </div></SwiperSlide >
        <SwiperSlide  className='swiper-slideTestimonial'>  <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Paul Martin"/>
      </div>
      <div className="client-info">
        <h3>Paul Martin</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Très satisfait ! La rapidité et l’efficacité de l’équipe sont impressionnantes. Je reviendrai sans hésitation."
    </p>
  </div></SwiperSlide>
        <SwiperSlide  className='swiper-slideTestimonial'>  <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Paul Martin"/>
      </div>
      <div className="client-info">
        <h3>Paul Martin</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Très satisfait ! La rapidité et l’efficacité de l’équipe sont impressionnantes. Je reviendrai sans hésitation."
    </p>
  </div></SwiperSlide>
        <SwiperSlide  className='swiper-slideTestimonial'>  <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Paul Martin"/>
      </div>
      <div className="client-info">
        <h3>Paul Martin</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Très satisfait ! La rapidité et l’efficacité de l’équipe sont impressionnantes. Je reviendrai sans hésitation."
    </p>
  </div></SwiperSlide>
        <SwiperSlide className='swiper-slideTestimonial'>  <div className="testimonial-card">
    <div className="card-header">
      <div className="client-photo">
        <img src="img/salle.jpg" alt="Paul Martin"/>
      </div>
      <div className="client-info">
        <h3>Paul Martin</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <p className="testimonial-text">
      "Très satisfait ! La rapidité et l’efficacité de l’équipe sont impressionnantes. Je reviendrai sans hésitation."
    </p>
  </div></SwiperSlide>
       
      </Swiper>


</section>

  )
}

export default Testimonials