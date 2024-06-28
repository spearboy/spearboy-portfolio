import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Back from '../components/Back';
import MainText from '../components/MainText';
import img1 from "../assets/img/img1.jpg";

gsap.registerPlugin(ScrollTrigger);

const PortPickstom = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);
  useEffect(() => {
    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;
    gsap.to(".pickstom_wrapper",{
      opacity: "1"
    })
    gsap.to(".back_action",{
      width: "110%",
      height: "110%"
    })
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    }
  }, []);

  return (
    <>
      <Back />
      <MainText />
      <div className='pickstom_wrapper' ref={horizontalRef}>
        <div className='horizontal'>
          <div className='page fir_page' ref={el => sectionRef.current[0] = el}>
            <p className='title'>Pickstom</p>
            <p className='port_desc'>
              Pickstom은 반려견의 옷을 커스텀하고 저장할 수 있는 웹페이지입니다.<br/>
              사용자들이 소통할 수 있는 플랫폼을 목표로 하고 있습니다.<br/>
              저의 첫번째 팀프로젝트이며 디자인에는 GINA 님이 참여하게 되었습니다.
            </p>
          </div>
          <div className='page sec_page' ref={el => sectionRef.current[1] = el}>
            <img src={img1} alt="img1" />
          </div>
          <div className='page thr_page' ref={el => sectionRef.current[2] = el}>
            <p className='title'>#1</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortPickstom;
