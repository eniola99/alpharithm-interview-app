import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";

type NavigationContentType = {
  title: string;
  text: string;
  imgSrc: string;
}[];

interface NavigationContentProps {
  activeTab: string;
}

export const NavigationContent = ({ activeTab }: NavigationContentProps) => {
  const navigationRef = useRef<HTMLDivElement | null>(null);
  const navigationContent: NavigationContentType = useMemo(
    () => [
      {
        title: "Market Prediction",
        text: "Use AI insights for smarter business decisions and stay competitive.",
        imgSrc: "market_prediction.png",
      },
      {
        title: "Finance",
        text: "Our AI models analyze financial data for confident investments.",
        imgSrc: "finance.png",
      },
      {
        title: "Data Analytics",
        text: "Transform data into insights with AI analytics that enhance decisions.",
        imgSrc: "analytics.png",
      },
      {
        title: "Content Generation",
        text: "Create quality content easily with AI that knows your brand and audience.",
        imgSrc: "content_generation.png",
      },
      {
        title: "Customer Support",
        text: "Use AI chatbots for instant, personalized customer support.",
        imgSrc: "customer_support.png",
      },
    ],
    []
  );

  useEffect(() => {
    if (!navigationRef.current) return;

    const activeIndex = navigationContent.findIndex(
      (item) => item.title === activeTab
    );
    if (activeIndex === -1) return;

    const activeCard = document.getElementById(`nav-card-${activeIndex}`);
    if (activeCard) {
      const container = navigationRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = activeCard.offsetWidth;
      const scrollLeft =
        activeCard.offsetLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab, navigationContent]);

  return (
    <div className="navigation__container" ref={navigationRef}>
      <div className="navigation">
        {navigationContent.map((item, index) => (
          <div
            id={`nav-card-${index}`}
            className={
              activeTab === item.title
                ? "navigation__card navigation_active"
                : "navigation__card"
            }
            key={index}
          >
            <div className="card__content">
              <div className="d-flex flex-column card__text">
                <span className="card__title mb-4">{item.title}</span>
                <span className="card__paragraph">{item.text}</span>
                <span role="button" className="card__button text-white mt-4">
                  Learn More
                </span>
              </div>
              <div className="navigation__content-image">
                <Image
                  className={activeTab === item.title ? "card__image" : ""}
                  src={`/${item.imgSrc}`}
                  alt="Image"
                  height={activeTab === item.title ? 478 : 513}
                  width={520}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
