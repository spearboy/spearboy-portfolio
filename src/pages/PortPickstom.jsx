import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Back from '../components/Back';
import MainText from '../components/MainText';
import img1 from "../assets/img/img1.jpg";
import pickstom_1 from "../assets/img/pickstom_code1.png";
import { Link } from 'react-router-dom';
import Ukiyo from 'ukiyojs';

gsap.registerPlugin(ScrollTrigger);

const PortPickstom = () => {
  const horizontalRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const horizontal = horizontalRef.current;

    gsap.to(".pickstom_wrapper", {
      opacity: "1"
    });

    gsap.to(".back_action", {
      width: "110%",
      height: "110%"
    });

    const totalWidth = horizontal.scrollWidth;
    const viewportWidth = window.innerWidth;

    let scrollTween = gsap.to(horizontal, {
      x: () => -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => `+=${totalWidth - viewportWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // ukiyo-js 적용
    const ukiyoInstance = new Ukiyo(imageContainerRef.current.querySelector('.ukiyo'));

    return () => {
      scrollTween.kill();
      ukiyoInstance.destroy(); // Clean up ukiyo instance on component unmount
    };
  }, []);

  return (
    <>
      <Back />
      <MainText />
      <div className='pickstom_wrapper' ref={horizontalRef}>
        <div className='horizontal'>
          <div className='page'>
            <div className='hero_wrapper'>
              <p className='title'>Pickstom</p>
              <p className='port_desc'>
                Pickstom은 반려견의 옷을 커스텀하고 저장할 수 있는 웹페이지입니다.<br/>
                사용자들이 소통할 수 있는 플랫폼을 목표로 하고 있습니다.<br/>
                저의 첫번째 팀프로젝트이며 디자인에는 GINA 님이 참여하게 되었습니다.
              </p>
            </div>
            <div className='top_img' ref={imageContainerRef}>
              <div className='ukiyo' style={{ backgroundImage: `url(${img1})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div className='page_title_wrapper'>
              <p className='title'>#1</p>
            </div>
            <div className='page_info_wrapper'>
              <div className='info_inner_box'>
                <p className='sec_title'>WORK FORM</p>
                <p>Team work</p>
              </div>
              <div className='info_inner_box'>
                <p className='sec_title'>LANGUAGE USED</p>
                <p>PHP, SQL, HTML, SCSS, JS, JQuery</p>
              </div>
              <div className='info_inner_box'>
                <p className='sec_title'>LIBRARY USED</p>
                <p>fabric.js, lottie, PHPMailer, html2canvas</p>
              </div>
              <div className='links'>
                <Link to={'https://github.com/spearboy/project_pickstom/'}>Github</Link>
                <Link to={'http://spearboy.dothome.co.kr'}>Link</Link>
              </div>
            </div>
            <div className='page_discription_wrapper'>
              <p className='title'>DESCRIPTION</p>
              <div className='text_wrapper'>
                <p className='text_title'>메인 페이지</p>
                <p className='text_info'>메인 페이지는 친근하고 강아지의 장난감처럼 가볍고 알록달록한 도형으로 디자인을 진행하였고, 동적인 요소를 위해 이미지 슬라이드를 추가하였습니다. 메인 페이지에서 이 페이지는 어떤 페이지인지 알 수 있게 간단한 기능 설명과 실제 사이트의 기능을이용해 만들어진 커스텀을 진열했습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>커스텀 페이지</p>
                <p className='text_info'>이 웹페이지의 메인 기능입니다. fabric.js 를 이용해 자유로운 캔버스 컨트롤을 구성하였고, 캔버스 캡처기능으로 해당 커스텀을 마이 페이지에 저장해 다운로드 및 피드에 개시할 수 있습니다. 커스텀에서는 문구 및 직접 업로드한 사진을 이용하실 수 있습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>피드 페이지</p>
                <p className='text_info'>피드 페이지에서는 커스텀 페이지에서 커스텀을 완료한 사진을 이용해 사이트 이용자들과 커뮤니티가 가능합니다. 좋아요 기능을 구성해 가장 좋아요를 많이 받은 커스텀을 메인 페이지에 노출시킴으로 본인의 다양한 커스텀을 자랑하실 수 있습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>게시판 페이지</p>
                <p className='text_info'>게시판 페이지는 각종문의 및 의견을 제시할 수 있게 만들어진 페이지 입니다. 해당 게시판에서 관리자 계정은 공지작성이 가능하며 공지는 최근 4개 까지 상단에 고정됩니다. 검색기능을 추가하여 원하는 게시글의 정보를 더욱 빠르게 찾을 수 있습니다.</p>
              </div>
            </div>
            <div className='page_trouble_wrapper is_have_next'>
              <p className='title'>TROUBLE SHOOTING</p>
              <div className='text_wrapper'>
                <p className='text_title'>문제 상황</p>
                <p className='text_info'>캔버스를 캡처한 파일을 저장하기 위해 base64로 인코딩한 후 저장을 시도했으나, 여러 번의 시도에도 계속 실패하는 문제가 발생했습니다. 문제의 원인은 base64 데이터 형식이 너무 길어서 지속적으로 오류를 출력하는 것이었습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>해결 방법 모색</p>
                <p className='text_info'>이 문제를 해결하기 위해 여러 가지 방법을 모색하던 중, Blob을 사용하여 데이터를 처리하는 방법을 발견했습니다. Blob을 사용하면 데이터를 보다 효율적으로 다룰 수 있으며, 길이가 긴 base64 데이터로 인해 발생하는 문제를 피할 수 있습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>해결 과정</p>
                <p className='text_info'>Blob을 이용한 데이터 처리 방식을 적용한 후, 캔버스를 캡처한 파일을 정상적으로 저장할 수 있음을 확인했습니다. Blob을 활용함으로써 파일 저장 과정에서 발생하는 오류를 해결할 수 있었으며, 이는 데이터 처리의 효율성을 크게 향상시켰습니다.</p>
              </div>
              <div className='text_wrapper'>
                <p className='text_title'>결론</p>
                <p className='text_info'>기존에 사용하던 base64 인코딩 방식 대신 Blob을 사용한 데이터 처리 방식으로 변경한 결과, 캔버스 캡처 파일을 저장하는 과정에서 발생하던 문제를 성공적으로 해결할 수 있었습니다. 이 과정에서 얻은 교훈은, 데이터 처리 방식의 선택이 작업의 성공 여부에 큰 영향을 미칠 수 있다는 점입니다. 앞으로도 유사한 문제를 해결할 때 다양한 접근 방식을 고려하여 최적의 해결책을 찾는 노력을 계속할 것입니다.</p>
              </div>
            </div>
            <div className='page_trouble_img_wrapper'>
              <img src={pickstom_1} alt="pickstom_code_1" />
            </div>
            <div className='page_next_wrapper'>
              <p className='next_work_cate'>Next work</p>
              <p className='next_work_title'>CARDIVE</p>
              <Link to={'/'}>View</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortPickstom;
