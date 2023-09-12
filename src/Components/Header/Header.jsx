import React, { useState } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const getToggleStyle = (toggle) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !toggle && "-100%"
      }
    }
  }
  return (
    <>
      <section className="h-wrapper">
        <div className="h-container flexCenter paddings innerWidth">
          <a href="#">
            <img src="./logo.png" alt="logo" width={100} />
          </a>
          <OutsideClickHandler onOutsideClick={() => { setToggle(false) }}>
            <div className="flexCenter h-menu" style={getToggleStyle(toggle)}>
              <a href="#Residencies">Residencies</a>
              <a href="#Value">Our Value</a>
              <a href="#Contact">Contact Us</a>
              <a href="#GetStarted">Get Started</a>
              <button className='button'>
                <a href="">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setToggle((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
