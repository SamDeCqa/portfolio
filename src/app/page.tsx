// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import TechStack from "./techStack";
import Contacts from "./contacts";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <TechStack />
      <Resume />
      <Testimonial />
      <Contacts />
      <Footer />
    </>
  );
}
