import React, { useState } from "react";
import { NavigationContent } from "./NavigationContent";
type NavigationTypes = {
  id: number;
  text: string;
  tabName: string;
}[];

export const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Market Prediction");
  const navigations: NavigationTypes = [
    {
      id: 0,
      text: "Market Prediction",
      tabName: "Market Prediction",
    },
    {
      id: 1,
      text: "Finance",
      tabName: "Finance",
    },
    {
      id: 2,
      text: "Analytics",
      tabName: "Data Analytics",
    },
    {
      id: 3,
      text: "Content Generation",
      tabName: "Content Generation",
    },
    {
      id: 4,
      text: "Customer Support",
      tabName: "Customer Support",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-center">
        <div></div>
        <div className="d-flex align-items-center justify-content-center flex-wrap navigation__tab">
          {navigations.map((item, index) => (
            <div key={index} onClick={() => setActiveTab(item.tabName)}>
              <span
                className={
                  activeTab === item.tabName
                    ? "navigation-button__active"
                    : "navigation-button"
                }
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <NavigationContent activeTab={activeTab} />
    </>
  );
};
