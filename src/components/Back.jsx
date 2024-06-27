import React from 'react';
import { useLocation } from 'react-router-dom';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import DelayedLink from './DelayedLink ';

const Back = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
      { to: "/port8", img: img8, alt: "img8" },
      { to: "/port7", img: img7, alt: "img7" },
      { to: "/port6", img: img6, alt: "img6" },
      { to: "/port5", img: img5, alt: "img5" },
      { to: "/port4", img: img4, alt: "img4" },
      { to: "/port3", img: img3, alt: "img3" },
      { to: "/port2", img: img2, alt: "img2" },
      { to: "/port1", img: img1, alt: "img1" },
  ];

  return (
    <div className='back_wrap'>
      {links.map((link, index) => {
        if (currentPath === '/' || currentPath === link.to) {
          return (
            <DelayedLink key={index} to={link.to} className="back_action">
              <img src={link.img} alt={link.alt} />
            </DelayedLink>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Back;
