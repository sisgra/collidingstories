import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Pohoda/pohoda1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Pohoda/pohoda2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Pohoda/pohoda3.jpg';
import item4 from '../../../../../assets/images//portfolio/items/Pohoda/pohoda4.jpg'

// Styles
import './style.css';

// -------------------

function PortfolioItem6() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="image-slider-wrapper relative block-right">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination]}
            className="portfolio-slider">
            <SwiperSlide>
              <img src={item1} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item2} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item3} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item4} alt="portfolio item 1" />
            </SwiperSlide>
          </Swiper>
        </div>

        <h2 className="title">POHODA MUSIC FESTIVAL</h2>

        <p className="section-des">
        Plusieurs performances sur scène - une fois n'est pas coutume - lors du plus gros festival de musiques actuelles slovaque, accueillant plus de 30 000 personnes sur 3 jours, sur les pistes de l'aéroport de Trencin. Un espace bien approprié, pour conter une rêverie d'envol ! 
        Pour la première fois avec un micro aussi - jauge oblige -, ce qui aura donné lieu à un jeu dans l'espace un peu singulier. Une bien belle expérience !
        </p>

        <p className="content-670">
          PHOTO : Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem6;
