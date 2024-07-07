// Styles
import './style.css';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// Images
import item1 from '../../../../../assets/images/portfolio/items/Cirqueon/cirqueon1.jpg';
import item2 from '../../../../../assets/images/portfolio/items/Cirqueon/cirqueon2.jpg';
import item3 from '../../../../../assets/images/portfolio/items/Cirqueon/cirqueon3.jpg';


// -------------------

function PortfolioItem2() {
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

        <h2 className="title">Cirqueon</h2>

        <p className="section-des">
        February 2024, Czech Republic - Prag
        </p>
        <p className='content-670'>
        About a year later, amidst our ongoing process, we find ourselves enriched by more experiences, mistakes, and determination. From the outset, we've harbored dreams of finding the perfect venue for our premiere. Traditionally, one might expect a premiere to occur where the creators are rooted, within their local region. However, what happens when you're engaged in an international project, traversing the globe?
        </p>
        <p className='content-670'>
        We've always described "Colliding Stories" as an exploration of finding ourselves somewhere in the middle—culturally, linguistically, and technically. Yet, when it comes to choosing a premiere location, the question arises: should we seek this middle ground geographically as well?
        </p>
        <p className='content-670'>
        Prague has captured our imaginations as a potential venue. A residency experience is more than physical engagement and hard work on our piece; it's also about connecting with people, engaging in conversations, and discerning whether we share the same vision and direction. This was precisely what unfolded at Cirqueon. It was an honor to be there, to collaborate, to forge connections with like-minded individuals. Let's await with anticipation what the future holds. And perhaps, in the end, Prague doesn't sound so far-fetched for our premiere after all, does it? 
        </p>
        <p className="content-670">
          PHOTO: Silvia Grachová
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem2;
