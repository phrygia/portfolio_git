import React, { useEffect, useRef, useReducer } from "react";
import "./assect/css/common.css";
import Footer from "./common/component/Footer";
import Header from "./common/component/Header";
import Fullpage from "./component/Fullpage";
import reducer from './_reducers/reducer'

//context api -> 전역 상태관리
// store만들고 dispatch로 관리 

const initialState = {
    nav_title: 'Home',
    nav_title_class: '',
    theme_color: 'Dark'   
}

export const store = React.createContext();

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const mouseCursor = useRef();

    useEffect(() => {
        window.addEventListener("mousemove", mouseFollow);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseFollow);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, [mouseCursor]);

    // mouse cursor circle effect
    const mouseFollow = (event) => {
        mouseCursor.current.style.left = event.clientX - 20 + "px";
        mouseCursor.current.style.top = event.clientY - 16 + "px";
    }

    // mouseover cursor effect
    const mouseOver = (event) => {
        const getTagName = event.toElement.nodeName.toLowerCase();

        // label, a, button tag
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
    }

    return (
        <store.Provider value={[state, dispatch]}>
            <main className={`${state.theme_color === 'Dark' ? "dark" : "light"}`}>
                <div id="ball" ref={mouseCursor} />
                <Header />
                <section>
                    <Fullpage />
                </section>
                <Footer />
            </main>
        </store.Provider>
    );
}

export default App;
