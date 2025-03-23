import React from "react";
import { NavigationTabs } from "./NavigationTabs";

export const BodySection = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p className="main__text">AI Models tailored for your business needs</p>
        <span className="main-sub__text">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </span>
      </div>
      <NavigationTabs />
    </>
  );
};
