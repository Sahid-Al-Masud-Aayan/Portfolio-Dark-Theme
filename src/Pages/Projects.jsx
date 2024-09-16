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
    <div className="w-[400px] md:h-[650px] md:w-[1200px] bg-gradient-to-r from-[#1f1f1f] to-[#454545] rounded-[85px] gap-2 p-8 md:mt-0 md:mb-0 mt-[60px] mb-[60px]">
    <div data-aos="fade-up"><h1 className='text-[48px] md:text-[60px] text-center mt-2 font-headFont font-semibold bg-gradient-to-r to-sky-300 from-teal-800 bg-clip-text text-transparent'>My Projects</h1></div>
    <div className="flex md:flex-row flex-col justify-center items-center gap-5 mt-6">
      
    <div onClick={openModal} className="w-[320px] h-[410px] rounded-xl overflow-hidden shadow-lg p-3 bg-white transform group transition-transform duration-300 cursor-pointer">
    <div class="relative overflow-hidden w-full h-[11rem] rounded-lg">
        <img className="w-full h-[11rem] object-cover transform transition-transform duration-500 group-hover:scale-110" src="./pro1.png" alt="Project Image" />
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
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[15px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/Multiplier/'>https://sahid-al-masud-aayan.github.io/Multiplier/</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[230px] object-cover rounded" src="./pro2.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[230px] object-cover rounded" src="./pro3.png" alt="Project Details Image" />
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
        <img className="w-full h-[11rem] object-cover transform transition-transform duration-500 group-hover:scale-110" src="./pro13.png" alt="Project Image" />
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
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[15px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/Dark-themed-Number-Guessing-game/'>https://sahid-al-masud-aayan.github.io/Dark-themed-Number-Guessing-game/</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mb-4">
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./pro11.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./pro12.png" alt="Project Details Image" />
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./pro13.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./pro15.png" alt="Project Details Image" />
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
        <img className="w-full h-[11rem] object-cover transform transition-transform duration-500 group-hover:scale-110" src="./todo2.png" alt="Project Image" />
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
          <h2 className='flex justify-start items-center gap-2 font-slab tracking-widest text-[21px] ml-1'><FaExternalLinkAlt className='text-2xl'/> Preview: <span className=' tracking-wide font-bold hover:underline text-[18px]'> <Link target='blank' to='https://sahid-al-masud-aayan.github.io/To-do-task/'>https://sahid-al-masud-aayan.github.io/To-do-task/</Link></span></h2>
          </div>
            <div className="mt-6">
              <div className="flex md:flex-row flex-col justify-center gap-4 items-center mb-4">
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./todo1.png" alt="Project Details Image" />
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./todo2.png" alt="Project Details Image" />
              </div>
              <div className="flex justify-center gap-4 items-center">
              <img className="md:w-[370px] md:h-[180px] object-cover rounded" src="./todo3.png" alt="Project Details Image" />
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



    <div className="flex justify-center items-center gap-5 mt-8">




    </div>
  </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Projects