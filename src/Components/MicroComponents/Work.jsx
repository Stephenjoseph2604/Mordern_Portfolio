import React from "react";
import ats from "../../assets/work/ats.png";
import onedata from "../../assets/work/onedata.png";
import xplore from "../../assets/work/xplore.png";
import { TextAnimate } from "../magicui/text-animate";
import { AnimatedList } from "../magicui/animated-list";

import { motion } from "framer-motion";

const Work = () => {
  var works = [
    {
      name: "Front-End",
      place: "One Data Software Solutions",
      period: "2023-2023",
      logo: onedata,
      des: "Completed a 15-day internship in frontend development, focusing on HTML, CSS, JavaScript, and modern UI frameworks.",
    },
    {
      name: "MERN Stack",
      place: "Accent Techno Soft",
      period: "2024-2024",
      logo: ats,
      des: "Completed a one-month internship on MERN stack, gaining hands-on experience in MongoDB, Express.js, React, and Node.js.",
    },

    {
      name: "FullStack Java Trainer",
      place: "Xplore IT Corp",
      period: "2024-now",
      logo: xplore,
      des: "Full-Stack Java Trainer, mentoring in Java, Spring Boot, frontend technologies, and database management with hands-on application development.",
    },
  ];

  return (
    <>
      <section className="pt-30 md:pr-15 pr-5">
        {/* <h1 className='text-4xl font-bold pb-7 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)'>Work Experience</h1> */}
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={2}
          once
          className="lg:text-4xl md:text-3xl text-2xl font-bold pb-7 border-b dark:border-(--bordercolor) border-(--lightborder) dark:text-(--light) text-(--dark)"
        >
          Work Experience
        </TextAnimate>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Ensures animation runs only once
        > */}
          <AnimatedList >
            {works.map((work, i) => (
              <Notification {...work} key={i} />

              //     <div key={i} className='grid grid-cols-[150px_400px_350px] gap-2 items-center justify-center pb-7 pt-7 border-b dark:border-(--bordercolor) border-(--lightborder)'>
              //     <p className='dark:text-(--light) text-(--dark) text-xl'>{work.period}</p>
              //     <div className='relative dark:text-(--light) text-(--dark) pr-4 pl-15 '>
              //         <img src={work.logo} alt=""  className=' absolute top-2 left-0 h-12'/>
              //         <h3 className='text-2xl font-[700]  hover:underline cursor-pointer transition-all'>{work.name} </h3>
              //         <p className='text-sm text-(--half)'>in the <a href=""><span className='text-base font-[600] dark:text-(--light) text-(--dark) border-b '>{work.place}</span></a></p>
              //     </div>
              //     <p className='dark:text-(--light) text-(--dark) '>{work.des}</p>
              //    </div>
            ))}
          </AnimatedList>
        {/* </motion.div> */}
      </section>
    </>
  );
};

export default Work;

// className='inline-block text-(--light) text-xl font-[550] cursor-pointer w-0 border-b-2 hover:w-full  text-nowrap transition-all duration-500'
//className='text-base font-[600] text-(--light) border-b '

const Notification = ({ ...work }) => {
  return (
    <div className="grid lg:grid-cols-[150px_400px_350px] gap-2 items-center justify-center pb-7 pt-7 border-b dark:border-(--bordercolor) border-(--lightborder)">
      <p className="dark:text-(--light) text-(--dark) text-base md:text-xl">{work.period}</p>
      <div className="relative dark:text-(--light) text-(--dark) pr-4 pl-15 ">
        <img src={work.logo} alt="" className=" absolute top-2 left-0 h-12" />
        <h3 className="md:text-2xl text-xl font-[700]  hover:underline cursor-pointer transition-all">
          {work.name}{" "}
        </h3>
        <p className="text-sm dark:text-(--half)">
          in the{" "}
          <a href="">
            <span className= "text-sm md:text-base font-[600] dark:text-(--light) text-(--dark) border-b ">
              {work.place}
            </span>
          </a>
        </p>
      </div>
      <p className="dark:text-(--light) text-(--dark) ">{work.des}</p>
    </div>
  );
};
