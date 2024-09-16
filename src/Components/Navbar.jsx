// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { IoHome } from "react-icons/io5";
// import { FaAddressCard } from "react-icons/fa";
// import { MdSettingsSuggest } from "react-icons/md";
// import { FaTableList } from "react-icons/fa6";
// import { MdContactPhone } from "react-icons/md";
// import Lottie from 'lottie-react';
// import reactAnimation from '../../public/react.json'


// const Navbar = () => {
//   return (
//    <>
// <div className="flex flex-col md:flex-row">
//   <div className="w-[100px] md:w-[270px] min-h-screen bg-gradient-to-r from-[#662D8C] to-[#ED1E79] flex flex-col px-5">
//     <ul className="w-full">
//       <div className="container flex flex-col gap-3 items-center">
//         <div className="hidden md:flex flex-col justify-center items-center">
//           <img className="h-[160px] w-[160px] mt-4 rounded-full" src="./prf1.jpg" alt="Logo" />
//           <h3 className="text-[#c3c3c3] font-semibold text-[26px] text-center font-oswaldHd">Sahid Al Masud Aayan</h3>
//           <div className="flex justify-center gap-2 items-center">
//             <Lottie className="w-10 h-10" animationData={reactAnimation} />
//             <p className="text-[#303030] text-[18px] font-bold text-center mt-2 font-merri">React Developer</p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-[80px] md:mt-[90px]">
//         <NavLink to="/" className={({ isActive }) =>
//           isActive
//             ? "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav duration-100 rounded-lg"
//             : "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 duration-100 text-[24px] text-white font-nav rounded-lg"
//         }>
//           <IoHome className="text-[24px] text-white" />
//           Home
//         </NavLink>
//       </div>
//       <div className="mt-[20px]">
//         <NavLink to="/about" className={({ isActive }) =>
//           isActive
//             ? "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-100"
//             : "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-100 rounded-lg"
//         }>
//           <FaAddressCard className="text-[24px] text-white" />
//           About
//         </NavLink>
//       </div>
//       <div className="mt-[20px]">
//         <NavLink to="/projects" className={({ isActive }) =>
//           isActive
//             ? "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-100"
//             : "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-100 rounded-lg"
//         }>
//           <MdSettingsSuggest className="text-[24px] text-white" />
//           Projects
//         </NavLink>
//       </div>
//       <div className="mt-[20px]">
//         <NavLink to="/skills" className={({ isActive }) =>
//           isActive
//             ? "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-100"
//             : "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-100 rounded-lg"
//         }>
//           <FaTableList className="text-[24px] text-white" />
//           Skills
//         </NavLink>
//       </div>
//       <div className="mt-[20px]">
//         <NavLink to="/contact" className={({ isActive }) =>
//           isActive
//             ? "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 backdrop-blur-lg bg-white/30 text-[24px] text-[#fff] font-nav rounded-lg duration-100"
//             : "flex flex-col md:flex-row justify-start items-center gap-4 px-5 py-2 hover:backdrop-blur-lg hover:bg-white/30 text-[24px] text-white font-nav duration-100 rounded-lg"
//         }>
//           <MdContactPhone className="text-[24px] text-white" />
//           Contact
//         </NavLink>
//       </div>
//     </ul>
//   </div>
// </div>

//    </>
//   )
// }

// export default Navbar