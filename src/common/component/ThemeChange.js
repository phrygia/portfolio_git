import React, { useState } from "react";
import styles from "../../assect/css/header.module.css";

function ThemeChange(props) {
    const [color, setColor] = useState(false);
    const [checked, setChecked] = useState(false); //false면 dark

    //header(부모) 컴포넌트로 현재 theme 컬러값 보내줌
    const childFunction = (e) => {
        setChecked(e.target.checked);
        setColor(!color);
        props.parentFunction(!color);
    };

    return (
        <ul className={styles.color_btns_wrap}>
            <li>
                <div id="fp-nav" className="fp-left">
                    <ul>
                        <li>
                            <a href="#home" />
                        </li>
                        <li>
                            <a href="#about" />
                        </li>
                        <li>
                            <a href="#skills" />
                        </li>
                        <li>
                            <a href="#portfolio" />
                        </li>
                        <li>
                            <a href="#blog" />
                        </li>
                        <li>
                            <a href="#contact" />
                        </li>
                    </ul>
                </div>
                Scroll
            </li>
            <li className={styles.btns}>
                <input
                    id="themeChk"
                    className={styles.themeChk}
                    type="checkbox"
                    checked={checked}
                    onChange={childFunction}
                />
                <label htmlFor="themeChk">
                    <span className="mouse_hover">
                        {color ? "Light" : "Dark"}
                    </span>
                </label>
            </li>
        </ul>
    );
}

export default ThemeChange;
