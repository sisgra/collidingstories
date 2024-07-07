// Images

import AboutCS from '../sections/about_cs';
import ContactCS from '../sections/contact_cs';
import HomeCS from '../sections/home_cs';
import PortfolioCS from '../sections/portfolio_cs';
import Portfolio from '../sections/portfolio_cs';
import ServicesCS from '../sections/services_cs';
import SkillsCS from '../sections/skills';
import WithYou from '../sections/withyou';

// Styles
import './style.css';

// ----------------------

function CollidingStories() {
  return (
    <section className="single-blog section">
     <HomeCS/>
     <ServicesCS/>
     <AboutCS/>
     <WithYou/>
     <SkillsCS/>
     <PortfolioCS/>
     <ContactCS/>
    </section>
    
  );
}

export default CollidingStories;
