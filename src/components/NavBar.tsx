import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { useWindowSize, useOutsideClick } from "@/hooks";

export const NavBar = () => {
  const { width } = useWindowSize();
  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick(() => setIsOpen(false), dropDownRef);

  return (
    <div className="container p-5">
      <div className="nav__container">
        <div>
          <Link className="navbar-brand text-white" href="#">
            <Image src={"/logo.png"} height={48} width={48} alt="logo" />
          </Link>
        </div>
        <div className="gap-5 nav__container-options">
          <Link href="#">
            <span className="text-white nav-option">Models</span>
          </Link>

          <Link href="#">
            <span className="text-white nav-option">Pricing</span>
          </Link>

          <Link href="#">
            <span className="text-white nav-option">About Us</span>
          </Link>

          <Link href="#">
            <span className="text-white nav-option">Contact Us</span>
          </Link>
          <Link href="#">
            <span className="text-white nav-option">Custom Models</span>
          </Link>
        </div>
        <div className="nav__container-actions">
          <div className="">
            <span role="button" className="btn__login text-white">
              Login
            </span>
            <span role="button" className="btn__signup text-dark mx-3">
              Get Started Now
            </span>
          </div>
        </div>
        {width < 769 && (
          <div style={{ position: "absolute", right: "20px" }}>
            <Image
              className="bg-white"
              src="/hambuger.png"
              width={30}
              height={30}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
            />

            {/* <FeatherIcon
              icon="align-left"
              size={35}
              onClick={() => setIsOpen(!isOpen)}
            /> */}
          </div>
        )}
      </div>
      {width < 769 && (
        <>
          {isOpen && (
            <div
              className="nav-container__mobile"
              ref={dropDownRef}
              style={{
                position: "absolute",
                top: "90px",
                right: "30px",
              }}
            >
              <ul>
                <li>
                  <Link href="#" className="text-dark">
                    Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    Custom Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-dark">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
