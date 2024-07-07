import { Link as ScrollLink } from 'react-scroll';

// Images
import homeImage from '../../../../assets/images/home/photo-2.jpg';
import scrollIcon from '../../../../assets/images/home/scroll-icon.svg';

// Styles
import './style.css';

// Data
import homeData from '../../../../data_cs/home.json';

// ---------------

function HomeCS() {
  return (
    <section id="home" className="section">
      <div className="container-wrap">
        <h1 className="entry-title">
          {homeData.welcomeText}
          <br/>-ing-<br />
          <span>{homeData.name}</span>
          
        </h1>
        <img
          className="main-photo block-right"
          src={homeImage}
          alt="ukko home image"
        />
        {/*
        <ScrollLink className="main-btn slow-scroll" smooth to="services">
        
        <img src={scrollIcon} alt="chevron down" />
  </ScrollLink>*/}
        {/* <a href="#services"></a> */}
      </div>
    </section>
  );
}

export default HomeCS;
