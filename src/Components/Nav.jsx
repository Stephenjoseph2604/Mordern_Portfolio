import React from 'react'
import lightmood from '../assets/lightmood.png'
import darkmood from  '../assets/darkmood.png'
import { useTheme } from '../context/ThemeContext'

const Nav = () => {

  const {theme,setTheme}= useTheme();   

  
  
  return (
   <>
    <nav className=' hidden  md:flex fixed  lg:right-11 md:right-5 top-13 h-20 lg:w-2/3 md:w-3/5 pl-5 items-center justify-evenly z-30  '>
        <a href="/#home"      className=' font-bold   dark:text-(--light)  md:text-xs lg:text-base md:pl-4 md:pt-2 md:pr-4 md:pb-2 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 rounded-4xl opacity-100 backdrop-blur-[10px]  hover:scale-110 transition   duration-300  hover:border  dark:border-(--bordercolor)  border-(--lightborder)'>Home</a>
        <a href="/#portfolio" className=' font-bold dark:text-(--light)  md:text-xs lg:text-base md:pl-4 md:pt-2 md:pr-4 md:pb-2 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 rounded-4xl opacity-100 backdrop-blur-[10px]  hover:scale-110 transition duration-300    hover:border dark:border-(--bordercolor) border-(--lightborder)'>Portfolio</a>
        <a href="/#about"     className=' font-bold dark:text-(--light)  md:text-xs lg:text-base md:pl-4 md:pt-2 md:pr-4 md:pb-2 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 rounded-4xl opacity-100 backdrop-blur-[10px]  hover:scale-110 transition duration-300    hover:border dark:border-(--bordercolor) border-(--lightborder)'>About Me</a>
        <a href="/#resume"    className=' font-bold dark:text-(--light)  md:text-xs lg:text-base md:pl-4 md:pt-2 md:pr-4 md:pb-2 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 rounded-4xl opacity-100 backdrop-blur-[10px]  hover:scale-110 transition duration-300    hover:border dark:border-(--bordercolor) border-(--lightborder) '>Resume</a>
        <a href="/#contact"   className=' font-bold dark:text-(--light)  md:text-xs lg:text-base md:pl-4 md:pt-2 md:pr-4 md:pb-2 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 rounded-4xl opacity-100 backdrop-blur-[10px]  hover:scale-110 transition duration-300    hover:border dark:border-(--bordercolor) border-(--lightborder) '>Contact</a>
        <img src={`${theme==='dark'? lightmood:darkmood}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} alt="" className='lg:h-12 lg:p-2 md:h-5   border-(--border) rounded-full backdrop-blur-[10px]  cursor-pointer '/>
        <button className=' animate-in font-bold dark:text-(--dark) text-(--light) bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2) from-(--lightfont1) to-(--lightfont2) md:pt-2 md:pb-2 md:pr-4 md:pl-4 lg:pt-4 lg:pb-4 lg:pr-7 lg:pl-7 md:text-sm lg:text-base md:hidden lg:block rounded-4xl '>Let's Talk <i class="fa-solid fa-comment text-(--bgcolor) lg:text-xl"></i> </button>
       
    </nav>
   
   
   </>
  )
}

export default Nav
