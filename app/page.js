import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import FeaturedProjects from "@/components/FeaturedProject";
import Floating from "@/components/Floating";
import Footer  from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Mode from "@/components/Mode";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <Floating />
      <Mode />
      <Hero />
      <div className=" w-full bg-outerbg font-poppins lg:!px-52 lg:!pt-20 md:p-10 px-5 pt-12   ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <About />
          <Info />
        </div>
        <Tools />
        {/* <Projects /> */}
        <FeaturedProjects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
