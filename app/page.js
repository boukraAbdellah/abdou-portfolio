import About from "@/components/About";
import Contact from "@/components/Contact";
import Floating from "@/components/Floating";
import { Footer } from "@/components/Footer";
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
          <section className="py-10 px-5 col-span-1 md:col-span-4 bg-innerbg rounded-3xl">
            <h2 className="title mb-4 ">Education</h2>
            <div className="flex flex-col gap-3 ">
              <div className="">
                <span>2023 - Present</span>
                <div className="w-full rounded-full h-[3px] mb-1 bg-gray-700"></div>
                <p className="text-xs ">
                  Higher School of Computer Science (ESI-SBA) - Second cycle
                </p>
              </div>
              <div className="">
                <span>2021 - 2023</span>
                <div className="w-full rounded-full h-[3px] mb-1 bg-gray-700"></div>
                <p className="text-xs ">
                  Higher School of Computer Science (ESI-SBA) -
                  <span>Preparatory cycle</span>
                </p>
              </div>
              <div className="">
                <span>2021</span>
                <div className="w-full rounded-full h-[3px] mb-1 bg-gray-700"></div>
                <p className="text-xs ">Baccalaureate (High School Diploma)</p>
              </div>
            </div>
          </section>
        </div>
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
