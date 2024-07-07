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
        At the occasion of Dynamo circus festival, organized by the eponymous Workspace in the old harbour of Odense, Denmark. Between containers, with the Sunset over the water as a sensational background... A very last minute change of location for technical reasons, that turned out great, to create very sweet memories!
        </p>

        <p className="content-670">
          PHOTO: Cosmin Cirstea
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem7;
