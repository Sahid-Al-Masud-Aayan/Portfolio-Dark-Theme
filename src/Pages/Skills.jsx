import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GrReactjs } from 'react-icons/gr'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
        <div className="container">
    <div className="flex justify-center items-center min-h-screen">
    <div data-aos="fade-down">
    <div className="w-[400px] md:h-[1800px] md:w-[1000px] bg-gradient-to-r from-[#383838] to-[#242424] rounded-3xl flex flex-col items-center gap-2 p-4 mt-[60px] mb-[60px]">
    <div data-aos="fade-left"><h1 className='text-[48px] md:text-[60px] mt-2 font-headFont font-semibold bg-gradient-to-r to-sky-300 from-teal-800 bg-clip-text text-transparent'>My Skills</h1></div>
    <h3 className='text-[21px] md:text-[28px] font-nav mb-4 text-center text-[#ffffff]'>As a React developer, I excel in building dynamic and responsive web applications using a robust tech stack that includes React, HTML5, CSS3, and Tailwind CSS. My expertise extends to creating seamless user interfaces with advanced JavaScript techniques and state management tools like Redux. Additionally, I leverage Figma for crafting detailed UI/UX designs and use Canva to produce high-quality graphics. My focus is on delivering pixel-perfect, performant solutions that enhance user experience and meet modern web standards.</h3>
    <div data-aos="fade-up">
    <div className="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-5">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <GrReactjs className="text-8xl text-[#61DAFB]"/>
      <h2 className="text-5xl font-bold text-[#42d6ff] mb-2 font-slab">React</h2>
    </div>

    <div className="bg-[#61DAFB] absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3]">
      Building robust and scalable single-page applications with React, using it’s components, hooks, and state management for marvelous user experiences.
      </p>
    </div>
  </div>
</div>
    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <RiTailwindCssFill className="text-8xl text-[#3EAEB0]"/>
      <h2 className="text-5xl font-bold text-[#3EAEB0] mb-2 font-slab">Tailwind CSS</h2>
    </div>

    <div className="bg-[#3EAEB0] absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Styling applications with Tailwind CSS for a modern and flexible design approach.
      </p>
    </div>
  </div>
</div>
    </div>
    </div>
    <div data-aos="fade-up">

    <div className="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-5">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiJquery className="text-8xl text-[#0868AC]"/>
      <h2 className="text-5xl font-bold text-[#0868AC] mb-2 font-slab">JQuery</h2>
    </div>

    <div className="bg-[#0868AC] absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Enhancing web interactivity and handling complex DOM manipulations with ease.
      </p>
    </div>
  </div>
</div>
    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiRedux className="text-8xl text-[#764ABC]"/>
      <h2 className="text-5xl font-bold text-[#764ABC] mb-2 font-slab">Redux</h2>
    </div>

    <div className="bg-[#764ABC] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Managing application state with Redux, ensuring predictable and maintainable state transitions.
     </p>
    </div>
  </div>
</div>
    </div>
    </div>
    <div data-aos="fade-up">
    <div className="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-5">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <BiLogoFirebase className="text-8xl text-[#F7C52A]"/>
      <h2 className="text-5xl font-bold text-[#F7C52A] mb-2 font-slab">Firebase</h2>
    </div>

    <div className="bg-[#F7C52A] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Proficient in integrating Firebase with React applications for real-time data management, authentication, and hosting, ensuring scalable and secure web solutions.      </p>
    </div>
  </div>
</div>
    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white  rounded-lg shadow-lg backface-hidden">
      <SiJavascript className="text-8xl text-[#F4E11E]"/>
      <h2 className="text-5xl font-bold text-[#F4E11E] mb-2 font-slab">JavaScript</h2>
    </div>

    <div className="bg-[#F4E11E] absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Writing clean, efficient, and maintainable JavaScript code to enhance functionality and interactivity of the websites.
      </p>
    </div>
  </div>
</div>
    </div>
    </div>
    <div data-aos="fade-up">
    <div className="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-5">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiHtml5 className="text-8xl text-[#E95828]"/>
      <h2 className="text-5xl font-bold text-[#E95828] mb-2 font-slab">HTML5</h2>
    </div>

    <div className="bg-[#E95828] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Experienced in utilizing HTML5 to build accessible, semantic, and performant web applications, seamlessly integrating with React for dynamic and responsive user interfaces      </p>
    </div>
  </div>
</div>
    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiCss3 className="text-8xl text-[#1771B5]"/>
      <h2 className="text-5xl font-bold text-[#1771B5] mb-2 font-slab">CSS3</h2>
    </div>

    <div className="bg-[#1771B5] absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Skilled in CSS3 for crafting responsive, visually appealing layouts, utilizing advanced features like Flexbox, Grid, and animations, and seamlessly integrating them with React components.      </p>
    </div>
  </div>
</div>
    </div>
    </div>
    <div data-aos="fade-up">
    <div className="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-5">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiBootstrap className="text-8xl text-[#7710F1]"/>
      <h2 className="text-5xl font-bold text-[#7710F1] mb-2 font-slab">Bootstrap</h2>
    </div>

    <div className="bg-[#7710F1] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Utilizing Bootstrap and Tailwind for rapid and responsive UI development, ensuring your application looks great on all devices.      </p>
    </div>
  </div>
</div>
    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <FaFigma className="text-8xl text-[#444444]"/>
      <h2 className="text-5xl font-bold text-[#444444] mb-2 font-slab">Figma</h2>
    </div>

    <div className="bg-[#444444] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Proficient in using Figma to create responsive and interactive UI/UX designs, effectively translating them into high-quality React components with pixel-perfect precision.      </p>
    </div>
  </div>
</div>
    </div>
    </div>
    <div data-aos="fade-up">

    <div className="group w-[380px] h-[200px] md:w-[440px] md:h-[210px] perspective-[1000px] mb-3">
  <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">

    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg backface-hidden">
      <SiCanva className="text-8xl text-[#50C6CA]"/>
      <h2 className="text-5xl font-bold text-[#50C6CA] mb-2 font-slab">Canva</h2>
    </div>

    <div className="bg-[#50C6CA] absolute inset-0 flex flex-col justify-center items-center  rounded-lg shadow-lg backface-hidden transform rotate-y-180">
      <p className="text-white text-lg font-montserrat text-center p-3">
      Proficient in using Canva to create visually compelling graphics and design assets, enhancing the aesthetic appeal of React applications with custom, high-quality visuals
      </p>
    </div>
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

export default Skills