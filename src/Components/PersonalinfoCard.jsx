import React from "react";
import pic from "../assets/stephen.jpg";
import logo from "../assets/sjlogo2.png";
import { HyperText } from "./magicui/hyper-text";
import { TextAnimate } from "./magicui/text-animate";
import { BorderBeam } from "./magicui/border-beam";
// import { WordRotate } from "./magicui/word-rotate";

const PersonalinfoCard = () => {
  const phoneNumber = "9087608722"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello! I would like to chat with you.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const email = "sj9824384@gmail.com"; // Replace with your email
  const subject = encodeURIComponent("Hello!");
  const body = encodeURIComponent("I would like to connect with you.");

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
  const hackerrankLink="https://www.hackerrank.com/profile/sj9824384";
  const linkedinLink="https://www.linkedin.com/in/stephenjosephm2604/";
  const githubLink="https://github.com/Stephenjoseph2604";
  var socialmedia = [
    {
      url: whatsappLink,
      icon: "fa-brands fa-whatsapp",
    },
    {
      url: gmailLink,
      icon: "fa-solid fa-envelope",
    },
    {
      url: hackerrankLink,
      icon: "fab fa-hackerrank",

    },
    {
      url: githubLink,
      icon: "fab fa-github",
    },
    
    {
      url: linkedinLink,
      icon: "fa-brands fa-linkedin",
    },
  ];
  // var socialmedia=["fa-brands fa-whatsapp","fa-solid fa-globe","fa-brands fa-instagram","fa-solid fa-envelope","fa-brands fa-linkedin"];

  return (
    <>
    <section className=" md:fixed static lg:top-13 mt-10 md:mt-0 md:mr-0   lg:left-13 md:left-7 md:top-7 flex flex-col bg-(--lightbg2) dark:bg-(--bgcolor2) lg:h-[650px] md:h-[560px] md:w-[350px] lg:w-[400px] w-[350px] h-[520px] mx-auto scale-100  lg:p-10 lg:pt-6 md:p-8 md:pt-5 p-5 border dark:border-(--bordercolor) border-(--lightborder) rounded-4xl ">
      <div className="flex md:h-25 w-full  items-center ">
        <img src={logo} alt="" className="lg:h-20 md:h-17  h-15 inline-block" />
        {/* <h1 className=' bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2) from-(--lightfont1) to-(--lightfont2) text-3xl font-[750] text-transparent bg-clip-text'>STEPHEN JOSEPH</h1> */}
        <HyperText
          duration={1000}
          className=" bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2) from-(--lightfont1) to-(--lightfont2) lg:text-3xl md:text-2xl text-base font-[750] text-transparent bg-clip-text"
        >
     
          STEPHEN JOSEPH
        </HyperText>
      </div>
      <div className="flex  justify-center">
        <img src={pic} alt="" className="lg:h-60 md:h-50 h-40 rounded-4xl" />
      </div>
      <div>
        <p className="mt-2 dark:text-(--light) text-(--dark) md:text-sm text-xs lg:text-base opacity-70">
          Specialization:
        </p>
        <TextAnimate
          duration={4}
          animation="blurInUp"
          by="character"
          className=" md:text-sm text-base lg:text-base font-[730] dark:text-(--light) text-(--dark) pr-4"
        >
          Fullstack Web Devloper and   Software Trainer
        </TextAnimate>
        <p className=" dark:text-(--light) text-(--dark) md:text-sm lg:text-base opacity-70">
          Based in:
        </p>
        {/* <h4 className=' text-base font-[700] dark:text-(--light) text-(--dark)'></h4> */}
        <TextAnimate
          duration={4}
          animation="blurInUp"
          by="character"
          className=" md:text-sm lg:text-base font-[700] dark:text-(--light) text-(--dark)"
        >
          Coimbatore,TamilNadu,India
        </TextAnimate>
      </div>
      <div className="flex gap-1 justify-between items-center lg:h-15 md:h-13 mt-3 ">
        {socialmedia.map((ss, i) => (
          <a
            key={i}
            href={ss.url}
            target="_blank"
            className=" flex flex-col items-center justify-center md:h-12 lg:h-13 md:w-12 lg:w-13 h-10 w-10 border dark:border-(--bordercolor) border-(--lightborder) rounded-2xl overflow-hidden  hover:bg-neutral-300 dark:hover:bg-neutral-800"
          >
            {/* <li href='h' key={i} class={`${ss} text-(--light) text-3xl pb-5 `}></li>  */}
            <li
             
              key={i}
              class={`${ss.icon}  dark:text-(--light) text-(--dark) md:text-xl lg:text-2xl  text-xl `}
            ></li>
            {/* <WordRotate
    className="text-4xl font-bold text-black dark:text-white"
    words={[`${ss.icon}`, `${ss.icon}`]}
    /> */}
          </a>
        ))}
      </div>
      <a href="/#contact" className=" block rounded-3xl dark:text-(--dark) text-(--light) bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2) from-(--lightfont1) to-(--lightfont2) text-center  pt-3 pb-3 md:mt-2 mt-4 font-bold">
        Let's Work Together
      </a >
      {/* <BorderBeam duration={8} size={100} /> */}
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent  via-(--lightfont1) to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent  via-(--lightfont2) to-transparent"
      />
    </section>
    </>
  );
};

export default PersonalinfoCard;


// ----------------------------------------
