import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Angers/Angers1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Angers/Angers2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Angers/Angers3.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem4() {
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

        <h2 className="title">ANGERS</h2>

        <p className="section-des">
        Une configuration frontale à Angers, en France, pour faciliter la visibilité et l'installation à un public composé en majorité de personnes à mobilité réduite. Juste quelque jours après Noël !
        </p>

        <p className="content-670">
          PHOTO : Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem4;
