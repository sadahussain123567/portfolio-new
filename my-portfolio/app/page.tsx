import Image from "next/image";
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Animation from "@/components/Animation"
import Project from "@/components/Project"
export default function Home() {
  return (
<div>
  <div id="hero">
<Hero/>
</div>
<Animation/>
<div id="about">
  <About />
</div>
<div id="project">
  <Project />
</div>
<Projects/>
</div>
  );
}
