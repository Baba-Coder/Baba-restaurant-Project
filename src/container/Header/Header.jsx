import React from 'react';
import { SubHeading } from '../../components';

import  { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
       <SubHeading title="Welcome to Taste Of Africa" />
       <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet, consectetur
       adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Egestas quis ipsum suspendisse ultrices gravida dictum f
       
       
       
       
       volutpat</p>
    <button type="button" className= "custom__button">Explore Menu</button>
    </div>

  <div className="app__wrapper_img">
    <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
