import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase } from 'gsap/all';

// img
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import { Link } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    const tl = gsap.timeline();

    // main_left_inner_box 애니메이션 설정
    tl.to(".main_left_inner_box", { 
        width: 255, 
        height: 413, 
        duration: 4.3,
        ease: CustomEase.create("custom", "M0,0 C0.651,0.22 0.634,0.136 0.787,0.539 0.933,0.925 0.886,1.167 1,1 "), // 부드럽게 줄어들도록 설정
    });

    // 이미지 애니메이션 설정
    const images = document.querySelectorAll(".main_left_inner_box img:not(:first-child)");
    const imageDuration = (3 / images.length) * 0.9; // 각 이미지의 애니메이션 시간을 전체 애니메이션 시간으로 나누기

    images.forEach((img, index) => {
        tl.to(img, {
            left: "0%", // 이미지가 왼쪽으로 이동
            duration: imageDuration, // 각 이미지의 애니메이션 시간을 설정
            ease: "power2.inOut" // 부드럽게 이동하도록 설정
        }, index * imageDuration); // 각 이미지가 순차적으로 시작되도록 지연 시간 설정
    });

    // main_left_wrap과 logo_wrapper 애니메이션 추가
    tl.to(".main_left_wrap", { 
        width: "70%", 
        duration: 2, 
        ease: "power4.inOut" 
    }, "+=0") // main_left_inner_box 애니메이션이 끝난 후 바로 시작
    .to(".logo_wrapper", { 
        left: "50px", 
        duration: 1, 
        ease: "power4.inOut" 
    }, "-=2"); // main_left_wrap 애니메이션과 동시에 시작되도록 설정
  }, []);

  return (
    <div className="full_wrapper">
        <div className="main_left_wrap">
            <Link to={"/port1"} className="main_left_inner_box">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
                <img src={img5} alt="img5" />
                <img src={img6} alt="img6" />
                <img src={img7} alt="img7" />
                <img src={img8} alt="img8" />
            </Link>
            <div className="logo_wrapper">
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>O</span>
            </div>
        </div>
    </div>
  );
}

export default Landing;
