import Nav from "./components/nav";
import Hero from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  return(
    <div className="bg-[rgb(21,21,21)] h-screen">
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>

      
    </div>
  )
}