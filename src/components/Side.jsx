import React, { useContext, useEffect, useRef } from 'react';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import DelayedLink from './DelayedLink';
import { AnimationContext } from '../context/AnimationContext';
import gsap from 'gsap';

const Side = () => {
  const { animationEnded } = useContext(AnimationContext);
  const sideRef = useRef(null);

  useEffect(() => {
    if (animationEnded) {
      gsap.set(sideRef.current, { width: '70%', height: '100%' });
      // 더 필요한 초기 설정이 있으면 추가
    }
  }, [animationEnded]);

  return (
    <div className="main_left_wrap" ref={sideRef}>
      <DelayedLink to={"/port1"} className="main_left_inner_box">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
        <img src={img8} alt="img8" />
      </DelayedLink>
    </div>
  );
};

export default Side;