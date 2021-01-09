import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import './fullpage.parallax.min';

const anchors = ["1", "2", "3", "4", "5", "6"];
const pxopt = {
    type: 'reveal',
    percentage: 62,
    property: 'translate'
}
const fullpageOptions = {
    parallax: true
};


const Fullpage = () => (
    
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    licenseKey= "C10939C4-5E0C415E-83B2469C-EE4E639D"
    parallax
    parallaxOptions = {pxopt}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section color_change">
            <Home />
          </div>
          <div className="section color_change">
            <About />
          </div>
          <div className="section color_change">
            <Skill />
          </div>
          <div className="section">
            <Portfolio />
          </div>
          <div className="section color_change">
            <Blog />
          </div>
          <div className="section color_change">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;