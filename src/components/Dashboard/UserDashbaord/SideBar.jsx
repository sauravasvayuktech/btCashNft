
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import logo from "../../../assets/Images/logo.webp";
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";
import { RiShieldUserFill, RiUserCommunityFill } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";

export default function SideBar() {
  const [category, setCategory] = useState(false);
  const [income, setIncome] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navigate = useNavigate();



  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); // Close sidebar if clicked outside
    }
  };




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



  return (
    <aside
      ref={sidebarRef}
      id="layout-menu"
      className={`layout-menu menu-vertical menu bg-menu-theme d-lg-block d-md-block d-none ${isOpen ? "open" : ""
        }`}
      style={{
        borderRight: "1px solid #e6ecf52c",
        width: isOpen ? "250px" : "99px",
        textAlign: "center",
        transition: "width 0.3s",
      }}
    >
      <div className="app-brand demo mt-4" style={{ margin: "auto" }}>
        <Link to="/user/dashboard" className="app-brand-link">
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
        className="layout-menu-toggle menu-link mb-4 d-flex align-items-center gap-3 text-large ms-auto w-100"
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
      <ul className="menu-inner py-1 list-unstyled">
        <li className="menu-item open">
          <Link to="/user/dashboard" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
            {/* <i class="menu-icon tf-icons ti ti-smart-home"></i> */}
           
          
            <MdDashboard  className={`bg-transparent d-flex justify-content-center align-items-center fs-3  `}/>
            
            <div data-i18n="Dashboard" className={`${isOpen ? "" : "d-none"}`}>Dashboard</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/user/buyplan" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
            {/* <i className="fa-solid fa-bars"></i> */}
          
           
            <RiShieldUserFill className="bg-transparent d-flex justify-content-center align-items-center fs-3" />
              
            
            <div data-i18n="Stake Plan" className={`${isOpen ? "" : "d-none"}`}>Profile</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/user/staking-history" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
            {/* <i className="fa-solid fa-trophy"></i> */}
           
              <TbAffiliateFilled className="bg-transparent d-flex justify-content-center align-items-center fs-3" />
           
            <div data-i18n="Staking History" className={`${isOpen ? "" : "d-none"}`}>MyAffiliate </div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/user/transaction" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
           
         
            <IoTicketSharp className="bg-transparent d-flex justify-content-center align-items-center fs-3" />
           
            <div data-i18n="Transactions" className={`${isOpen ? "" : "d-none"}`}>My Tickets</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/user/wallet" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
            {/* <i class="menu-icon tf-icons ti ti-wallet"></i> */}
     
            <RiUserCommunityFill className="bg-transparent d-flex justify-content-center align-items-center fs-3" />
            <div data-i18n="Wallet" className={`${isOpen ? "" : "d-none"}`}>Community</div>
          </Link>
        </li>
    


  



        <li className="menu-item">
          <Link className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}` }>
            {/* <i className="menu-icon tf-icons ti ti-logout"></i> */}
            <i className="bg-transparent d-flex justify-content-center align-items-center fs-3">
              <img alt="" className="" style={{ width: '20px' }} />
            </i>
            <div data-i18n="Logout" className={`${isOpen ? "" : "d-none"}`}>Logout</div>
          </Link>
        </li>
        {/* <li className="pt-5">
          <div class="d-flex justify-content-center align-items-center gap-2 px-0 w-100 ps-2">
            <div className="w-100">
              <img src={sunI} alt="" style={{ width: '20px' }} />
            </div>
            <label class="switch switch-primary me-0">
              <input type="checkbox" class="switch-input" id="modeChanges" onChange={changeMode} />
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
            </label>
          </div>
        </li> */}
      </ul>
    </aside>
  );
}
