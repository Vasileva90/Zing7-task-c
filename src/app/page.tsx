import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main className="flex flex-col relative w-full md:container md:mx-auto px-4 items-center">
      <Nav />
      <Hero />
      <section className="flex flex-col justify-center items-center xl:max-w-[50%] mt-20">
        <Content />
      </section>
      <section className="flex flex-col items-center w-screen mt-24 bg-swamp-dark-gray">
        <Contact />
      </section>
      <section className="flex justify-center items-center xl:max-w-[75%] mt-24 md:mb-28 mb-16">
        <CaseStudies />
      </section>
    </main>
  );
}
