import React from 'react'
import { TextAnimate } from '../magicui/text-animate'
import { AnimatedList } from '../magicui/animated-list'

const Education = () => {

    var educations=[
       
        {
            name:"Higher Secondary Certificate",
            place:"Government Higher Secondary School",
            period:"2019-2021",
            des:"I completed my HSC from Government Higher Secondary School, Coimbatore, with 83.3%"
        },
        {
            name:"Bachelor of Engineering in Computer Science",
            place:"Sri Ranganathar Institute of Engineering and Technology",
            period:"2021-2025",
            des:"I earned my Bachelor of Engineering in Computer Science from Sri Ranganathar Institute of Engineering  and Technology , Coimbatore (2021–2025), graduating with a CGPA of 8.06."
        },

    ]



  return (
   <>
   
   <section className='pt-15 pr-15'>
    {/* <h1 className='text-4xl font-bold pb-7 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)'>My Education</h1> */}
    <TextAnimate animation="blurInUp" by="character" duration={2}  once className='lg:text-4xl md:text-3xl text-2xl font-bold pb-7 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)'>My Education</TextAnimate>
   <AnimatedList>
   {
    educations.map((edu,i)=>(

       <Educ {...edu} key={i} />

    ))
   }
</AnimatedList>

   </section>
   
   </>
  )
}

export default Education


const Educ = ({ ...edu }) => {
    return (
        <div  className='grid lg:grid-cols-[150px_400px_350px] gap-2 items-center justify-center pb-7 pt-7 border-b dark:border-(--bordercolor) border-(--lightborder)'>
        <p className='dark:text-(--light) text-(--dark) md:text-xl'>{edu.period}</p>
        <div className='dark:text-(--light) text-(--dark) pr-4'>
            <h3 className=' text-xl md:text-2xl  font-[700] hover:underline cursor-pointer transition-all'>{edu.name} </h3>
            <p className='lg:text-sm text-xs  dark:text-(--half)'>from <span className='md:text-base text-sm font-[600] dark:text-(--light) text-(--dark) border-b dark:border-b-(--font-1) border-b-(--lightfont1)'>{edu.place}</span></p>
        </div>
        <p className='dark:text-(--light) text-(--dark) md:text-base text-sm'>{edu.des}</p>
       </div>

    );
  };
  