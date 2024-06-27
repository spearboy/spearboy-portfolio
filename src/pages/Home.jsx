import React, { useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase } from 'gsap/all';
import Side from '../components/Side';
import Back from '../components/Back';
import MainText from '../components/MainText';
import { AnimationContext } from '../context/AnimationContext';

const Home = () => {
  const { setAnimationEnded } = useContext(AnimationContext);

  useEffect(() => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationEnded(true); // 애니메이션이 끝나면 상태 업데이트
      }
    });

    tl.to(".main_left_inner_box", { 
        width: 255, 
        height: 413, 
        duration: 4.3,
        ease: CustomEase.create("custom", "M0,0 C0.651,0.22 0.634,0.136 0.787,0.539 0.933,0.925 0.886,1.167 1,1 "),
    });

    const images = document.querySelectorAll(".main_left_inner_box img:not(:first-child)");
    const imageDuration = (3 / images.length) * 0.9;

    images.forEach((img, index) => {
        tl.to(img, {
            left: "0%",
            duration: imageDuration,
            ease: "power2.inOut"
        }, index * imageDuration);
    });

    tl.to(".main_left_wrap", { 
        width: "70%", 
        duration: 2, 
        ease: "power4.inOut" 
    }, "+=0")
    .to(".logo_wrapper", { 
        left: "50px", 
        duration: 1, 
        ease: "power4.inOut" 
    }, "-=2");
  }, [setAnimationEnded]);

  return (
    <>
      <Back />
      <Side />
      <MainText />
    </>
  );
};

export default Home;