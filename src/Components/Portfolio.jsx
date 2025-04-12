import React from 'react'
import { useNavigate } from "react-router-dom";
import bus from '../assets/projects/bus.jpg'
import book from '../assets/projects/books.jpg'
import password from '../assets/projects/password.jpg'
import portfolio from '../assets/projects/portfolio.jpg'
import students from '../assets/projects/students.jpg'
import weather from '../assets/projects/weather.jpg'
import HeadButton from './MicroComponents/HeadButton'

import { TextAnimate } from './magicui/text-animate';


const Portfolio = () => {
  const navigate = useNavigate();

  const details = (id) => {
    navigate(`/details/${id}`); 
  };
  var projects=[
    {
      id:1,
      name:"Students Management System",
      img:students,
      level:"Advanced",
      git:"#"
    },
    {
      id:2,
      name:"Online Bus Booking",
      img:bus,
      level:"Advanced",
      git:"#"
    },
    {
      id:3,
      name:"Book shop Management",
      img:book,
      level:"Intermediate",
      git:"#"
    },
    {
      id:4,
      name:"Professional Portfolio",
      img:portfolio,
      level:"Intermediate",
      git:"#"
    },
    {
      id:5,
      name:"Weather App",
      img:weather,
      level:"Beginner",
      git:"#"
    },
    {
      id:6,
      name:"Password Generator",
      img:password,
      level:"Beginner",
      git:"#"
    },
  ]



  return (
  <>

  <section id='portfolio' className='min-h-screen w-screen lg:pl-121 md:pl-100 lg:pt-50 md:pt-40 pt-20 pl-10 pb-20 md:pb-30 bg-(--lightbg1) dark:bg-(--bgcolor1)  '>
  <HeadButton name={"Portfolio"}/>
  {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700] '>Check out my featured projects</h1> */}
  <TextAnimate className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont1) bg-clip-text md:pr-13 lg:pr-20   lg:text-[65px] md:text-[40px] text-[20px] leading-tight font-[700] ' animation="blurInUp" by="character" duration={2} once >Check out my featured  projects </TextAnimate>
  
  <div className=' flex lg:pr-15 md:pr-10 md:flex-row lg:flex-row md:items-center lg:items-start pt-10 flex-wrap lg:justify-between  md:justify-center md:gap-3 gap-4   lg:gap-5'>
      
      {
        projects.map((project,i)=>(

          
          <div key={i} onClick={()=>details(project.id)} className=' relative bg-amber-50 md:h-90 md:w-65 h-80 w-50 lg:h-120 lg:w-110 overflow-hidden rounded-3xl hover:scale-102 transition-all'>
         
          <img src={project.img} alt="" className='h-full w-full  object-cover hover:scale-110 transition-all duration-400'/>
          <h3 className={`absolute top-4 right-5 text-xs md:text-sm  lg:text-base text-(--light) font-bold ${
            project.level=='Advanced'?" bg-red-400 hover:bg-red-500":project.level=='Intermediate'?" bg-yellow-400 hover:bg-yellow-500":" bg-green-400 hover:bg-green-500"
          } transition-all duration-200 cursor-pointer p-1 pl-3 pr-3   rounded-xl backdrop-blur-[10px]`}>{project.level}</h3>
  
          <div className='absolute flex bottom-7 lg:left-5 md:left-2 md:gap-3 gap-1 pr-0 flex-col md:flex-row  '>
            <h3 className=' dark:text-(--light) dark:bg-(--bgcolor1) text-(--dark) bg-(--lightbg1) text-xs  md:text-xs lg:text-base cursor-pointer pt-2 pb-2 pr-3 pl-3 font-medium rounded-2xl'>{project.name}</h3>
            <a href={project.git} className=' lg:h-10 md:h-6 lg:w-10 md:w-6 h-6 w-6 flex justify-center items-center lg:text-2xl md:text-xl hover:text-2xl hover:text-(--light) hover:bg-(--bgcolor1) transition-all bg-(--light) text-(--dark) rounded-full '><i class="fab fa-github  "></i></a>
          </div>

          
          </div>

        ))
      }

  
  
      
      
      
  </div>
    

  </section>
  
  </>
  )
}

export default Portfolio
