import { useState } from 'react';
import { Router, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import './style_cs.css';

// Data
import navData from '../../data_cs/navbar_cs.json';
// --------------
type NavbarProps = {
  isCollidingStories: boolean;
};

function NavbarCS({ isCollidingStories }: NavbarProps) {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [sectionNum, setSectionNum] = useState<number>(1);

  /**
   * Hiding navigation on clicking a nav link (important in mobie view)
   */
  const handleLinkClick = () => {
    setNavActive(false);
  };

  /**
   * Change the number in the navigation depends on the number of section
   *
   * @param numToActivate number of activated section
   */
  const handleActive = (numToActivate: number) => {
    setSectionNum(numToActivate);
  };

  /**
   * Toggle menu on clicking on menu btn
   */
  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <div
        id="nav-btn"
        className={navActive ? 'nav-btn active' : 'nav-btn'}
        role="button"
        onClick={handleMenuBtnClick}>
        <span className="nav-btn-cover">
          <span className="menu-line"></span>
        </span>
      </div>
      <div className={navActive ? 's-nav active' : 's-nav'}>
        <div className="nav-count">
          <div className="current-num">
            <span>0{isCollidingStories ? sectionNum : 1}</span>
          </div>
          <div className="pagination-sep">/</div>
          <div className="total-pages-num">
            0{isCollidingStories ? navData.navLinks.length : 1}
          </div>
        </div>
        <div className="nav-container">
          {/* Home Link */}
          <RouterLink
            className="site-title slow-scroll"
            to={navData.homeLink.to}
            onClick={handleLinkClick}>
            {navData.homeLink.text}
          </RouterLink>

          {/* Navigation Links */}
          <nav className="nav-menu">
            <ul className="nav-list">
              {navData.navLinks.map((link, i) => (
                <li key={'nav-' + i}>
                  {isCollidingStories ? (
                    <ScrollLink
                      activeClass="current"
                      smooth
                      spy
                      to={link.to}
                      onClick={handleLinkClick}
                      onSetActive={() => handleActive(i + 1)}>
                      {link.text}
                    </ScrollLink>
                  ) : (
                    <RouterLink to="/" onClick={handleLinkClick}>
                      {link.text}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="nav-soc">
          {navData.footLinks.map((link, i) => (
            <li key={'foot-link-' + i}>
              <RouterLink to={link.to}>{link.text}</RouterLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavbarCS;
