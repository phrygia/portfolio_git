import React, { useState, useContext } from "react";
import styles from "../../assect/css/header.module.css";
import { store } from '../../App'

function ThemeChange(props) {

    const [state, dispatch] = useContext(store);
    const [checked, setChecked] = useState(false); //false면 dark
    
    const themeChangeHandler = () => {
        setChecked(!checked);
        dispatch({ type: 'COLOR_CHANGE', theme_color: checked ? 'Dark' : 'Light' })
        console.log(state)
    }

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
                    // onClick={themeChangeHandler}
                    onChange={themeChangeHandler}
                />
                <label htmlFor="themeChk">
                    <span className="mouse_hover">
                        {state.theme_color}
                    </span>
                </label>
            </li>
        </ul>
    );
}

export default ThemeChange;
