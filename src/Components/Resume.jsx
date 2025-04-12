import React from 'react'
import Education from './MicroComponents/Education'
import Work from './MicroComponents/Work'
import Skills from './MicroComponents/Skills'
import Tools from './MicroComponents/Tools'
import HeadButton from './MicroComponents/HeadButton'
import Certifications from './MicroComponents/Certifications'
import { TextAnimate } from './magicui/text-animate'
import { TypingAnimation } from './magicui/typing-animation'

const Resume = () => {
  return (
    <>

     <section id='resume' className='min-h-screen w-screen lg:pl-121 md:pl-100 lg:pt-50 md:pt-40 pt-20 pl-10 pb-20 pr-10 md:pb-30 bg-(--lightbg1) dark:bg-(--bgcolor1) '>
        <HeadButton name={"Resume"}/>
        {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700] '>Education and practical experience</h1> */}
        <TextAnimate className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont1) bg-clip-text lg:pr-19 md:pr-13  lg:text-[65px] md:text-[38px] text-[31px] leading-tight font-[700] ' animation="blurInUp" by="character" duration={2} once >Education and practical experience</TextAnimate>
        {/* <p className='dark:text-(--light) text-(--dark) pt-5 pr-15 text-2xl'> Knowledge is the foundation of growth, and my educational journey has shaped my expertise in technology and innovation. Here’s a glimpse of my academic background that fuels my passion for development and problem-solving. </p> */}
        <TextAnimate className='dark:text-(--light) text-(--dark) pt-5 pr-15 md:text-base lg:text-2xl' animation="blurInUp" by="word" duration={2} delay={2} once >Knowledge is the foundation of growth, and my educational journey has shaped my expertise in technology and innovation. Here’s a glimpse of my academic background that fuels my passion for development and problem-solving. </TextAnimate>

        
        <Education />
        <Work />
        <Skills />
        <Tools />
        <Certifications/>
        
    </section>
    
    </>
   
  )
}

export default Resume
