import React from 'react'
import eclipse from '../../assets/tools/eclipse.png'
import vscode from '../../assets/tools/vscode.png'
import mysql from '../../assets/tools/mysql.png'
import postman from '../../assets/tools/postman.png'
import intellij from '../../assets/tools/intellij.png'
import { BorderBeam } from '../magicui/border-beam'
import { TextAnimate } from '../magicui/text-animate'
const Tools = () => {

    const tools=[
        {
            name:"VS Code",
            logo:vscode
        },
        {
            name:"Eclipse",
            logo:eclipse
        },
        {
            name:"Intellij",
            logo:intellij
        },
        {
            name:"Postman",
            logo:postman
        },
        {
            name:'Workbench',
            logo:mysql
        }
    ]


  return (
    <>
    <section className='pt-30 md:pr-15'>
    {/* <h1 className='text-4xl font-bold pb-7  text-(--dark) dark:text-(--light) '>My favourite tools</h1> */}
    <TextAnimate animation="blurInUp" by="character" duration={2} once className='lg:text-4xl md:text-3xl text-2xl font-bold pb-7  text-(--dark) dark:text-(--light) '>My favourite tools</TextAnimate>
   
    <div className=' grid lg:grid-cols-5 lg:gap-5 grid-cols-3 md:gap-3 gap-2'>

    {
        tools.map((tool,i)=>(

        <div key={i} className='flex flex-col  items-center lg:h-45 md:h-43 md:w-37 lg:w-40 h-35 w-30 rounded-3xl p-3 border dark:border-(--bordercolor) border-(--lightborder) dark:hover:bg-(--bgcolor2)  hover:bg-(--lightbg2) scale-100 hover:scale-105 transition-all duration-300 '>
            <img src={tool.logo} alt="" className='md:h-25 h-20 mb-2'/>
            {/* <h3 className='text-xl text-(--dark) dark:text-(--light) font-bold'>{tool.name}</h3> */}
            <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={i/2}  className='lg:text-xl md:text-base text-sm text-(--dark) dark:text-(--light) font-bold' once>{tool.name}</TextAnimate>
             <BorderBeam duration={8} size={100} delay={i} />
        </div>

        ))
    }

       
    </div>
    </section>
    
    </>
  )
}

export default Tools
