import React, { useState, useRef } from "react";
import styles from "../../assect/css/header.module.css";
import ThemeChange from "./ThemeChange";

function Header(props) {
    //ThemeChange(자식)에서 현재 theme 색상을 받아와서 class로 줌
    const [color, setColor] = useState(false);
    const gneButton = useRef();
    const parentFunction = (color) => {
        setColor(color);
        //app으로 상태 올려줌
        props.parentAppFunction(color);
    };
    const gnbBtnClick = () => {
        gneButton.current.classList.toggle("open");
    };

    const sideColse = () => {
        gneButton.current.classList.remove("open");
    };

    return (
        <>
            <header className="phrygia_header" ref={gneButton}>
                <div className={styles.header_wrap}>
                    <a href="">phrygia Web Portfolio</a>
                </div>
                <button onClick={gnbBtnClick}>
                    <span className="reverse_color mouse_hover"></span>
                    <span className="reverse_color mouse_hover"></span>
                    <span className="reverse_color mouse_hover"></span>
                </button>
            </header>
            <aside className="phrygia_side">
                <nav>
                    <ul id="myMenu">
                        <li data-menuanchor="home">
                            <a href="#home" onClick={sideColse}>
                                Home
                            </a>
                        </li>
                        <li data-menuanchor="about">
                            <a href="#about" onClick={sideColse}>
                                About
                            </a>
                        </li>
                        <li data-menuanchor="skills">
                            <a href="#skills" onClick={sideColse}>
                                Skills
                            </a>
                        </li>
                        <li data-menuanchor="portfolio">
                            <a href="#portfolio" onClick={sideColse}>
                                Portfolio
                            </a>
                        </li>
                        <li data-menuanchor="blog">
                            <a href="#blog" onClick={sideColse}>
                                Blog
                            </a>
                        </li>
                        <li data-menuanchor="contact">
                            <a href="#contact" onClick={sideColse}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <ThemeChange parentFunction={parentFunction} />
            <h1 id="nav_title">Home</h1>
        </>
    );
}

export default Header;
