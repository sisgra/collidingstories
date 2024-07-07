// Styles
import './style.css';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// Images
import item1 from '../../../../../assets/images//portfolio/items/Bratislava/Bratislava1.jpg';
import item2 from '../../../../../assets/images//portfolio/items/Bratislava/Bratislava2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/Bratislava/Bratislava3.jpg';


// -------------------

function PortfolioItem3() {
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

        <h2 className="title">WORLD CIRCUS DAY</h2>

        <p className="section-des">
        At the occasion of Svetový Deň Cirkusu (World circus day), by Cirkuskus in Slovakia, with a beautiful light setting.
        </p>
        <p className='section-des'>
        Another set up option to maintain the 360° configuration and share the same space together with the audience: performing in the orchestre, at the foot of the stage!
        </p>

        <p className="content-670">
          PHOTO: Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem3;
