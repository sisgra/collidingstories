import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images//portfolio/items/Up/up1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Up/up2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Up/up3.jpg';

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

        <h2 className="title">UP CIRCUS AND PERFORMING ARTS </h2>

        <p className="section-des">
        December 2023, Belgium - Brussels
        </p>
        <p className="content-670">
          
        Back in Brussels for the second time, but this visit extended over three weeks, involving a showing. We participated in a residency named "Experimentation," which embodied its title to the fullest extent. Throughout the residency, we engaged in a continuous cycle of trying, exploring, generating new ideas, revisiting old ones, discarding them, resurrecting them, and repeating the process. As we said, Experimentation. 
        Selected alongside six other artistic groups for this residency. However, amidst our individual endeavors, we also found moments to convene, converse, and recognize our shared experiences. The kitchen echoed with a cacophony of languages, illustrating our diverse backgrounds and commonalities.The residency proved to be a tremendous learning experience. We experimented extensively, and with each trial, we are finding ourselves edging closer to the completion of our project. 
        </p>
        <p className="content-670">
          PHOTO: Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem4;
