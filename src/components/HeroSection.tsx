import React from "react";
import dynamic from "next/dynamic";

import { NavBar } from "./NavBar";
import { Companies } from "./Companies";

export const HeroSection = () => {
  const MotionDiv = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false }
  );

  return (
    <>
      <div className="hero_section">
        <NavBar />
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="sub__text">
              <span className="">Leverage on Automation</span>
            </div>
            <div className="large__text mt-5">
              <span className="">AI Models for Business Solutions </span>
            </div>
            <div className="paragraph__text mt-4 mb-3">
              <span className="">
                Leverage the power of AI to automate, analyze, and optimize your
                workflows. Our specialized models are designed to fit different
                business needs
              </span>
            </div>
            <div className="action__button mt-3 p-4">
              <span role="button" className="text-dark">
                Get Started Now
              </span>
            </div>
          </div>
        </MotionDiv>
      </div>
      <Companies />
    </>
  );
};
