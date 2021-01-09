import React, { useState, useEffect, useRef } from "react";
import "./assect/css/common.css";
import Footer from "./common/component/Footer";
import Header from "./common/component/Header";
// import About from "./component/About";
// import Blog from "./component/Blog";
// import Contact from "./component/Contact";
// import Home from "./component/Home";
// import Portfolio from "./component/Portfolio";
// import Skill from "./component/Skill";
import Fullpage from "./component/Fullpage";

// 전역 상태관리 -> 현재 active 인덱스 (nav 메뉴나 현재 active)
// 현재 theme
function App() {
    const [color, setColor] = useState(false);
    const parentAppFunction = (color) => {
        setColor(color);
    };
    const mouseCursor = useRef();

    useEffect(() => {
        window.addEventListener("mousemove", mouseFollow);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseFollow);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, [mouseCursor]);

    function mouseFollow(event) {
        // console.log(mouseCursor.current.style);
        mouseCursor.current.style.left = event.clientX - 20 + "px";
        mouseCursor.current.style.top = event.clientY - 16 + "px";
    }
    function mouseOver(event) {
        const getTagName = event.toElement.nodeName.toLowerCase();
        if (
            getTagName === "label" ||
            getTagName === "a" ||
            getTagName === "button" ||
            event.toElement.className === "mouse_hover" ||
            event.toElement.className === "swiper-button-prev" ||
            event.toElement.className === "swiper-button-next"
        ) {
            mouseCursor.current.classList.add("hover");
        } else {
            mouseCursor.current.classList.remove("hover");
        }
        // console.log(event.toElement.className);
    }

    return (
        <main className={`${color ? "light" : "dark"}`}>
            <div id="ball" ref={mouseCursor} />
            <Header parentAppFunction={parentAppFunction} />
            <section>
                <Fullpage />


            </section>
            <Footer />
        </main>
    );
}

export default App;
