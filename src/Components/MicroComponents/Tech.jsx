import React from "react";
import frontend from "../../assets/tech/frontend.png";
import backend from "../../assets/tech/backend.png";
import database from "../../assets/tech/database.png";
import trainer from "../../assets/tech/trainer.png";
import { BorderBeam } from "../magicui/border-beam";
import { TextAnimate } from "../magicui/text-animate";
const Tech = () => {
  var tech = [
    {
      pic: frontend,
      name: "Frontend Development",
      spec: {
        first: "Responsive",
        second: "Animated",
      },
      para: "I work with React.js, Tailwind CSS, and jQuery to create modern, interactive, and visually appealing web applications.",
    },
    {
      pic: backend,
      name: "Backend Development",
      spec: {
        first: "REST API",
        second: "Security",
      },
      para: "I work with Java Spring Boot, Spring Data JPA, Node.js, and Express.js to build secure, high-performance backend systems.",
    },
    {
      pic: database,
      name: "Database Management",
      spec: {
        first: "RDBMS",
        second: "NoSQL",
      },
      para: "I work with MySQL and MongoDB to ensure reliable and optimized database solutions for applications.",
    },
    {
      pic: trainer,
      name: "Software Trainer",
      spec: {
        first: "Core",
        second: "Advanced",
      },
      para: "I teach Java Full-Stack Development, covering core Java, Spring Boot, Spring Data JPA, frontend technologies, and database management.",
    },
  ];

  return (
    <>
      <section className="flex  flex-wrap justify-evenly pt-15 pr-15 gap-5 ">
        {tech.map((tec, i) => (
          <div
            key={i}
            className="h-140 w-105 rounded-3xl border border-(--lightborder) dark:border-(--bordercolor)  overflow-hidden p-8 
             scale-100 hover:scale-102  transition-all duration-300"
          >
            <TextAnimate className="text-3xl font-[720] dark:text-(--light) text-(--dark)" animation="blurInUp" by="word" duration={1} >{tec.name}</TextAnimate>
            {/* <h1 className="text-3xl font-[720] dark:text-(--light) text-(--dark)">
              {tec.name}
            </h1> */}
            <div className="flex gap-4 mt-3 ">
              <button className="dark:text-(--light) text-(--dark) text-sm pr-3 pl-3 pt-1 pb-1  border border-(--lightborder) dark:border-(--bordercolor) rounded-2xl ">
                {tec.spec.first}
              </button>
              <button className="dark:text-(--light) text-(--dark) text-sm pr-3 pl-3 pt-1 pb-1  border border-(--lightborder) dark:border-(--bordercolor) rounded-2xl ">
                {tec.spec.second}
              </button>
            </div>
            {/* <p className="mt-4 dark:text-(--light) text-(--dark)">{tec.para}</p> */}
            <TextAnimate className="mt-4 dark:text-(--light) text-(--dark)" animation="blurInUp" by="word" duration={1}>{tec.para}</TextAnimate>
            <img
              src={tec.pic}
              alt=""
              className="mt-4 w-full object- hover:scale-110 transition-all duration-300"
            />

            <BorderBeam
              delay={i}
              duration={10}
              size={400}
              className="from-transparent dark:via-(--font-1) via-(--lightfont1) to-transparent"
            />
            <BorderBeam
              duration={10}
              delay={5}
              size={400}
              className="from-transparent dark:via-(--font-2) via-(--lightfont2) to-transparent"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Tech;
