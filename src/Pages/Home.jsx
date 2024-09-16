import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFileArrowDown } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
{/* <div className="container">
    <div className="flex justify-center items-center min-h-screen ">
    <div data-aos="fade-up">
    <div className=" h-[600px] w-[1100px] bg-gradient-to-r from-[#7e7e7e] to-[#f3f3f3] rounded-2xl gap-2 p-5">
    <div data-aos="fade-left">
      <div className=" flex justify-end items-end gap-4 ">
      <Link 
      target='blank' 
      to="https://www.facebook.com/" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all'
      >
      <FaFacebook className=' text-3xl text-[#0866FF]'/>
      </Link>

      <Link 
      target='blank' 
      to="https://www.linkedin.com/in/sahid-al-masud-aayan-348653301/" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all'
      >
      <FaLinkedin className=' text-3xl text-[#0A66C2] '/>
       </Link> 

      <Link 
      target='blank' 
      to="https://github.com/Sahid-Al-Masud-Aayan" 
      className='bg-white hover:bg-gradient-to-r from-[#ee0979] to-[#ff6a00] duration-150 h-[54px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all'
      >
      <FaGithub className=' text-3xl text-[#1F2328] '/>
       </Link> 
      </div>
    </div>
      <div className=" flex justify-center gap-20 items-center mt-6">
      <div className="flex flex-col justify-start items-start ">
        
       <div data-aos="fade-left">
  <h1 className="text-[82px] mt-2 font-latoNav leading-tight text-white font-semibold text-animation">
    Sahid Al <br /> Masud Aayan
  </h1>
</div>

    <div data-aos="fade-down"><p className=' text-[14px] font-slab text-[#000000]'>I'm Aayan, a skilled React developer<br/>  with extensive experience in building <br/> dynamic and responsive web applications.</p></div>
      <div data-aos="zoom-in">
      <a class="cursor-pointer overflow-hidden relative z-100 flex justify-center items-center gap-3 bg-yellow-500 group px-14 py-3 mt-10 ml-[115px] rounded-full tracking-wide font-nav" download="Aayan's CV" href="cv1.pdf">
        <FaFileArrowDown className=' text-3xl text-white z-50' />
  <span class="relative z-10 text-white group-hover:text-white text-2xl duration-500">Download my CV</span>
  <span class="absolute w-full h-full bg-green-600 -left-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span class="absolute w-full h-full bg-green-600 -right-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</a>
        </div>
      </div>
      <div className="absolute w-[300px] h-[380px] bg-[#ff8800] left-[650px] top-[30%] rounded-full "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#ff00f7] left-[720px] top-[30%] rounded-full "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#0400ff] left-[690px] top-[30%] rounded-full "></div>
    <div data-aos="fade-right"><img src="./public/file (5).png" className='w-[300px] h-[410px] rounded-lg relative z-auto' alt="My Image" /></div>
      </div>
  </div>
    </div>
      </div important nigga---> shadow-[2px_3px_45px_20px_#38b2ac]
    </div> */}

  <div className="container">
    <div className="md:flex md:justify-center md:items-center md:min-h-screen flex justify-center items-center  ">
    <div data-aos="fade-up">
    <div className="for-shadow h-[900px] md:h-[600px] md:w-[1100px] w-[400px] bg-gradient-to-r from-[#282828] to-[#4b4b4b] rounded-2xl gap-2 p-5 mt-[60px] mb-[60px] md:mt-0 md:mb-0">
    <div data-aos="fade-left">
      <div className=" flex justify-end items-end gap-4 scale-[0.8] md:scale-100">
      <Link 
      target='blank' 
      to="https://www.facebook.com/" 
      className='bg-gray-700 hover:bg-gradient-to-r from-[#51ffe8] to-[#0096d2] duration-150 h-[52px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all cursor-pointer'
      >
      <FaFacebook className=' text-3xl text-[#fff] text-opacity-70'/>
      </Link>

      <Link 
      target='blank' 
      to="https://www.linkedin.com/in/sahid-al-masud-aayan-348653301/" 
      className='bg-gray-700 hover:bg-gradient-to-r from-[#51ffe8] to-[#0096d2] duration-150 h-[52px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all cursor-pointer'
      >
      <FaLinkedin className=' text-3xl text-[#fff] text-opacity-70 '/>
       </Link> 

      <Link 
      target='blank' 
      to="https://github.com/Sahid-Al-Masud-Aayan" 
      className='bg-gray-700 hover:bg-gradient-to-r from-[#51ffe8] to-[#0096d2] duration-150 h-[52px] w-[46px] flex justify-center items-center rounded-xl mt-4 transform hover:translate-y-[-20px] transition-all cursor-pointer'
      >
      <FaGithub className=' text-3xl text-[#fff] text-opacity-70'/>
       </Link> 
      </div>
    </div>
      <div className=" md:flex md:flex-row flex-col justify-center md:gap-20 gap-1 items-center mt-6">
      <div className="flex flex-col md:justify-start md:items-start justify-center items-center">
        
       <div data-aos="fade-left">
  <h1 className="md:text-[82px] text-[52px] mt-2 text-center md:text-start font-latoNav leading-tight  bg-gradient-to-r to-sky-300 from-teal-600 bg-clip-text text-transparent font-semibold text-animation">
    Sahid Al <br /> Masud Aayan
  </h1>
</div>

    <div data-aos="fade-down"><p className=' md:text-[14px] text-[12px] font-slab text-[#ffffff]'>I'm Aayan, a skilled React developer<br/>  with extensive experience in building <br/> dynamic and responsive web applications.</p></div>
      <div data-aos="zoom-in">
      <a class="cursor-pointer overflow-hidden relative z-100 flex justify-center items-center gap-3 bg-gradient-to-r from-[#43ffcd] to-[#239cf9] group py-2 px-5 md:px-14 md:py-3 mt-5 md:mt-10 md:ml-[115px] ml-0 rounded-full tracking-wide font-nav active:scale-90 duration-200" download="Aayan's CV" href="cv2.pdf">
        <FaFileArrowDown className='text-lg md:text-3xl text-white z-50' />
  <span class="relative z-10 text-white group-hover:text-white md:text-2xl text-lg duration-500">Download my CV</span>
  <span class="absolute w-full h-full bg-gray-900 -left-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span class="absolute w-full h-full bg-gray-900 -right-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</a>
        </div>
      </div>
      <div className="absolute md:w-[300px] md:h-[380px] bg-[#292929] md:left-[650px] md:top-[23.5%] rounded-full "></div>
      <div className="absolute md:w-[300px] md:h-[380px] bg-[#282828] md:left-[720px] md:top-[23.5%] rounded-full "></div>
      <div className="absolute md:w-[300px] md:h-[380px] bg-[#60ffe5] md:left-[690px] md:top-[22.5%] rounded-full "></div>
      <div className="ml-[30px] md:mt-0 mt-[60px] md:ml-0">
      <div className="absolute w-[300px] h-[380px] bg-[#ff8800] left-[90px] top-[53%] rounded-full scale-90 md:hidden "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#ff00f7] left-[10px] top-[53%] rounded-full scale-90  md:hidden "></div>
      <div className="absolute w-[300px] h-[380px] bg-[#0400ff] left-[50px] top-[52%] rounded-full scale-90 md:hidden "></div>
    <div data-aos="fade-right"><img src="./photo.png" className='w-[300px] h-[410px] rounded-lg relative z-auto' alt="My Image" /></div>
      </div>
      </div>
  </div>
    </div>
      </div>
    </div> 
    </>
  )
}

export default Home