import React from "react";
import FullPage from "../common/component/FullPage";
import unsplash from "../assect/img/altumcode-unsplash.jpg";
import styles from "../assect/css/main.module.css";

function Home() {
    return (
        <>
            <ul className={styles.home_wrap}>
                <li>
                    <p>CY LEE</p>
                    <h1>
                        I Want to be <br />
                        Frontend Developer<span>.</span>
                    </h1>
                </li>
                <li className={styles.right}>
                    <img src={unsplash} alt="" />
                </li>
            </ul>
        </>
    );
}

export default Home;
