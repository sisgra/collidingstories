import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../../assets/images/portfolio/items/Up1/up1_1.jpg';
import item2 from '../../../../../assets/images/portfolio/items/Up1/up1_2.jpg';


// Styles
import './style.css';

// -------------------

function PortfolioItem1cs() {
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
            
          </Swiper>
        </div>

        <h2 className="title">UP CIRCUS AND PERFORMING ARTS</h2>

        <p className="section-des">
         July 2023, Belgium - Brussels 
         </p>
         <p className='content-670'>
         Before this residency, a piece titled "Colliding Stories" had its own choreographed version. Dancing version. However, during this residency, our collaboration with UP Circus and Performing Arts allowed us to merge our creative cards, leading us to experiment with our circus apparatuses. We embraced the chance to explore their potential in supporting narratives, seeing them not just as tools but as integral elements of storytelling.
         As the residency continued, we discovered not only how to use these apparatuses but also the depth they could add to our performances. This experience pushed us to explore new directions and invest further in our artistic journey. We're grateful to UP Circus and Performing Arts for this opportunity, as it served as a important milestone in our creative development. Thank you for believing in us and for supporting our artistic growth. 
        </p>

        <p className="content-670">
          PHOTO: Up circus and performing arts
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem1cs;
