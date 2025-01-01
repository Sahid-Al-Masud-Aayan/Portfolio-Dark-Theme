import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaAddressCard, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdSettingsSuggest, MdContactPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import Lottie from 'lottie-react';
import reactAnimation from '../../public/react.json';
import { FaTableList } from 'react-icons/fa6';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay for small and medium screens */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar for large screens */}
      <div
        className={`w-[280px] min-h-screen bg-gradient-to-r from-[#2a2a2a] to-[#424242] flex justify-center z-50 lg:block hidden fixed lg:relative`}
      >
        <ul>
          <div className="container">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[160px] w-[160px] mt-4 rounded-full"
                  src="./prf1.jpg"
                  alt="Logo"
                />
                <h3 className="text-[#ffffff] font-semibold text-[21px] md:text-[26px] text-center font-oswaldHd">
                  Sahid Al Masud Aayan
                </h3>
                <div className="flex scale-[0.8] md:scale-100 justify-center gap-2 items-center">
                  <Lottie className="w-10 h-10" animationData={reactAnimation} />
                  <p className="text-[#969696] text-[18px] font-bold text-center mt-2 font-merri">
                    React Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-6'>
            {/* Full NavLinks for lg screens */}
            <div className="mt-[60px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <IoHome className="text-[24px] text-white" />
                Home
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <FaAddressCard className="text-[24px] text-white" />
                About
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <MdSettingsSuggest className="text-[24px] text-white" />
                Projects
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <FaTableList className="text-[24px] text-white" />
                Skills
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <MdContactPhone className="text-[24px] text-white" />
                Contact
              </NavLink>
            </div>
          </div>
        </ul>
      </div>

      {/* Sidebar for small and medium screens */}
      <div
        className={`w-[280px] min-h-screen bg-gradient-to-r from-[#2a2a2a] to-[#424242] flex justify-center z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden transition-transform duration-300 ease-in-out fixed`}
      >
        <ul>
          {/* Same content for sm and md screens */}
          <div className="container">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-[160px] w-[160px] mt-4 rounded-full"
                  src="./prf1.jpg"
                  alt="Logo"
                />
                <h3 className="text-[#ffffff] font-semibold text-[21px] md:text-[26px] text-center font-oswaldHd">
                  Sahid Al Masud Aayan
                </h3>
                <div className="flex scale-[0.8] md:scale-100 justify-center gap-2 items-center">
                  <Lottie className="w-10 h-10" animationData={reactAnimation} />
                  <p className="text-[#969696] text-[18px] font-bold text-center mt-2 font-merri">
                    React Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* NavLinks replicated */}
          <div onClick={toggleSidebar}>
            <div className="mt-[60px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <IoHome className="text-[24px] text-white" />
                Home
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <FaAddressCard className="text-[24px] text-white" />
                About
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <MdSettingsSuggest className="text-[24px] text-white" />
                Projects
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <FaTableList className="text-[24px] text-white" />
                Skills
              </NavLink>
            </div>
            <div className="mt-[20px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'flex justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-200'
                    : 'rounded-lg flex justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-200'
                }
              >
                <MdContactPhone className="text-[24px] text-white" />
                Contact
              </NavLink>
            </div>
          </div>
        </ul>
      </div>

      {/* Toggle Button for small and medium screens */}
      <div className="lg:hidden flex justify-center items-center h-[50px] w-[50px] bg-gradient-to-r from-[#2a2a2a] to-[#424242] rounded-full fixed top-0 right-0 z-50 mt-2 mr-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <HiX className="text-3xl text-white" /> : <HiMenu className="text-3xl text-white" />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
