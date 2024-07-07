import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Balazuc/balazuc1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Balazuc/balazuc2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Balazuc/balazuc3.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem1() {
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

        <h2 className="title"> FESTIVAL LES BALAZUCADES </h2>

        <p className="section-des">
        À l'occasion du festival des Balazucades, en un set up un peu magique sur un terrain de pétanque au pied de l'Église de Balazuc, plus beau village de France.
        </p>

        <p className="content-670">
          PHOTO : Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem1;
