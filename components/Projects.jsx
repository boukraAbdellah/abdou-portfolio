import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/data';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

  return (
    <section className="md:py-10 py-5 w-full  my-10">
      <h2 className="title md:text-center !font-semibold md:!text-4xl  my-2 ">
        Projects
      </h2>
      <p className=" paragraph md:!text-2xl md:text-center">
        Things I've made trying to put my dent in the universe.
      </p>
      <div className=" ">
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
        <a href='/' className="font-medium text-secondary">
          My Github <FaGithub className='inline' />
        </a>
      </div>
    </section>
  );
}

export default Projects