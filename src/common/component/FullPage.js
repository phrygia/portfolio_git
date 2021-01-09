import { useRef, useState, useEffect } from "react";
import "../../assect/css/fullpage.css";

const FullPage = (props) => {
    const { index, children, first, sendClass, menuName } = props;
    let [ticking, setTicking] = useState(false);
    const isFirefox = /Firefox/i.test(navigator.userAgent);
    const scrollSensitivitySetting = 60;
    const slideDurationSetting = 500;
    let [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    const nowRef = useRef(index); //현재 index에 맞는 슬라이드 설정
    const nowValueRef = useRef(index); //현재 index에 맞는 슬라이드 설정

    const totalSlideNumber = 6; //slide 개수
    let delta;

    useEffect(() => {
        const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
        window.addEventListener(
            mousewheelEvent,
            throttle(parallaxScroll, 150),
            false
        );

        // if ("ontouchstart" in window) {

        window.addEventListener(
            "touchend",
            throttle(parallaxScroll, 150),
            false
        );
        // window.addEventListener("touchmove", throttle(parallaxScroll, 150));
        // }

        return () =>
            window.removeEventListener("scroll", throttle(parallaxScroll, 150));
    }, [ticking]);

    const parallaxScroll = (evt) => {
        document.getElementById(`${nowRef.current.id}`).classList.remove("active");
        document.querySelectorAll('.phrygia_side li')[nowRef.current.id].classList.remove("active");

        if (isFirefox) {
            delta = evt.detail * -120;
        } else {
            delta = evt.wheelDelta;
        }

        if (ticking !== true) {
            if (delta <= -scrollSensitivitySetting) {
                //Down scroll
                // setTicking(true);
                ticking = true;
                if (currentSlideNumber !== totalSlideNumber - 1) {
                    setCurrentSlideNumber(currentSlideNumber++);
                }
                nextItem();
                slideDurationTimeout(slideDurationSetting);
            }
            if (delta >= scrollSensitivitySetting) {
                //Up scroll
                // setTicking(true);
                ticking = true;
                if (currentSlideNumber !== 0) {
                    setCurrentSlideNumber(currentSlideNumber--);
                }
                previousItem();
                slideDurationTimeout(slideDurationSetting);
            }
        }
        document.getElementById(`${currentSlideNumber}`).classList.add("active");
        document.querySelectorAll('.phrygia_side li')[currentSlideNumber].classList.add("active");

        if (Number(nowRef.current.id) === currentSlideNumber) {
            document.getElementById("nav_title").innerText =
                nowValueRef.current.value;
        }
        if (3 === currentSlideNumber) {
            document.getElementById("nav_title").classList.add("portfolio");
        } else {
            document.getElementById("nav_title").classList.remove("portfolio");
        }
    };

    const slideDurationTimeout = (slideDuration) => {
        setTimeout(function () {
            // setTicking(false);
            ticking = false;
        }, slideDuration);
    };

    const throttle = (func, delay) => {
        let timer = 0;

        return function () {
            const context = this,
                args = [].slice.call(arguments);

            clearTimeout(timer);
            timer = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    };

    const nextItem = () => {
        const previousSlide = Number(nowRef.current.id);
        if (previousSlide === currentSlideNumber - 1) {
            nowRef.current.classList.remove("up-scroll");
            nowRef.current.classList.add("down-scroll");
            document.getElementById("status_bar").style.width = `${
                30 * (currentSlideNumber + 1)
            }px`;
        }
    };

    const previousItem = () => {
        const currentSlide = Number(nowRef.current.id);
        if (currentSlide === currentSlideNumber) {
            nowRef.current.classList.remove("down-scroll");
            nowRef.current.classList.add("up-scroll");
            document.getElementById("status_bar").style.width = `${
                30 * (currentSlideNumber + 1)
            }px`;
        }
    };

    return (
        <>
            <article
                id={index}
                className={`${first !== undefined ? "active" : ""} background ${
                    sendClass !== undefined ? sendClass : ""
                }`}
                ref={nowRef}
            >
                <input type="hidden" ref={nowValueRef} value={menuName} />
                {children}
            </article>
        </>
    );
};

export default FullPage;
