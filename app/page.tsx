import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Experience, About } from "@/components/Skills";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { Contact } from "@/components/Contact";
import { InfoStrip } from "@/components/InfoStrip";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-8 text-sm sm:grid-cols-3">
       
       
      </div>
         <InfoStrip />
      <Projects />
      <Services />
      <SkillsSection />
      <Experience />
      <About />
      <Contact />
   
    </main>
  );
}