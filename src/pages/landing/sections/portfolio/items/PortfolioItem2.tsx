import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Tales/Tales1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Tales/Tales3.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Tales/Tales2.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <h2 className="title">Tales, June 2023 </h2>

        <p className="section-des">
        'Algo quiere derrumbarse'
        </p>

        <p className="content-670">
        Spanish Première of the piece, newly untitled 'Algo quiere derrumbarse', at the occasion of the rural FesTales festival right at the heart of la Serra d'Espada National Park, in Spain. In plain day and in a very charming set up, on a cobble stone square , by the village church's shadow.
        </p>
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
        <p className="content-670">
        PHOTO: Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem2;
