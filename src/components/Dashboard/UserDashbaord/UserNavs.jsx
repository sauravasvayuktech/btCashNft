import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { RiLogoutCircleLine, RiShieldUserFill, RiUserCommunityFill } from "react-icons/ri";
import { TbAffiliateFilled } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const UserNavs = ({isOpen,setIsOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);
     const [visibility, setVisibility] = useState("d-none");

     const handleToggle = () => {
        setIsOpen(!isOpen);
      };
    
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
    return (
        <>
            <ul className="menu-inner py-1 list-unstyled">
                <li className="menu-item open">
                    <Link to="/user-dashboard" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>
                        {/* <i className="menu-icon tf-icons ti ti-smart-home"></i> */}


                        <MdDashboard className={`bg-transparent d-flex justify-content-center align-items-center fs-3  `} />

                        <div data-i18n="Dashboard" className={visibility}>Dashboard</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/user-profile" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>
                        {/* <i className="fa-solid fa-bars"></i> */}


                        <RiShieldUserFill className="bg-transparent d-flex justify-content-center align-items-center fs-3" />


                        <div data-i18n="Stake Plan" className={visibility}>Profile</div>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="/myaffiliates" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>
                        {/* <i className="fa-solid fa-trophy"></i> */}

                        <TbAffiliateFilled className="bg-transparent d-flex justify-content-center align-items-center fs-3" />

                        <div data-i18n="Staking History" className={visibility}>MyAffiliate </div>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="/mytickets" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>


                        <IoTicketSharp className="bg-transparent d-flex justify-content-center align-items-center fs-3" />

                        <div data-i18n="Transactions" className={visibility}>My Tickets</div>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="/community" className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>
                        {/* <i className="menu-icon tf-icons ti ti-wallet"></i> */}

                        <RiUserCommunityFill className="bg-transparent d-flex justify-content-center align-items-center fs-3" />
                        <div data-i18n="Wallet" className={visibility}>Community</div>
                    </Link>
                </li>







                <li className="menu-item">
                    <Link className={`menu-link  mb-4 d-flex align-items-center gap-3 sidemenu-dash ${isOpen ? "ms-5" : "justify-content-center ms-0"}`}>
                        {/* <i className="menu-icon tf-icons ti ti-logout"></i> */}
                        <RiLogoutCircleLine className="bg-transparent d-flex justify-content-center align-items-center fs-3" />

                        <div data-i18n="Logout" className={visibility}>Logout</div>
                    </Link>
                </li>
                {/* <li className="pt-5">
          <div className="d-flex justify-content-center align-items-center gap-2 px-0 w-100 ps-2">
            <div className="w-100">
              <img src={sunI} alt="" style={{ width: '20px' }} />
            </div>
            <label className="switch switch-primary me-0">
              <input type="checkbox" className="switch-input" id="modeChanges" onChange={changeMode} />
              <span className="switch-toggle-slider">
                <span className="switch-on"></span>
                <span className="switch-off"></span>
              </span>
            </label>
          </div>
        </li> */}
            </ul>
        </>
    )
}

export default UserNavs