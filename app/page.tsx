import "@/components/editorial/editorial.css";
import { fontVars } from "@/components/editorial/fonts";
import { Masthead } from "@/components/editorial/Masthead";
import { Hero } from "@/components/editorial/Hero";
import { Work } from "@/components/editorial/Work";
import { Engineering } from "@/components/editorial/Engineering";
import { Profile } from "@/components/editorial/Profile";
import { Contact } from "@/components/editorial/Closing";

export default function Page() {
  return (
    <div id="top" className={`ed ${fontVars}`}>
      <Masthead />
      <main>
        <Hero />
        <Work />
        <Engineering />
        <Profile />
        <Contact />
      </main>
    </div>
  );
}