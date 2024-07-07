import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Fuskafest/Fuskafest1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Fuskafest/Fuskafest2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Fuskafest/Fuskafest3.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem5() {
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
          </Swiper>
        </div>

        <h2 className="title">FUSKAFEST</h2>

        <p className="section-des">
        Lors du festival international de cirque moderne Fuskafest, organisé par le cirque Fuskabo en Slovénie. 
        Lorsque l'équation comprenant espace et jauge accueillie l'autorise, on aime inviter le public à prendre place sur scène, avec nous, autour de l'espace de jeu.


        </p>

        <p className="content-670">
          PHOTO : Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem5;
