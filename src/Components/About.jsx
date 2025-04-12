import React from 'react'
import Tech from './MicroComponents/Tech'
import HeadButton from './MicroComponents/HeadButton'
import { NumberTicker } from './magicui/number-ticker'
import { TextAnimate } from './magicui/text-animate'
import { TypingAnimation } from './magicui/typing-animation'

const About = () => {


  var contact=[
    {
      key:"Name",
      value:"StephenJoseph M"
    },
    {
      key:"Phone",
      value:"+91 9087608722"
    },
    {
      key:"Email",
      value:"sj9824384@gmail.com"
    },
    {
      key:"Location",
      value:"Coimbatore,TamilNadu,India"
    }
  ]

  var achievements=[
    {
      count:40,
      des:"Students Trained"
    },
    {
      count:6,
      des:"Months of experience"
    },
    {
      count:10,
      des:"Projects done"
    }
  ]


  return (
    <>
    <section id='about' className='min-h-screen w-screen lg:pl-121 md:pl-100 lg:pt-50 md:pt-40  pt-20 pl-10 pb-20 pr-10 md:pb-30 bg-(--lightbg1) dark:bg-(--bgcolor1) '>
    <HeadButton name={"About Me"}/>
    {/* <div className=' w-40 p-2 mb-5 text-center text-base border-1 rounded-3xl dark:text-(--light) text-(--dark) dark:border-(--bordercolor) border-(--lightborder) font-bold  hover:shadow-[0px_0px_10px_rgba(255,255,255,0.1)] transition-all duration-500 '> <i className='mr-1'>&#10023;</i> About Me</div> */}
    {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700] '>Turning Ideas into Code, Code into Solutions.</h1> */}
    <TextAnimate className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont1) bg-clip-text lg:pr-19 md:pr-12  lg:text-[65px] md:text-[40px] text-[30px]  leading-tight font-[700] ' animation="blurInUp" by="character" duration={2} once >Turning Ideas into Code, Code into Solutions.</TextAnimate>
    
    {/* Achievements part */}
    <div className='flex pr-15 pt-10 flex-col md:flex-row md:justify-between gap-5'>
      {
        achievements.map((achi,i)=>(
        <div key={i} className=' flex flex-col justify-center items-center  p-3 text-wrap lg:h-45 lg:w-60 md:h-40 md:w-40 border dark:border-(--bordercolor) border-(--lightborder) gap-2 rounded-4xl'>
          {/* <h1 className='font-[720] text-center  text-6xl bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) bg-clip-text text-transparent  '>{achi.count}+</h1> */}
          <h1 className='lg:text-6xl md:text-5xl text-3xl bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) bg-clip-text text-transparent'><NumberTicker  className='font-[720] text-center   bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) bg-clip-text text-transparent  '  value={achi.count} />+</h1>
          <p className='dark:text-(--light) text-(--dark) text-sm md:text-base lg:text-xl font-bold text-center'>{achi.des}</p>
        </div>
        ))
      }
    </div>

    {/* About paragraph */}
      <div className='flex lg:flex-row flex-col pt-10 lg:pr-15 '>
        <div className='lg:min-w-2/3 lg:max-w-2/3 lg:pr-4 md:pr-10 md:text-justify'>
        <TypingAnimation duration={10} className='mb-6 md:text-xl text-base dark:text-(--light) text-(--dark)  font-[450]'>Experienced Java Full-Stack Developer with expertise in designing, developing, and deploying scalable web applications. Skilled in both frontend and backend development, utilizing modern frameworks and technologies to create seamless user experiences. Currently expanding knowledge in AWS to enhance cloud-based application development.</TypingAnimation>
          {/* <p className='mb-6 text-xl dark:text-(--light) text-(--dark)  font-[450]'>Experienced Java Full-Stack Developer with expertise in designing, developing, and deploying scalable web applications. Skilled in both frontend and backend development, utilizing modern frameworks and technologies to create seamless user experiences. Currently expanding knowledge in AWS to enhance cloud-based application development.</p> */}
        <TypingAnimation duration={4} delay={4530} className='mb-6 md:text-xl text-base dark:text-(--light) text-(--dark)  font-[450]' >Dedicated Software Trainer with a passion for teaching and mentoring aspiring developers. Proven ability to simplify complex concepts into easy-to-understand explanations, earning valuable feedback from students. Focused on delivering hands-on learning experiences to help individuals strengthen their technical skills and succeed in the industry.</TypingAnimation>
          {/* <p className='mb-6 text-xl dark:text-(--light) text-(--dark)  font-[450]' >Dedicated Software Trainer with a passion for teaching and mentoring aspiring developers. Proven ability to simplify complex concepts into easy-to-understand explanations, earning valuable feedback from students. Focused on delivering hands-on learning experiences to help individuals strengthen their technical skills and succeed in the industry.</p> */}
        </div>
        <div className=' lg:flex md:grid  flex-col md:pr-15 lg:pr-0 gap-5 lg:pl-5'>
          {
            contact.map((con,i)=>(
               <div key={i}>
                 <p className='dark:text-(--light) text-(--dark)  text-sm '>{con.key}</p>
                 {/* <h2 className='inline-block dark:text-(--light) text-(--dark)  text-xl font-[550] cursor-pointer w-0 border-b-2 dark:border-b-(--font-1)  border-b-(--lightfont1) hover:w-full  text-nowrap transition-all duration-500'></h2> */}
                  <TypingAnimation duration={100} className='inline-block dark:text-(--light) text-(--dark) text-base md:text-xl font-[550] cursor-pointer w-0 border-b-2 dark:border-b-(--font-1)  border-b-(--lightfont1) hover:w-full  text-nowrap transition-all duration-500'>{con.value}</TypingAnimation> 
               </div>
            ))
          }
        </div>
      </div>
      <a href='/Stephenjoseph_Resume.pdf' download={true} className='block text-center dark:text-(--dark) text-(--light)  bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) border dark:border-(--bordercolor)  border-(--lightborder) mt-2 md:mt-3 md:w-9/10  p-3 pl-4 pr-4 text-base font-bold rounded-3xl opacity-100 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-500'>Download CV  <i class="fa-solid fa-download pl-1"></i></a>

      <Tech />
    </section>
    
    </>
  )
}

export default About
