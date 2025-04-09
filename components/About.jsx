import React from 'react'

const About = () => {
  return (
    <section
      className="md:p-10 p-4 col-span-1 md:col-span-7 bg-innerbg rounded-3xl "
      id="about"
    >
      <h2 className="title mb-4 ">About</h2>
      <p className="paragraph ">
        <span className="font-semibold">I'm Abdellah,</span>
        <br /> a passionate and creative individual who thrives on turning ideas
        into reality through his technical skills and knowledge.
      </p>
      <br />
      <p className="paragraph !text-base">
        I'm a dedicated and curious Computer Science student with a strong
        passion for technology and problem-solving. I enjoy creating websites
        and turning ideas into meaningful digital experiences. Whether working
        independently or as part of a team, I value clean design, thoughtful
        development, and continuous growth. My goal is to build impactful
        solutions and grow into a well-rounded software engineer.
      </p>
    </section>
  );
}

export default About