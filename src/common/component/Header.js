import React, { useRef, useContext } from "react";
import styles from "../../assect/css/header.module.css";
import ThemeChange from "./ThemeChange";
import { store } from '../../App'

function Header(props) {

    const [ state, dispatch ] = useContext(store);
    const gneButton = useRef();
  
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
                    <a href="/" className={styles.header_logo}>
                        Phrygia<span>.</span>
                    </a>
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
            <ThemeChange />
            <h1 id="nav_title" className={`${state.nav_title_class}`}>{state.nav_title}</h1>
        </>
    );
}

export default Header;
