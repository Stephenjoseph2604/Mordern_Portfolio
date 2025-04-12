import React from 'react'
import java from '../../assets/skills/java.png'
import springboot from '../../assets/skills/springboot.png'
import react from '../../assets/skills/reactjs.png'
import tailwind from '../../assets/skills/tailwind.png'
import nodejs from '../../assets/skills/nodejs.png'
import expressjs from '../../assets/skills/expressjs.png'
import mysql from '../../assets/skills/mysql.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/javascript.png'
import { BorderBeam } from '../magicui/border-beam'
import { TextAnimate } from '../magicui/text-animate'


const Skills = () => {

    var skills=[
        {
            name:"Java",
            logo:java
        },
        {
            name:"Spring Boot",
            logo:springboot
        },
        {
            name:"React Js",
            logo:react
        },
        {
            name:"Tailwind",
            logo:tailwind
        },
        {
            name:"MySQL",
            logo:mysql
        },
        {
            name:"Node Js",
            logo:nodejs
        },
        {
            name:"Express Js",
            logo:expressjs
        },
       
        {
            name:"HTML",
            logo:html
        },
        {
            name:"CSS",
            logo:css
        },
        {
            name:"JavaScript",
            logo:js
        },

    ]



  return (
    <>
    <section className='pt-30 md:pr-15'>
    {/* <h1 className='text-4xl font-bold pb-7  dark:text-(--light) text-(--dark)'>Skills</h1> */}
    <TextAnimate animation="blurInUp" by="character" duration={2} once className='lg:text-4xl md:text-3xl text-2xl font-bold pb-7  dark:text-(--light) text-(--dark)'>Skills</TextAnimate>
  
    <div className=' grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3  lg:gap-5 md:gap-3 gap-2 '>

    {
        skills.map((skill,i)=>(

        <div key={i} className='flex flex-col  items-center lg:h-45 lg:w-40 md:h-43 md:w-37 h-35 w-30  rounded-3xl p-4 border dark:border-(--bordercolor) border-(--lightborder) dark:hover:bg-(--bgcolor2)  hover:bg-(--lightbg2) scale-100 hover:scale-105 transition-all duration-300 '>
            <img src={skill.logo} alt="" className={`md:h-25 h-17 mb-2 `}/>
            {/* <h3 className='text-xl dark:text-(--light) text-(--dark) font-bold'>{skill.name}</h3> */}
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={i/2} className='lg:text-xl md:text-base text-xs dark:text-(--light) text-(--dark) font-bold' once >{skill.name}</TextAnimate> 
            <BorderBeam duration={8} size={100} delay={i} />
        </div>

        ))
    }

       
    </div>
    </section>
    
    </>
  )
}

export default Skills
