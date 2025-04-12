import React from 'react'
import SocialMedia from './MicroComponents/SocialMedia'
import HeadButton from './MicroComponents/HeadButton'
import { TextAnimate } from './magicui/text-animate'
import { TypingAnimation } from './magicui/typing-animation'

const Contact = () => {
  return (
    <>
    <section id='contact' className='min-h-screen  w-screen lg:pl-121 md:pl-100 lg:pt-50 md:pt-40 pt-20 pl-10 pb-20 pr-5 md:pb-30 dark:bg-(--bgcolor1) bg-(--lightbg) '>
    <HeadButton name={"Contact"} />
    {/* <h1 className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) text-transparent bg-clip-text  text-[65px] leading-tight font-[700] '>Let's make something awesome together!</h1> */}
    <TextAnimate animation="blurInUp" by="character" duration={2} once className='bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont1) bg-clip-text lg:pr-21 md:pr-15  lg:text-[65px] md:text-[40px] text-[34px] leading-tight font-[700] '>Let's make something    awesome together!</TextAnimate>

    <div className=' grid grid-cols-2 mt-10 mr-15 gap-5  grid-rows-[70px_70px_200px]'>
        <input type="text" placeholder='Your Name*' className='pl-2 text-xl outline-none border-b border-b-(--lightborder) dark:border-b-(--bordercolor) text-(--dark) dark:text-(--light)  placeholder:text-(--lightborder) dark:placeholder:text-(--bordercolor) font-bold focus:border-b-2 focus:border-b-(--lightfont2) dark:focus:border-b-(--font-1)'  />
        <input type="text" placeholder='Company Name*' className='pl-2 text-xl outline-none border-b border-b-(--lightborder) dark:border-b-(--bordercolor) text-(--dark) dark:text-(--light) placeholder:text-(--lightborder) dark:placeholder:text-(--bordercolor) font-bold focus:border-b-2 focus:border-b-(--lightfont2) dark:focus:border-b-(--font-1)' />
        <input type="text" placeholder='Email Address*' className='pl-2 text-xl outline-none border-b border-b-(--lightborder) dark:border-b-(--bordercolor) text-(--dark) dark:text-(--light) placeholder:text-(--lightborder) dark:placeholder:text-(--bordercolor) font-bold focus:border-b-2 focus:border-b-(--lightfont2) dark:focus:border-b-(--font-1)' />
        <input type="text" placeholder='Phone Number*' className='pl-2 text-xl outline-none border-b border-b-(--lightborder) dark:border-b-(--bordercolor) text-(--dark) dark:text-(--light) placeholder:text-(--lightborder) dark:placeholder:text-(--bordercolor) font-bold focus:border-b-2 focus:border-b-(--lightfont2) dark:focus:border-b-(--font-1)' />
        <textarea name="" id="" placeholder='A Few Words*' className='col-span-2 pl-2 text-xl outline-none border-b border-b-(--lightborder) dark:border-b-(--bordercolor)  text-(--dark) dark:text-(--light) placeholder:text-(--lightborder) dark:placeholder:text-(--bordercolor) font-bold focus:border-b-2 focus:border-b-(--lightfont2) dark:focus:border-b-(--font-1)' ></textarea>
    </div>
    <button className='    dark:text-(--dark) text-(--light)  bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2)  dark:border-(--bordercolor) border border-(--lightborder) p-3 pl-4 pr-4 mt-5 text-base font-bold rounded-3xl opacity-100 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-500'>Send Message <i class="fa-solid fa-paper-plane"></i></button>
 
    <SocialMedia/>

    {/* <p className='mt-15 pr-15 bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) bg-clip-text text-transparent text-[40px] leading-12 font-bold '>Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.</p> */}
    <TextAnimate animation="blurInUp" by="word" duration={2} once className='mt-15  bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2)  from-(--lightfont1) to-(--lightfont2) dark:text-(--font-1) text-(--lightfont1) bg-clip-text pr-20 lg:text-[40px] md:text-[30px] text-[30px]  leading-12 font-bold ' >Want to know more about me, tell me  about your project or just to say hello? Drop me a line and I'll get back as soon   as possible.</TextAnimate>


    <div className='flex flex-col md:flex-row gap-2 justify-between mt-10 pt-5 mr-15 border-t-2 border-t-(--lightborder) dark:border-t-(--bordercolor) ' >
      <div>
        <h2 className='text-(--dark) dark:text-(--light)  font-bold'><i class="fa-solid fa-location-dot"></i> Location</h2>
        {/* <p className='dark:text-(--half) font-[500]'>Coimbatore,TamilNadu,India</p> */}
        <TypingAnimation startOnView={true} duration={100} className='dark:text-(--half) font-[500] text-sm md:text-base'>Coimbatore,TamilNadu,India</TypingAnimation>
      </div>
      <div>
        <h2 className='text-(--dark) dark:text-(--light) font-bold'><i class="fa-solid fa-phone"></i> Phone</h2>
        {/* <p className='dark:text-(--half) font-[500]'>+91 9087608722</p> */}
        <TypingAnimation startOnView={true} duration={100} className='dark:text-(--half) font-[500] text-base'>+91 9087608722</TypingAnimation>

      </div>
      <div>
        <h2 className='text-(--dark) dark:text-(--light) font-bold'><i class="fa-solid fa-envelope"></i> Email</h2>
        <TypingAnimation className='dark:text-(--half) font-[500] text-base' startOnView={true} duration={100}>sj9824384@gmail.com</TypingAnimation>
        {/* <p className='dark:text-(--half) font-[500]'>sj9824384@gmail.com</p> */}
      </div>
    </div>
    </section>
    
    </>
  )
}

export default Contact
