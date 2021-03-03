import React, { useContext, useCallback } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import "../assect/css/parallax.css";
import { store } from '../App'

const pluginWrapper = () => {
    require('../assect/js/parallex.min');
};
  
const anchors = ["home", "about", "skills", "portfolio", "blog", "contact"];

const pxopt = {
    type: "reveal",
    percentage: 62,
    property: "translate",
};
const fullpageOptions = {
    parallax: true,
    licenseKey: "C10939C4-5E0C415E-83B2469C-EE4E639D",
    parallaxKey: "C10939C4-5E0C415E-83B2469C-EE4E639D",
    anchors: anchors,
    navigation: true,
    menu: "#myMenu",
    scrollingSpeed: 800,
    navigationPosition: "left",
    parallaxOptions: pxopt,
    slidesNavigation: true,
    slidesNavPosition: "top",
    setAllowScrolling: true,
    callbacks: ["onLeave", "afterLoad"],
};

const Fullpage = () => {
    const [ state, dispatch ] = useContext(store);

    return <ReactFullpage
        // pluginWrapper = {pluginWrapper}
        {...fullpageOptions}
        onLeave={(origin, destination, direction) => {
            if (destination.index === 3) {
                dispatch({ type: 'NAV_TITLE_CLASS', nav_title_class: 'portfolio' });
            } else {
                dispatch({ type: 'NAV_TITLE_CLASS', nav_title_class: '' });
            }
            dispatch({ type: 'NAV_TITLE_CHANGE', nav_title: destination.anchor });
        }}
        render={({ state, fullpageApi }) => {
            return (
                <>
                    <ReactFullpage.Wrapper>
                        <div className="section color_change home">
                            <Home />
                        </div>
                        <div className="section color_change about">
                            <About />
                        </div>
                        <div className="section color_change skill">
                            <Skill />
                        </div>
                        <div className="section portfolio">
                            <Portfolio />
                        </div>
                        <div className="section color_change blog">
                            <Blog />
                        </div>
                        <div className="section color_change contact">
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                </>
            );
        }}
    />
};
export default Fullpage;
