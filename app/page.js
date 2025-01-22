import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className=" w-full bg-[#f2fafc] font-poppins !py-20 section grid grid-cols-1 md:grid-cols-12 gap-10 ">
        <About />
        <section className="p-10 col-span-1 md:col-span-4 bg-white rounded-3xl">
          <h2 className="title mb-7 ">Services</h2>
        </section>
        <Tools />
      </div>
    </>
  );
}
