
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import logo from "../../../assets/Images/logo.webp";
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";
import { RiLogoutCircleLine, RiShieldUserFill, RiUserCommunityFill } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import UserNavs from "./UserNavs";

export default function SideBar({isMobileNav}) {
  const [category, setCategory] = useState(false);
  const [income, setIncome] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNav, setmobileNav] = useState(false);
  const [mobileNavVisibility, setmobileNavVisibility] = useState("d-none");
  const sidebarRef = useRef(null);

  const navigate = useNavigate();



  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); // Close sidebar if clicked outside
    }
  };

  // const MobileNavActive = () =>{
  //   if(isMobileNav){
  //     setmobileNav(true)
  //     setIsOpen(true)
  //     setmobileNavVisibility("d-block")
  //   }
  // }



  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = (event) => {
    const isChecked = event.target.checked;
    const cssLinks = document.querySelectorAll('.themeStyles'); // Select all relevant <link> tags

    const lightThemes = [
      '/assets/vendor/css/rtl/core.css',
      '/assets/vendor/css/rtl/theme-default.css',
    ];

    const darkThemes = [
      '/assets/vendor/css/rtl/core-dark.css',
      '/assets/vendor/css/rtl/theme-default-dark.css',
    ];

    const themesToApply = isChecked ? lightThemes : darkThemes;

    cssLinks.forEach((link, index) => {
      link.href = themesToApply[index]; // Update each link href
    });

    // Save the user's choice in localStorage
    localStorage.setItem("theme", isChecked ? "light" : "dark");
  };

  // Check the saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isLightMode = savedTheme === "light";

    // Set the checkbox based on saved theme
    const themeToggleCheckbox = document.querySelector("#themeToggle");
    if (themeToggleCheckbox) {
      themeToggleCheckbox.checked = isLightMode;
    }

    // Apply the theme based on the saved choice
    const cssLinks = document.querySelectorAll(".themeStyles");
    const lightThemes = [
      "/assets/vendor/css/rtl/core.css",
      "/assets/vendor/css/rtl/theme-default.css",
    ];
    const darkThemes = [
      "/assets/vendor/css/rtl/core-dark.css",
      "/assets/vendor/css/rtl/theme-default-dark.css",
    ];
    const themesToApply = isLightMode ? lightThemes : darkThemes;

    cssLinks.forEach((link, index) => {
      link.href = themesToApply[index];
    });
  });

  const [visibility, setVisibility] = useState("d-none");

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setVisibility("d-block");
      }, 150);
      return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
    } else {
      setVisibility("d-none");
    }
  }, [isOpen]);

  useEffect(() => {
    if(isMobileNav){
      setmobileNav(true)
      setIsOpen(true)
      setmobileNavVisibility("d-block")
    }
  }, [isMobileNav]);

  return (
    <aside
      ref={sidebarRef}
      id="layout-menu"
      className={`layout-menu menu-vertical menu bg-menu-theme ${mobileNavVisibility} d-lg-block   ${isOpen ? "open" : ""
        }`}
      style={{
        
        width: isOpen ? "250px" : "99px",
        textAlign: "center",
        transition: "width 0.3s",
      }}
    >
    <div className="fixedLayout">
    <div className="app-brand demo mt-4 mb-lg-0 mb-4" style={{ margin: "auto" }}>
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img
              className="mt-2 mb-2"
              src={logo}
              width="70%"
              alt="BTC Logo"
            />
          </span>
        </Link>
      </div>
      <p>
       
      </p>

      <button
        className="layout-menu-toggle menu-link mb-4 d-lg-flex d-none align-items-center gap-3 text-large ms-auto w-100"
        onClick={handleToggle}
        style={{ background: "none", border: "none" }}
      >
        {isOpen ? (
          <i className="bg-transparent d-flex justify-content-center align-items-center fs-3 mx-auto">
            {/* <img src={""} alt="" className="icon-toggler" style={{ width: '22px', rotate: '180deg' }} /> */}
            <BiSolidChevronLeftCircle className="icon-toggler text-white fs-2" />
          </i>
        ) : (
          <i className="bg-transparent d-flex justify-content-center align-items-center fs-3 mx-auto">
            <BiSolidChevronRightCircle className="icon-toggler text-white fs-2" />
          </i>
        )}
      </button>

      <div className="menu-inner-shadow"></div>
      <UserNavs isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    </aside>
  );
}
