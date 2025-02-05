'use client';
import React, { useEffect, useState } from 'react'
import { gsap, ScrollTrigger, MotionPathPlugin, CSSPlugin } from 'gsap/all';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(CSSPlugin);
}

const Fish = () => {
  let rx: number;
  let ry: number;
  
  if (typeof window !== "undefined") {
    rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
    ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;
  }

  const path = [
    { x: 800, y: 200 },
    { x: 900, y: 20 },
    { x: 1100, y: 100 },
    // 2
    { x: 1000, y: 200 },
    { x: 900, y: 20 },
    { x: 10, y: 500 },
    // 3
    { x: 100, y: 300 },
    { x: 500, y: 400 },
    { x: 1000, y: 200 },
    // 4
    { x: 1100, y: 300 },
    { x: 400, y: 400 },
    { x: 200, y: 250 },
    // 5
    { x: 100, y: 300 },
    { x: 500, y: 450 },
    { x: 1100, y: 500 }
  ];

  const scaledPath = path.map(({x, y}) => {
    return {
      x: x * rx,
      y: y * ry
    }
  })

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to('.fish', { rotationY: 180, duration: 0.4 });
          } else {
            gsap.to('.fish', { rotationY: 0, duration: 0.4 });
          }
        } 
      },
    })
    tl.to('.fish', {
      motionPath: {
        path: scaledPath,
        align: 'self',
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      duration: 10,
      immediateRender: true,
    })
  }, [])

  return (
    <div>
      <div className="fish-wrapper">
        <div className="fish">
          <div className="fish__inner">
            <div className="fish__body"></div>
            <div className="fish__body"></div>
            <div className="fish__body"></div>
            <div className="fish__body"></div>

            <div className="fish__head"></div>
            <div className="fish__head fish__head--2"></div>
            <div className="fish__head fish__head--3"></div>
            <div className="fish__head fish__head--4"></div>

            <div className="fish__tail-main"></div>
            <div className="fish__tail-fork"></div>

            <div className="fish__fin"></div>
            <div className="fish__fin fish__fin--2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fish;