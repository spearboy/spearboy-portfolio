import React from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const DelayedLink = ({ to, children, className }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    // 애니메이션 시작
    gsap.to(".main_left_wrap", {
      left: "-100%",
      duration: 2,
      ease: "power4.inOut",
      onComplete: () => {
        // 애니메이션이 끝나면 페이지 이동
        navigate(to);
      }
    });
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default DelayedLink;
