// images
import servIcon1 from '../../../../assets/images/services/serv-icon-1.svg';
import servIcon2 from '../../../../assets/images/services/serv-icon-2.svg';
import servIcon3 from '../../../../assets/images/services/serv-icon-3.svg';
import servIcon4 from '../../../../assets/images/services/serv-icon-4.svg';

// Styles
import './style.css';

// Data
import servicesData from '../../../../data/services.json';
import { markdownToHTML } from '../../../../utils/converter';

//picture
import newpic1 from '../../../../assets/images/services/newpic2.jpg';
import newpic2 from '../../../../assets/images/services/newpic1.jpg';
// -------------

function Services() {
  const images: string[] = [servIcon1, servIcon2, servIcon3, servIcon4];

  return (
    <section id="services" className="section">
      <div className="content-670">
        <h2 className="title">{servicesData.title}</h2>
        <div className="section-des">{servicesData.description}</div>

        

      
        {servicesData.paragraphes.map((text: string, i: number) => (
          <p
            key={'p-' + i}
            dangerouslySetInnerHTML={{ __html: markdownToHTML(text) }}></p>
        ))}
        <div className="section-poet">{servicesData.poetrys.map((text: string, i: number) => (
          <p
            key={'p-' + i}
            dangerouslySetInnerHTML={{ __html: markdownToHTML(text) }}></p>
        ))}</div>
      </div>

      <div className='drawing'>
      <img
        className="main-photo block-right"
        src={newpic1}
        alt="about image"
      /></div>

      <ul className="serv-link-cover block-right" data-jarallax-element="0 40">
        {servicesData.servicesLinks.map((link, i: number) => (
          <li key={'serv-link' + i}>
            <a href={link.to}>{link.text}</a>
          </li>
        ))}
      </ul>
     
      <div className="content-670" id="technicalrequirements">
        <div className="serv-block-wrap">
          {servicesData.servicesBoxes.map((servBox, i: number) => (
            <div className="serv-block-item" key={'serv-box' + i}>
              <img src={images[i]} alt={servBox.imageAltText} />
              <h4>{servBox.servTitle}</h4>
              <p>{servBox.servDesc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='drawing'>
      <img
        className="main-photo block-right"
        src={newpic2}
        alt="about image"
      /></div>
    </section>
  );
}

export default Services;