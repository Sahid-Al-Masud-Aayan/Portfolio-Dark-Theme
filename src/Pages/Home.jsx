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
  <div className="container">
    <div className="lg:flex lg:justify-center lg:items-center lg:min-h-screen flex justify-center items-center  ">
    <div data-aos="fade-up">
    <div className="for-shadow lg:h-[600px] lg:w-[1100px] w-[400px] md:w-[750px] bg-gradient-to-r from-[#282828] to-[#4b4b4b] rounded-2xl gap-2 p-5 mt-[60px] mb-[60px] lg:mt-0 lg:mb-0">
    <div data-aos="fade-left">
      <div className=" flex justify-end items-end gap-4 md:scale-90 scale-[0.8] lg:scale-100">
      <Link 
      target='blank' 
      to="https://www.facebook.com/profile.php?id=61571378758720" 
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
      <div className=" lg:flex lg:flex-row flex-col justify-center lg:gap-20 gap-1 items-center mt-6">
      <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
        
       <div data-aos="fade-left">
  <h1 className="lg:text-[82px] text-[52px] md:text-[68px] mt-2 text-center lg:text-start font-latoNav leading-tight  bg-gradient-to-r to-sky-300 from-teal-600 bg-clip-text text-transparent font-semibold text-animation">
    Sahid Al <br /> Masud Aayan
  </h1>
</div>

    <div data-aos="fade-down">
    <div>
  {/* Default text for small and large devices (with <br> tags) */}
  <p className="lg:text-[14px]  font-slab text-[#ffffff] hidden lg:block">
    I'm Aayan, a skilled Frontend React developer<br /> 
    with extensive experience in building dynamic<br />
     and responsive web applications.
  </p>

  {/* Text for medium devices (without <br> tags) */}
  <p className="md:text-[17px] text-[12px] font-slab text-[#ffffff] md:block lg:hidden text-center">
    I'm Aayan, a skilled React developer with extensive experience in building dynamic and responsive web applications.
  </p>
</div>

    </div>
      <div data-aos="zoom-in">
      <a class="cursor-pointer overflow-hidden relative z-100 flex justify-center items-center gap-3 bg-gradient-to-r from-[#43ffcd] to-[#239cf9] group py-2 px-5 lg:px-14 lg:py-3 mt-10 lg:mt-10 lg:ml-[115px] ml-0 rounded-full tracking-wide font-nav active:scale-90 duration-200"
       download="Aayan's CV"
       href="Aayan's Resume.pdf">
        <FaFileArrowDown className='text-lg lg:text-3xl text-white z-50' />
  <span class="relative z-10 text-white group-hover:text-white lg:text-2xl md:text-2xl text-xl duration-500">Download my CV</span>
  <span class="absolute w-full h-full bg-gray-900 -left-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span class="absolute w-full h-full bg-gray-900 -right-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</a>
        </div>
      </div>
      <div>
  {/* Large Device */}
  <div className="lg:block hidden">
    <div className="absolute lg:w-[300px] lg:h-[380px] bg-[#292929] lg:left-[650px] lg:top-[23.5%] rounded-full"></div>
    <div className="absolute lg:w-[300px] lg:h-[380px] bg-[#282828] lg:left-[720px] lg:top-[23.5%] rounded-full"></div>
    <div className="absolute lg:w-[300px] lg:h-[380px] bg-[#60ffe5] lg:left-[690px] lg:top-[22.5%] rounded-full"></div>
  </div>

  {/* Small Device */}
  <div className="md:hidden lg:hidden block">
    <div className="absolute w-[300px] h-[380px] bg-[#292929] left-[90px] top-[53%] rounded-full scale-90"></div>
    <div className="absolute w-[300px] h-[380px] bg-[#292929] left-[10px] top-[53%] rounded-full scale-90"></div>
    <div className="absolute w-[300px] h-[380px] bg-[#60ffe5] left-[50px] top-[52%] rounded-full scale-90"></div>
  </div>

  {/* Medium Device */}
  <div className="hidden md:block lg:hidden">
    <div className="absolute w-[300px] h-[380px] bg-[#292929] left-[170px] top-[57%] rounded-full scale-90"></div>
    <div className="absolute w-[300px] h-[380px] bg-[#292929] left-[260px] top-[57%] rounded-full scale-90"></div>
    <div className="absolute w-[300px] h-[380px] bg-[#60ffe5] left-[220px] top-[56%] rounded-full scale-90"></div>
  </div>

  {/* Shared Image */}
  <div data-aos="fade-right">
    <img
      src="./photo.png"
      className="w-[300px] h-[410px] rounded-lg relative z-auto lg:mt-0 lg:ml-0 mt-[58px] ml-[27px] md:ml-[200px] md:mt-[50px]"
      alt="My Image"
    />
  </div>
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