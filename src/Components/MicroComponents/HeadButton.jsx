import React from 'react'
import { BorderBeam } from '../magicui/border-beam'
import { AnimatedShinyText } from '../magicui/animated-shiny-text'

const HeadButton = ({name}) => {
  return (
    <>
        <div className=' w-40 p-2 mb-5 text-center text-base border-1 rounded-3xl dark:text-(--light) text-(--dark) dark:border-(--bordercolor) border-(--lightborder) font-bold  dark:hover:shadow-[0px_0px_10px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_10px_rgba(000,000,000,0.5)] transition-all duration-500 '> 
          <AnimatedShinyText>
          <i className='mr-1'>&#10023;</i> {name}
          </AnimatedShinyText>
        </div>
    </>
  )
}

export default HeadButton
