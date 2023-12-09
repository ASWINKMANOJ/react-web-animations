import { useState, useEffect, useRef } from "react";

import logo from './logo.svg';
import './App.css';
import beach from './beach.jpg';
import Lenis from '@studio-freight/lenis'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function App() {

  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)

  const [logT, setLogT] = useState(true);
  const app = useRef(null);
  const app2 = useRef(null);
  const app3 = useRef(null);
  const circle = useRef(null);
  const circleR = useRef(null);
  const circleB = useRef(null);
  const imG = useRef(null);
  const imageReveal = CSSRulePlugin.getRule('.img-container:after')
  const logoT = useRef(null);
  const txt = useRef(null);



  function handleTrue() {
    gsap.to(logoT.current, {
      scale: 1.2,
      rotate: -100,
      duration: 0.8,
      ease: Power3.easeInOut
    })
    setLogT(false);
  }

  function handleFalse() {
    gsap.to(logoT.current, {
      scale: 1,
      rotate: 100,
      duration: 0.8,
      ease: Power3.easeInOut
    })
    setLogT(true);
  }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    gsap.to(logoT.current, {
      opacity: 1,
      y: -40,
      duration: 0.8,
      ease: Power3.easeInOut
    })
    gsap.to(txt.current, {
      opacity: 1,
      y: -40,
      duration: 0.8,
      ease: Power3.easeInOut,
      delay: 0.2
    })
    gsap.to([circle.current, circleR.current, circleB.current], {
      y: -20,
      stagger: 0.2,
      opacity: 1,
      duration: 0.8,
      ease: Power3.easeInOut
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: imG.current,
        start: "+=350 70%",
        end: "+=350 60%",
        onEnter: () => {
          gsap.to(imageReveal, {
            width: "0%",
            ease: Power3.easeInOut,
            duration: 1.4
          });
          gsap.to(imG.current, {
            scale: 1,
            ease: Power3.easeInOut,
            duration: 1.4
          });
          gsap.to([app3.current, app2.current], {
            backgroundColor: "#F2B79F",
            ease: Power3.easeInOut,
            duration: 1.2
          });
        },
        onLeaveBack: () => {
          gsap.to(imageReveal, {
            width: "100%",
            ease: Power3.easeInOut,
            duration: 1.4
          });
          gsap.to(imG.current, {
            scale: 1.4,
            ease: Power3.easeInOut,
            duration: 1.4
          });
          gsap.to([app3.current, app2.current], {
            backgroundColor: "#fff",
            ease: Power3.easeInOut,
            duration: 1.2
          });
        }
      }
    });


  }, [imageReveal])

  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  return (
    <>
      <div ref={app} className="App">
        <header className="App-header">
          <img onClick={logT ? handleTrue : handleFalse} ref={logoT} src={logo} className="App-logo" alt="logo" />
          <p ref={txt} className="text">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div ref={app2} className="app2">
        <div ref={circle} onClick={(e) => {
          gsap.to(e.currentTarget, {
            scale: c1 ? 1 : 2
          })
          setC1(!c1)
        }} className="circle"></div>
        <div ref={circleR} onClick={(e) => {
          gsap.to(e.currentTarget, {
            scale: c2 ? 1 : 2
          })
          setC2(!c2)
        }} className="circle Red"></div>
        <div ref={circleB} onClick={(e) => {
          gsap.to(e.currentTarget, {
            scale: c3 ? 1 : 2
          })
          setC3(!c3)
        }} className="circle Blue"></div>
      </div>
      <div ref={app3} className="app3">
        <div className="img-container">
          <img ref={imG} className="beach" src={beach} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
