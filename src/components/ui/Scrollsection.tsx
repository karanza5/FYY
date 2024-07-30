"use client"
import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function scrollsection() {
    const sectionRef=useRef(null);
    const triggerRef=useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const pin=gsap.fromTo(sectionRef.current,{
            translateX:0
        },{
            translateX:'-300vh',
            ease:'none',
            duration: 1,
            scrollTrigger:{
                trigger:triggerRef.current,
                start:'top top',
                end:'2000,top',
                scrub:0.6,
                pin:true
            }
        })
    
      return () => {
        pin.kill()
      }
    }, [])
    
  return (
    <section className='scroll-section-outer'>
        <div className="" ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
                <div className="scroll-section  ">
                    <img  src="1.jpg" alt="summa" />
                </div>
                <div className="scroll-section ">
                    <img src="2.jpg" alt="summa" />
                </div>
                <div className="scroll-section ">
                    <img src="3.jpg" alt="summa" />
                </div>
                <div className="scroll-section">
                    <img src="4.jpg" alt="summa" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default scrollsection