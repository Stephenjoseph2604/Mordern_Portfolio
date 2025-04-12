import React from 'react'
import HeadButton from './MicroComponents/HeadButton'
import { useNavigate } from 'react-router-dom'
import sjlogo from '../assets/sjlogo2.png'
import { TextAnimate } from './magicui/text-animate';
import { SpinningText } from './magicui/spinning-text';
import { ShimmerButton } from './magicui/shimmer-button';




const Home = () => {
  const navigate=useNavigate();
 
  const go=()=>{
    window.open("/#portfolio")
  }

  return (
    <>
    <section id='home' className='  lg:pl-121 md:pl-100 lg:pt-50 md:pt-40 pt-20 pl-10   min-h-screen w-screen bg-(--lightbg1) dark:bg-(--bgcolor1) '>

    <HeadButton name={"Let's meet!"} />
    
    {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700]  '> I'm StephenJoseph</h1> */}
    <TextAnimate className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont2) bg-clip-text   lg:text-[65px] md:text-[40px] text-[30px]  leading-tight font-[700] pl-0 ' animation="blurInUp" by="character" duration={2} once>I'm StephenJoseph</TextAnimate>
    {/* <h1 className='relative  text-start pl-0 ml-0' ><FlipText className='bg-gradient-to-r dark:from-(--font-1)  dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700]  '>I'm StephenJoseph</FlipText></h1> */}
    {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700] '>FullStack Web Developer and Software Trainer.</h1> */}
    <TextAnimate className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont2) bg-clip-text   lg:text-[65px] md:text-[37px] text-[30px] leading-tight font-[700] pl-0 pr-12'  animation="blurInUp" by="character" delay={2}  duration={3} once>FullStack Web Developer and Software Trainer. </TextAnimate>
    
    <div className='flex md:gap-3 lg:gap-5 pl-2 md:mt-10 mt-5 gap-3'>
        <a href="/#portfolio" className=' dark:text-(--light) text-(--dark) border dark:border-(--bordercolor) border-(--lightborder) p-3 md:pl-4 md:pr-4 text-xs md:text-sm lg:text-base font-bold rounded-3xl opacity-100 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-500'>My Works <i class="fa-solid fa-briefcase pl-1"></i></a>
        <a href='/Stephenjoseph_Resume.pdf' download={true} className='dark:text-(--light) text-(--dark) border dark:border-(--bordercolor) border-(--lightborder) p-3 md:pl-4 md:pr-4 md:text-sm lg:text-base text-xs font-bold rounded-3xl opacity-100 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-500'>Download CV  <i class="fa-solid fa-download pl-1"></i></a>
    </div>


    <div className=' md:h-40 md:w-40  md:absolute  lg:right-40 md:right-11 md:top-150 top-55 right-15  '>
    <SpinningText   className=" md:text-base lg:text-xl text-4xl  md:font-semibold font-bold relative md:top-0 top-28 ">learn more • earn more • grow more •</SpinningText>
    <img src={sjlogo} alt="" className='lg:h-25 md:h-20 h-60 mx-auto saturate-0 dark:brightness-120 brightness-20 md:mt-[-40px] lg:mt-[-50px] mt-25'  />
    </div>

    </section>
   
    
    </>
  )
}

export default Home
