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
        Several showings on stage, for once and not to set a precedent; at the occasion of the biggest music festival in Slovakia attended by 30 000 + people over 3 days. On the take-off runways of Trencin's airport: could there be a more appropriate place to tell about a flight reverie? 
        Also with a microphone for the very first time; what allowed me to play differently in space. What a cool experience!
        </p>

        <p className="content-670">
          PHOTO: Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem6;
