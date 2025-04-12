import React from 'react'
import ats from '../../assets/Certificates/ats.jpg'
import onedata from '../../assets/Certificates/onedata.jpg'
import bl from '../../assets/Certificates/bl.jpg'
import gd from '../../assets/Certificates/gd.jpg'
import ps from '../../assets/Certificates/ps.jpg'
import java from '../../assets/Certificates/java.jpg'
import css from '../../assets/Certificates/css.jpg'

import './Certificate.css'
import { useState,useEffect ,useRef} from 'react'
import { TextAnimate } from '../magicui/text-animate'



const Certifications = () => {
  const certificates = [
    ats,
    bl,
    gd,
    onedata,
    java,
    ps,
    css,
  ];

  var time=18;
  
  return (
    <>
    {/* <h1 className='text-4xl font-bold pb-7 mt-15 mr-15 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)'>Certifications</h1> */}
    <TextAnimate animation="blurInUp" by="character" duration={2} once className='lg:text-4xl md:text-4xl text-2xl font-bold pb-7 mt-15 mr-15 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)'>Certifications</TextAnimate>
  
    <div className=" marquee-container relative mt-10  h-70 md:mr-15    overflow-hidden   rounded-lg ">
     
      <div className=" absolute marquee-content h-full w-full ">
        { certificates.map((cert, index) => (
         <Card index={index} key={index} cert={cert}/>
        ))}
      </div>
    </div>
    </>
  );
};


export default Certifications

const Card=({index,cert})=>{
 

  return (
    <img
    key={index}
      src={cert}
      alt=""
      style={{animationDelay:`${index*3.6}s`}}
      className={` absolute right-[-350px] lg:w-80 h-full md:w-50 w-45 object-contain mx-4 animate-[wiggle_25s_linear_infinite]  `}
    />
  );
}










// const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % certificates.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) =>
//       prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
//     );
//   };

//   return (<>
  
//   <h1 className='text-4xl mt-13 font-bold pb-7  text-(--dark) dark:text-(--light) '>My favourite tools</h1>

//     <div className="relative  mr-20 mx-auto overflow-hidden border rounded-lg shadow-lg">
//       <div className="flex items-center justify-center">
//         <img
//           src={certificates[index]}
//           alt={`Certificate ${index + 1}`}
//           className="w-full h-64 object-contain"
//         />
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//       >
//         <i className="fas fa-arrow-left"></i>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//       >
//         <i className="fas fa-arrow-right"></i>
//       </button>
//     </div>
      
//   </>
//   );