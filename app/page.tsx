import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <About />
      <Projects />
      <Skills />
    </>
  );
}
