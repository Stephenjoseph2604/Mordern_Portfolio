import React, { useEffect, useState } from "react";
import bus from "../../assets/projects/bus.jpg";
import student from "../../assets/projects/students.jpg";
import { useNavigate, useParams } from "react-router-dom";


import projects from "../../Projects.js";

const ProjectDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

  console.log(project);

  const goBack = () => {
    navigate(-1); // Moves back to the previous page
  };

  

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="fixed w-screen h-screen overflow-y-scroll bg-transparent backdrop-blur-[15px] top-0 left-0 z-40">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-(--lightbg1) dark:bg-(--bgcolor2) shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold mb-7 text-(--lightfont2) dark:text-(--font-1)">
            {project.title}
          </h1>

          <div className="my-4 flex justify-center ">
            <img
              src={project.image}
              alt="Project Demo"
              className=" h-100 object-contain rounded-md shadow-md"
            />
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-3 text-(--lightfont2) dark:text-(--font-1)">
            📌 Over view
          </h2>
          <p className="text-(--bordercolor) dark:text-(--lightborder) mb-4">
            {project.overview}
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3 text-(--lightfont2) dark:text-(--font-1)">
            ✨ Key Features
          </h2>
          <ul className="list-none ml-3 list-inside text-(--bordercolor) dark:text-(--lightborder) space-y-2">
            {
            project.features.map((p,i) => (
              <li key={i} className=" inline-block p-2 mr-2 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border ">
                ✦{p}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3 text-(--lightfont2) dark:text-(--font-1)">
            <i class="fas fa-tools  mr-1 text-red-600 "></i> Tech Stack
          </h2>
          <div className="text-(--bordercolor) flex flex-col gap-3 dark:text-(--lightborder) ">
            <div>
              <span className=" block p-2 mr-2 mb-2 w-40 pl-5 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3  rounded-3xl border font-bold  ">
                <i class="fas fa-desktop mr-2"></i>Front End
              </span>
              {
                project.techStack.frontend.map((f,i)=>(
                  <li key={i} className=" inline-block p-1  ml-3 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border ">
                  ✦ {f}
                </li>
                ))
              }
             
              
            </div>
           { project.techStack.backend[0]&& <div>
              <span className=" block p-2 mr-2 mb-2 w-40 pl-2 text-center hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3  rounded-3xl border font-bold  ">
                <i class="fas fa-server mr-2"></i>Back End
              </span>
              {
                project.techStack.backend.map((b,i)=>(
                  <li key={i} className=" inline-block p-1  ml-3 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border ">
                  ✦ {b}
                </li>
                ))
              }
            </div>}
            {project.techStack.database[0] && <div>
              <span className=" block p-2 mr-2 mb-2 w-40  hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-5 rounded-3xl border font-bold  ">
                <i class="fas fa-database mr-2"></i>Database
              </span>
              {
                project.techStack.database.map((d,i)=>(
                  <li key={i} className=" inline-block p-1  ml-3 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border ">
                  ✦ {d}
                </li>
                ))
              }
            </div>}
            <div>
              <span className=" block p-2 mr-2 mb-2 w-45 text-center hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border font-bold  ">
                <i class="fas fa-cog mr-2"></i>Tools & Others
              </span>
              {
                project.techStack.tools.map((t,i)=>(
                  <li key={i} className=" inline-block p-1  ml-3 hover:bg-(--bgcolor1) hover:text-(--light) transition-all duration-200 pr-3 pl-3 rounded-3xl border ">
                  ✦ {t}
                </li>
                ))
              }
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 text-(--lightfont2) dark:text-(--font-1)">
            Screenshots
          </h2>
          <div className="relative my-4 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {project.screenshots.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full flex-shrink-0 h-1/2  rounded-md shadow-md"
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-(--bordercolor) text-white px-3 py-2 rounded-l-md"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-(--bordercolor) text-white px-3 py-2 rounded-r-md"
            >
              ❯
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-(--lightfont2) dark:text-(--font-1)">
              👨‍💻 My Role
            </h2>
            <ul className="list-none ml-3  list-inside text-(--bordercolor) dark:text-(--lightborder) space-y-2">
              {
                project.myrole.map((r,i)=>(
                  <li key={i}> ✦ {r}</li>
                ))
              }
             
             
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-(--lightfont2) dark:text-(--font-1)">
              🧠 What I Learned ?
            </h2>
            <ul className="list-none ml-3  list-inside text-(--bordercolor) dark:text-(--lightborder) space-y-2">
            {
                project.learnings.map((l,i)=>(
                  <li key={i}> ✦ {l}</li>
                ))
              }
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-(--lightfont2) dark:text-(--font-1)">
              🚀 Future Improvements
            </h2>
            <ul className="list-none ml-3  list-inside text-(--bordercolor) dark:text-(--lightborder) space-y-2">
            {
                project.future.map((f,i)=>(
                  <li key={i}> ✦ {f}</li>
                ))
              }
            </ul>
          </div>

          <h2 className="text-xl font-semibold mt-6 text-(--lightfont2) dark:text-(--font-1)">Links</h2>
          <div className="flex space-x-4 mt-2">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 border rounded-md text-(--bordercolor) dark:text-(--lightborder) hover:text-(--light) hover:bg-(--bgcolor1)"
            >
              <i className="fa-brands fa-github"></i> <span>GitHub Repo</span>
            </a>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              <span onClick={goBack}>
                Go Back <i class="fas fa-right-from-bracket"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
