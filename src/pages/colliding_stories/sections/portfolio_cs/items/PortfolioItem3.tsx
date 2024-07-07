// Styles
import './style.css';

// -------------------

function PortfolioItem3() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <h2 className="title">LES MONTAGN'ARTS</h2>

        <p className="section-des">
         Festival en Valbonnais 2023, France  
        </p>

        <p className="content-670">
        Building a stage beside the lake, overlooking the majestic mountains, may seem like something out of a fairy tale, doesn't it? Yet, it's not a figment of imagination; it's a reality we brought to life. For the first time, "Colliding Stories" collided with other dancers, resulting in a collaborative version of our piece. it was an unforgettable experience. We relished the opportunity to collaborate with another group of dancers, sharing laughter, hard work, and even a refreshing swim in the lake. In the end, despite the interruption by a thunder, the memories created were truly magical. 
        <br></br>Watch a video! And you will understand everything. 
        </p>

        <p className="block-right">
          <iframe
            src="https://www.youtube.com/embed/w6NwQuJp5rc?si=wfO6nCKtyimqbFIT"
            width="100%"
            allow="autoplay; fullscreen"></iframe>
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem3;
