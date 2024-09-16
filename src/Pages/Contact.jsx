import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdMail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [name, SetName]= useState('')
  const [nameError, SetNameError]= useState('')
  const [Subject, SetSubject]= useState('')
  const [SubjectError, SetSubjectError]= useState('')
  const [email, Setemail]= useState('')
  const [emailError, SetemailError]= useState('')
  const [Message, SetMessage]= useState('')
  const [MessageError, SetMessageError]= useState('')

  const NameHandler = (e)=>{
    SetName(e.target.value)
    SetNameError('')
  }
  const SubjectHandler = (e)=>{
    SetSubject(e.target.value)
    SetSubjectError('')
  }
  const EmailHandler = (e)=>{
    Setemail(e.target.value)
    SetemailError('')
  }
  const MessageHandler = (e)=>{
    SetMessage(e.target.value)
    SetMessageError('')
  }

  const finalSubmit = (e)=>{
    e.preventDefault()
    if(!name){
      SetNameError('Please enter your name.')
    }if(!Subject){
    SetSubjectError('Please enter your topic.')
    }if(!email){
      SetemailError('Please enter your email.')
    }if(!Message){
      SetMessageError('Please enter your description.')
    }else{
      toast.success ('Message sent.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        });
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <ToastContainer/>
    <div className="container">
    <div className="flex justify-center items-center min-h-screen ">
    <div data-aos="flip-left">
    <div className="w-[400px] h-auto md:w-[1000px] bg-gradient-to-r from-[#202020] to-[#393939] rounded-3xl gap-2 p-5 mt-[60px] mb-[60px]">
    <div data-aos="fade-left"><h1 className='text-[48px] md:text-[60px] mt-2 font-headFont font-semibold text-center bg-gradient-to-r to-sky-300 from-teal-800 bg-clip-text text-transparent'>Contact Me</h1></div>
<div data-aos="zoom-in-up">
      <div className="flex justify-around md:gap-0 gap-5 items-center md:scale-100 scale-90 mt-5">

      <div class=" hover:scale-95 duration-300 relative group text-sky-100  overflow-hidden w-96 h-44 rounded-md bg-sky-600 p-2 flex justify-center items-center font-extrabold shadow-xl">

     <div class="absolute right-20 -top-4  group-hover:top-[10px] group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-950"></div>
     <div class="absolute -right-5 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-teal-800"></div>
     <div class="absolute right-[20rem] top-[8rem] group-hover:top-1 group-hover:right-2 z-10 w-20 h-20 rounded-full group-hover:scale-150  duration-500 bg-blue-700"></div>
     <div class="absolute right-[5em] -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
     <div className="flex flex-col justify-center items-center z-10">
     <MdMail className='text-5xl text-[#ffce3b]'/>
     <p className='text-2xl font-semibold font-slab mb-2 text-ellipsis'>Email</p>
     <a className='group-hover:underline font-merri text-[10px] md:text-[16px]' href="mailto:aayan.webdeveloper@gmail.com">aayan.webdeveloper@gmail.com</a>
     </div>
       </div>

      <div class=" hover:scale-95 duration-300 relative group text-sky-100  overflow-hidden w-96 h-44 rounded-md bg-orange-600 p-2 flex justify-center items-center font-extrabold shadow-xl">

     <div class="absolute right-20 -top-4  group-hover:top-[10px] group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-[#c5850e]"></div>
     <div class="absolute -right-5 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-[#820c47]"></div>
     <div class="absolute right-[20rem] top-[8rem] group-hover:top-1 group-hover:right-2 z-10 w-20 h-20 rounded-full group-hover:scale-150  duration-500 bg-[#928f04]"></div>
     <div class="absolute right-[5em] -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-[#7a0f0f]"></div>
     <div className="flex flex-col justify-center items-center z-10">
         <FaPhone className='text-5xl text-[#3b86ff]'/>
         <p className='text-2xl font-semibold font-slab mb-2 text-ellipsis'>Phone</p>
         <p className='group-hover:font-extrabold font-narrow text-xl tracking-[2px]'>+8801888135477</p>
     </div>
       </div>
      </div>
</div>
<div data-aos="fade-left">
<div className='mt-20 rounded-xl flex justify-center items-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.9425116365164!2d90.39191567511918!3d23.87310497858688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43d9c3f1fa5%3A0x80006e825689f7fb!2s48%20Road-18%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1725020132824!5m2!1sen!2sbd"
        width="850px"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
</div>
<div className="">
  

<div data-aos="fade-right"><h3 className='text-center mb-10 mt-20 text-[32px] md:text-[38px] font-subHed font-semibold text-[#00f7ff]'>Socials</h3></div>
  
      <div data-aos="flip-up">
         <div className="flex md:justify-around justify-center items-center gap-8 md:gap-4">
         <Link target='blank' to='https://www.facebook.com/' class="w-[120px] h-[120px] md:h-[140px] md:w-[140px] bg-[#0866FF] rounded-lg overflow-hidden relative group z-0 flex justify-center items-center gap-2 flex-col">
        <div class="circle absolute h-[5em] w-[5em] -top-[30%] -right-[6.5em] rounded-full bg-[#fff] group-hover:scale-[800%] duration-500 z-[-1] op"></div>
        <FaFacebook className='group-hover:text-[#0A66C2] text-6xl text-[#fff]'/>
        <h1 class="z-20 font-medium text-center text-white group-hover:text-[#0866FF] duration-500 text-[15px] md:text-[1.4em]">Facebook</h1>
         </Link>
         
         
         <Link target='blank' to='https://www.linkedin.com/in/sahid-al-masud-aayan-348653301/' class="w-[120px] h-[120px] md:h-[140px] md:w-[140px] bg-[#0A66C2] rounded-lg overflow-hidden relative group z-0 flex justify-center items-center gap-2 flex-col">
        <div class="circle absolute h-[5em] w-[5em] top-[100%] -right-[2.5em] rounded-full bg-[#fff] group-hover:scale-[800%] duration-500 z-[-1] op"></div>
        <FaLinkedin className='group-hover:text-[#0A66C2] text-6xl text-[#fff]'/>
        <h1 class="z-20 font-medium text-center text-white group-hover:text-[#0A66C2] duration-500 text-[15px] md:text-[1.4em]">LinkedIn</h1>
         </Link>

         <Link target='blank' to='https://github.com/Sahid-Al-Masud-Aayan' class="w-[120px] h-[120px] md:h-[140px] md:w-[140px] bg-[#1F2328] rounded-lg overflow-hidden relative group z-0 flex justify-center items-center gap-2 flex-col">
         <div class="circle absolute h-[5em] w-[5em] -top-[30%] -right-[6.5em] rounded-full bg-[#fff] group-hover:scale-[800%] duration-500 z-[-1] op"></div>
        <FaGithub className='  group-hover:text-[#1F2328] text-6xl text-[#fff]'/>
        <h1 class="z-20 font-medium text-center text-white group-hover:text-[#1F2328] duration-500 text-[15px] md:text-[1.4em]">GitHub</h1>
         </Link>
         </div>
      </div>
</div>

<div data-aos="fade-left"><h2 className="mt-16 text-[32px] md:text-[38px] font-subHed text-center font-semibold text-[#ffffff]">Get in touch</h2></div>
<div data-aos="zoom-in-down">
  <form className='' onSubmit={finalSubmit}>
    <div className="px-12 mt-10 flex md:flex-row flex-col justify-between items-center">
    <div className="flex flex-col justify-center items-start">
    <p className='text-2xl text-gray-300 font-nav tracking-wide'>NAME</p>
    <input onChange={NameHandler} className='w-[350px] md:w-[400px] h-[35px] text-white outline-none bg-transparent border-b-[3px] border-white placeholder:text-gray-300 placeholder:text-2xl' type="text" />
    <p className='text-[14px] text-red-600 font-subHed font-bold m-0 p-0'>{nameError}</p>
    <p className='text-2xl text-gray-300 font-nav tracking-wide mt-6'>SUBJECT</p>
    <input onChange={SubjectHandler} className='w-[350px] md:w-[400px] h-[35px] text-white outline-none bg-transparent border-b-[3px] border-white placeholder:text-gray-300 placeholder:text-2xl' type="text" />
    <p className='text-[14px] text-red-600 font-subHed font-bold m-0 p-0'>{SubjectError}</p>
    <p className='text-2xl text-gray-300 font-nav tracking-wide mt-6'>EMAIL</p>
    <input onChange={EmailHandler} className='w-[350px] md:w-[400px] h-[35px] text-white outline-none bg-transparent border-b-[3px] border-white placeholder:text-gray-300 placeholder:text-2xl' type="email" />
    <p className='text-[14px] text-red-600 font-subHed font-bold m-0 p-0'>{emailError}</p>
    </div>
    <div className="">
    <p className='text-2xl text-gray-300 font-nav mb-3 tracking-wide mt-8 md:mt-0'>MESSAGE</p>
    <textarea onChange={MessageHandler} className='w-[350px] md:w-[400px] h-[205px] text-white outline-none rounded-lg bg-transparent border-[2px] border-white placeholder:text-gray-300 p-2 placeholder:text-2xl' type="text" />
    <p className='text-[14px] text-red-600 font-subHed font-bold m-0 p-0'>{MessageError}</p>
     </div>
    </div>
    <div className="flex justify-center items-center mt-7">
    <button type='submit'
  class="invert font-montserrat hover:rotate-[-10deg] brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 active:scale-90 active:rotate-0"
>
  <div
    class="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full"
  >
    <div
      class="group-hover:scale-100  group-hover:text-yellow-500 text-yellow-600 gap-1 inline"
    >
      Send Message
    </div>
  </div>
</button>
    </div>
  </form>
</div>

  </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Contact