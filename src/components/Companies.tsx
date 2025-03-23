import React from "react";
import Image from "next/image";

import { useWindowSize } from "@/hooks";

type CompaniesType = string[];
export const Companies = () => {
  const { width } = useWindowSize();
  const companies: CompaniesType = [
    "layers.png",
    "sis.png",
    "cir.png",
    "cat.png",
    "quo.png",
  ];
  return (
    <>
      <p className="text-secondary heading__companies mt-4">
        Join 4,000+ companies already growing
      </p>
      <div
        className={
          width < 769
            ? "navigation__container navigation"
            : "d-flex align-items-center justify-content-between"
        }
      >
        {companies.map((item, index) => (
          <>
            <div className="mt-5" key={index}>
              <Image
                src={`/${item}`}
                alt="Image"
                height={width < 769 ? 30 : 48}
                width={width < 769 ? 100 : 150}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
