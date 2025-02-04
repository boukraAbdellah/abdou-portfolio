import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Floating from "@/components/Floating";
import Footer  from "@/components/Footer";
import Hero from "@/components/Hero";
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
      <div className=" w-full bg-outerbg font-poppins lg:!px-52 lg:!pt-20 p-10   ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <About />
          <Education />
        </div>
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
