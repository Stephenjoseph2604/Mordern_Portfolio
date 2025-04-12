import React from 'react'


const SocialMedia = () => {

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
  return (
    <>

        <div className='flex gap-1 justify-between items-center lg:h-30 md:h-23 h-15  mt-15 w-full lg:pr-20  lg:pl-5 md:pr-10  '>
        {
            socialmedia.map((ss,i)=>(
               
               <a key={i} href={ss.url} className=' flex flex-col items-center justify-center  h-full lg:w-30 md:w-23 w-15 border border-(--lightborder) dark:border-(--bordercolor) rounded-4xl overflow-hidden   transition-all duration-300 opacity-45 hover:opacity-100'>
               {/* <li href='h' key={i} class={`${ss} text-(--light) text-3xl pb-5 `}></li>  */}
               <li href='h' key={i} class={`${ss.icon}  dark:text-(--light) text-(--dark) lg:text-7xl md:text-5xl text-2xl `}></li> 
              
               </a>



            ))

        }
        
       
    </div>
    
    </>
  )
}

export default SocialMedia
