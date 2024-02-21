import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
         </div>
        <p className="p__opensans">Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
      </div>
      
      <div className="app__chef-sign">
        <p>Babatunde Olaniyi</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
