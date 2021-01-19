import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import "../assect/css/parallax.css";

const anchors = ["home", "about", "skills", "portfolio", "blog", "contact"];
const pxopt = {
    type: "reveal",
    percentage: 62,
    property: "translate",
};
const fullpageOptions = {
    parallax: true,
    licenseKey: "C10939C4-5E0C415E-83B2469C-EE4E639D",
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

const Fullpage = () => (
    <ReactFullpage
        {...fullpageOptions}
        onLeave={(origin, destination, direction) => {
            // console.log("onLeave event", { origin, destination, direction });
            const nav_title = document.getElementById("nav_title");
            if (destination.index === 3) {
                nav_title.classList.add("portfolio");
            } else {
                nav_title.classList.remove("portfolio");
            }
            nav_title.innerText = destination.anchor;
            console.log(destination.anchor);
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
);
export default Fullpage;
