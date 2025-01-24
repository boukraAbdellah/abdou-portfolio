import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/data';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

  return (
    <section className="md:p-10 p-5 w-full border-2 my-10">
      <h2 className="title text-center !font-semibold !text-4xl my-2 ">
        Projects
      </h2>
      <p className=" paragraph !text-2xl text-center">
        Things I've made trying to put my dent in the universe.
      </p>
      <div className=" md:px-10 px-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name + index}
            project={project}
            index={index}
          />
        ))}
      </div>
      <div className="text-lg text-center font-poppins">
        See more of my work on{" "}
        <a href='/' className="font-medium text-[#3053c9]">
          My Github <FaGithub className='inline' />
        </a>
      </div>
    </section>
  );
}

export default Projects