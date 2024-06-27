import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AnimationContext } from '../context/AnimationContext';

const MainText = () => {
  const { animationEnded } = useContext(AnimationContext);
  const mainTextRef = useRef(null);

  useEffect(() => {
    if (animationEnded) {
      gsap.set(mainTextRef.current, { left: "50px" });
      // 더 필요한 초기 설정이 있으면 추가
    }
  }, [animationEnded]);

  return (
    <div className="logo_wrapper" ref={mainTextRef}>
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
  );
};

export default MainText;
