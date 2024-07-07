import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Dynamo/Dynamo1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Dynamo/Dynamo2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Dynamo/Dynamo3.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem7() {
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

        <h2 className="title">DYNAMO CIRCUS FESTIVAL</h2>

        <p className="section-des">
        Lors du festival Dynamo organisé par l'espace de pratique pour les professionnels du cirque éponyme, sur le vieux port d'Odense, au Danemark. Entre des containers, et avec le coucher de soleil sur le canal pour arrière plan sensationnel... Un changement d'espace vraiment last-minute lié à des raisons techniques - de revêtement de sol -, qui constituera un excellent souvenir !
        </p>

        <p className="content-670">
          PHOTO : Cosmin Cirstea
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem7;