import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  
  return (
    <footer className='bg-slate-700 shadow-md  bottom-0 w-full'>
        <div className="flex gap-2">
       
        <div className='flex flex-col items-start justify-around w-1/2 sm:max-w-6xl sm:mx-auto mx-3  p-3'>
          <h1 className='font-bold text-lg  sm:text-3xl flex flex-wrap pb-3'>
            <span className='text-sky-500'>Livie</span>
            <span className='text-sky-600'>Estate</span>
          </h1>
  
          <h2 className='text-white max-w-md sm:text-base text-xs '>Leading real estate agency dedicated to making the
           buying and selling process smooth for clients in desirable neighborhoods.</h2>

        </div>
        
   {/* ty */}
        <div className='flex flex-col flex-wrap items-center max-w-6xl sm:mx-auto mx-3 gap-3 py-3 sm:text-2xl text-white '>Connect with us!

           <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-7 sm:p-5 p-3 rounded-lg text-sky-900">

          <a href="https://www.linkedin.com/in/pranjal-kumar-singh-92aa131bb/" 
          target="_blank" rel="noopener noreferrer">
          <TiSocialLinkedin className='bg-slate-100  w-6 h-6 sm:w-10 sm:h-10 rounded-lg  ' />
          </a>

          <a href="https://www.facebook.com/pranjal.kumarsingh.1/" 
          target="_blank" rel="noopener noreferrer">
          <FaFacebook className='bg-slate-100 w-6 h-6 sm:w-10 sm:h-10 p-1 rounded-lg ' />
          </a>

          <a href="https://twitter.com/PranjalKatharia/" 
          target="_blank" rel="noopener noreferrer">
          <RiTwitterXFill className='bg-slate-100 w-6 h-6 sm:w-10 sm:h-10 p-1 rounded-lg' />
          </a>

          <a href="https://www.instagram.com/thakur_pranjal_katharia/" 
          target="_blank" rel="noopener noreferrer">
          <FaInstagram className='bg-slate-100 w-6 h-6 sm:w-10 sm:h-10 p-1 rounded-lg' />
          </a>

          <a href="mailto:pranjalkumarsingh4@gmail.com" 
          target="_blank" rel="noopener noreferrer">
          <FiMail className='bg-slate-100  w-6 h-6 sm:w-10 sm:h-10 p-1 rounded-lg' />
          </a>  

           </div>

        </div>

       </div>
    

    
    <hr className='flex-grow border-t border-slate-600'/> 
    
    <div className='bg-slate-700 text-center p-3 sm:pb-4 sm:text-xl border-slate-900'>
             Copyright &#169; 2024 by Pranjal Kumar Singh. All Rights Reserved.
            </div>
  </footer>
  
  )
}
