import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFileArrowDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoCloseCircle } from "react-icons/io5";
import { DiCodeBadge } from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";




const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);


  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);


  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const openModal4 = () => setIsModalOpen4(true);
  const closeModal4 = () => setIsModalOpen4(false);

  const [isModalOpen5, setIsModalOpen5] = useState(false);

  const openModal5 = () => setIsModalOpen5(true);
  const closeModal5 = () => setIsModalOpen5(false);

  const [isModalOpen6, setIsModalOpen6] = useState(false);

  const openModal6 = () => setIsModalOpen6(true);
  const closeModal6 = () => setIsModalOpen6(false);
  
  const [isModalOpen7, setIsModalOpen7] = useState(false);

  const openModal7 = () => setIsModalOpen7(true);
  const closeModal7 = () => setIsModalOpen7(false);
  
  const [isModalOpen8, setIsModalOpen8] = useState(false);

  const openModal8 = () => setIsModalOpen8(true);
  const closeModal8 = () => setIsModalOpen8(false);
  
  const [isModalOpen9, setIsModalOpen9] = useState(false);

  const openModal9 = () => setIsModalOpen9(true);
  const closeModal9 = () => setIsModalOpen9(false);
  
  const [isModalOpen10, setIsModalOpen10] = useState(false);

  const openModal10 = () => setIsModalOpen10(true);
  const closeModal10 = () => setIsModalOpen10(false);
  
  const [isModalOpen11, setIsModalOpen11] = useState(false);

  const openModal11 = () => setIsModalOpen11(true);
  const closeModal11 = () => setIsModalOpen11(false);


  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <div className="container">
    <div className="flex justify-center items-center min-h-screen ">
    <div data-aos="zoom-in-up">
    <div className="w-[400px] lg:w-[1200px] md:w-[700px] bg-gradient-to-r from-[#1f1f1f] to-[#454545] rounded-[85px] gap-2 p-8 md:mt-0 md:mb-0 lg:mt-[60px] lg:mb-[60px]">
    <div data-aos="fade-up"><h1 className='text-[48px] md:text-[60px] text-center mt-2 font-headFont font-semibold bg-gradient-to-r to-sky-300 from-teal-800 bg-clip-text text-transparent'>My Projects</h1></div>
    <div className="flex lg:flex-row flex-col justify-center items-center gap-5 mt-6">    
    <div onClick={openModal4} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./ct7.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">ProChat</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          A chat app with many features where a user can create an account and chat with friends along with much more.
          </p>
        </div>
      </div>

      {isModalOpen4 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal4}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-gray-200 rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal4}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Prochat</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js, Redux, Firebase and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://pro-chat-one.vercel.app/'>pro-chat-one.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct1.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct3.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct4.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct5.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./ct6.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              ProChat is a modern, feature-rich chat application built using React, Firebase, and Redux. It offers users the ability to create accounts, connect with friends through a seamless friend request system, and engage in real-time chats at any time. The application also includes advanced functionality for blocking and unblocking users, ensuring a safe and customizable experience.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    <div onClick={openModal5} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./lpc7.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Lapcon</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          An online e-commerce store to browse and buy laptops easily with the option to add or remove items from your shopping cart.
          </p>
        </div>
      </div>

      {isModalOpen5 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal5}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal5}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Lapcon</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js, Redux, Firebase and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://lapcon.vercel.app'>lapcon.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc3.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc4.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc5.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./lpc6.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              Lapcon is a e-commerce platform tailored for laptop shopping, built using React, Firebase, and Redux. 
              This application provides a simple and intuitive user experience where customers can browse laptops,
               add items to their cart, and manage their selections by adding or removing products as needed
               without any log in or register feature.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    <div onClick={openModal6} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./al5.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Auto Land</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          A useful product filtering out process used in e-commerce stores made with a good example of cars.
          </p>
        </div>
      </div>

      {isModalOpen6 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal6}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal6}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Auto Land</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://autoland.vercel.app/'>autoland.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./al1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./al2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./al3.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./al4.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              Auto Land is a site where product filtering out process
              which is widely used in e-commerce sites nowadays for better user experience 
              has been made and three different categories of cars are
              used over here to make people the process understand easily. 
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    </div>

     

    <div className="flex lg:flex-row flex-col justify-center items-center gap-5 mt-6">
    <div onClick={openModal7} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./np13.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">NewsPro</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
            A static news website that covers national, and international news, as well as opinion pieces and investigative reports.
          </p>
        </div>
      </div>

      {isModalOpen7 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal7}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-slate-200 rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal7}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">NewsPro</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://news-pro-ten.vercel.app/'>news-pro-ten.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np1.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np3.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np4.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np5.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np6.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np7.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np8.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np9.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np10.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2">
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np11.png" alt="Project Details Image" />
              <img className="md:w-[350px] md:h-[170px] rounded" src="./np12.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              NewsPro is a non-dynamic, static dekstop news website which is beautifully designed with Tailwind CSS without any responsive effect for any other devices.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    <div onClick={openModal8} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./sf1.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Stylla Fashion</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          Stylla Fashion's official website with a bold look and design, along wih various features and information.
          </p>
        </div>
      </div>

      {isModalOpen8 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal8}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal8}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Stylla Fashion</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://stylla-fashion.vercel.app/'>stylla-fashion.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf3.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf4.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf5.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./sf6.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              This is Stylla Fashion's official website designed with a tone of blue and other contrasts and with beautiful responsive effect.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    <div onClick={openModal9} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./cr3.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Cartix</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          A master layout used over here that ensures consistent design and structure across multiple pages.
          </p>
        </div>
      </div>

      {isModalOpen9 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal9}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal9}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Cartix</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>React Js and Tailwind</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[21px]'> <Link target='blank' to='https://cartix-beta.vercel.app/'>cartix-beta.vercel.app</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr2.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr3.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr4.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-2 mb-2">
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr5.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] rounded" src="./cr6.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
              In Cartix, the master layout has been used. When you click on the about page, 
              it navigates you to a new structured page and a new menubar is seen with pages related 
              to about, which ensures consistency.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
    </div>


    <div className="flex lg:flex-row flex-col justify-center items-center gap-5 mt-6">
      
    <div onClick={openModal} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./pro1.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Multiplier Game</div>
          <p className="text-gray-700 text-center text-[16px] font-medium font-montserrat">
          A simple and interactive multiplication game built with HTML, CSS, and JavaScript. Enter a number to get its times table up to 10.
          </p>
        </div>
      </div>

      {isModalOpen && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] md:h-[590px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Multiplier Game</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>HTML, CSS and JavaScript</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[15px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/Multiplier/'>sahid-al-masud-aayan.github.io/Multiplier</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[230px]   rounded" src="./pro2.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[230px]   rounded" src="./pro3.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[17px]text-gray-700">
                Welcome to Multiplier game! In this web application, put your desired number in the input and the hit on multiply button. Then in the orange box, you will get the times-table upto 10 of the number that you entered. To enter a new number, first reload the page and then enter your number again.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}
          <div onClick={openModal2} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./pro13.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Number Guessing Game</div>
          <p className=" text-gray-700 text-center text-[16px] font-medium font-montserrat">
         A fun number guessing game where 1st player enters a random number and the second player guesses it with 5 chances.
          </p>
        </div>
      </div>

      {isModalOpen2 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal2}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] md:h-[700px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal2}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Number Guessing Game</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>HTML, CSS and JavaScript</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[15px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/Dark-themed-Number-Guessing-game/'>sahid-al-masud-aayan.github.io/Dark-themed-Number-Guessing-game</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mb-4">
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./pro11.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./pro12.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./pro13.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./pro15.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[15px] text-gray-700">

                Welcome to Number Guessing Game! In this two-player game, Player 1 begins by entering their name, followed by Player 2. Player 1 then selects a number between 1 and 10, which Player 2 must guess. Player 2 has five attempts to match the number chosen by Player 1. If Player 2 guesses correctly within five tries, they win; otherwise, Player 1 is declared the winner.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}


          <div onClick={openModal3} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem]   transform transition-transform duration-500 group-hover:scale-110" src="./todo2.png" alt="Project Image" />
    </div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-3 text-center font-latoNav">Todo List</div>
          <p className=" text-gray-700 text-center text-[16px] font-medium font-montserrat">
          A simple and intuitive Todo List application built with HTML, CSS, and JavaScript. This application allows users to add, remove, and mark tasks as complete.
          </p>
        </div>
      </div>

      {isModalOpen3 && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed md:mt-0 md:mb-0 mt-[60px] mb-[60px] inset-0 bg-black opacity-50 rounded-[85px]" onClick={closeModal3}></div>
          <div data-aos="fade-up" data-aos-duration="900">
            <div className="">
          <div className=" bg-white rounded-xl shadow-lg md:w-[800px] md:h-[700px] mx-4 p-6 z-10">
              <div className="flex justify-end items-center">
              <button className=" text-gray-900 text-3xl hover:text-red-700 duration-100" onClick={closeModal3}>
              <IoCloseCircle/>
              </button>
              </div>
          <div className="font-bold text-4xl mb-6 text-center font-latoNav">Todo List</div>
          <div className="flex flex-col justify-center items-start">
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] mb-1'><DiCodeBadge className='text-3xl'/> Language: <span className=' tracking-wide font-bold'>HTML, CSS and JavaScript</span></h2>
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[18px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/To-do-task/'>sahid-al-masud-aayan.github.io/To-do-task</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mb-4">
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./todo1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./todo2.png" alt="Project Details Image" />
              </div>
              <div className="flex justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px]   rounded" src="./todo3.png" alt="Project Details Image" />
              </div>
              <p className="font-subHed mt-6 text-[15px] text-gray-700">
              This is a Todo List application built with HTML, CSS, and JavaScript. This application empowers users to efficiently manage their tasks by allowing them to add new items, remove unwanted ones, and mark tasks as complete with a single click. It's an easy-to-use tool designed to enhance productivity and keep track of daily to-dos.
              </p>
            </div>
          </div>
            </div>

          </div>
        </div>
        
      )}

    </div>



  </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Projects