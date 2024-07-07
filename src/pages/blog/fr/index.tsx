// Images
import previewImage from '../../../assets/images/blog/img-single-blog.jpg';
import quoteImg from '../../../assets/images/blog/quote.svg';
import AboutFr from '../section_fr/about_fr/about';
import ContactFr from '../section_fr/contact_fr';
import HomeFr from '../section_fr/home_fr';
import PortfolioFr from '../section_fr/portfolio';
import ServicesFr from '../section_fr/services_fr';
import SkillsFr from '../section_fr/skills_fr';

// Styles
import './style.css';

// ----------------------

function BlogSingle() {
  return (
    <section className="single-blog section">
     <HomeFr/>
     <ServicesFr/>
     <AboutFr/>
     <SkillsFr/>
     <PortfolioFr/>
     <ContactFr/>
    </section>
    
  );
}

export default BlogSingle;
