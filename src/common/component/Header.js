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

    const clickGnbAndMove = (e) => {
        const currentId = e.target.parentNode.id;
        const arr = document.querySelectorAll('.background')
        let act;    // 현재 act 슬라이더 index
        for(const ar of arr) {
            if(ar.classList.contains('active')) {
                // console.log(ar.id)
                act = ar.id;
            }
        }
        // console.log(arr.findIndex(document.querySelector(".background.active")))
        // var $previousSlide2 = document.querySelectorAll(".background")[1];
        // document
        //     .querySelectorAll(".background")
        //     [currentId - 1].classList.remove("down-up");
        // document
        //     .querySelectorAll(".background")
        //     [currentId - 1].classList.add("down-scroll");

        //현재 클릭한 노드 아이디
        const currentId2 = currentId.slice(0, 1);

        //모든 메뉴의 classname 삭제
        const arr2 = e.target.parentNode.parentNode.childNodes
        for (const arr of arr2) {
            arr.className = '';
        }
        e.target.parentNode.className = 'active';

        if(Number(act) < Number(currentId2)) {
            arr.forEach(function(v, i) {
                if(i < currentId2) {
                    if(document.querySelectorAll('.background')[i].classList.contains('active')) {
                        document.querySelectorAll('.background')[i].classList.remove('active')
                    }
                    document.querySelectorAll('.background')[i].classList.remove('up-scroll')
                    document.querySelectorAll('.background')[i].classList.add('down-scroll')
                    document.querySelectorAll('.background')[i+1].classList.add('active')
                }
            })
            console.log('bigger')
        } else if(Number(act) > Number(currentId2)) {
            arr.forEach(function(v, i) {
            })
            console.log('smaller')
        } else if(Number(act) == Number(currentId2)) {
            console.log('same')
        }
    };

    return (
        <>
            <header className="phrygia_header" ref={gneButton}>
                <div className={styles.header_wrap}>
                    {/* <a href="">phrygia Web Portfolio</a> */}
                </div>
                <button onClick={gnbBtnClick}>
                    <span className="reverse_color mouse_hover"></span>
                    <span className="reverse_color mouse_hover"></span>
                    <span className="reverse_color mouse_hover"></span>
                </button>
            </header>
            <aside className="phrygia_side">
                <nav>
                    <ul>
                        <li id="00" className="active">
                            <button onClick={clickGnbAndMove}>Home</button>
                        </li>
                        <li id="11">
                            <button onClick={clickGnbAndMove}>About</button>
                        </li>
                        <li id="22">
                            <button onClick={clickGnbAndMove}>Skills</button>
                        </li>
                        <li id="33">
                            <button onClick={clickGnbAndMove}>Portfolio</button>
                        </li>
                        <li id="44">
                            <button onClick={clickGnbAndMove}>Blog</button>
                        </li>
                        <li id="55">
                            <button onClick={clickGnbAndMove}>Contact</button>
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
