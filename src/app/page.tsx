import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects"; 
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";

export default function Page() {  // Changé de Home à Page
  return (
    <>
      <Navbar />
      <main className="w-full"> {/* Supprimé pt-16 */}
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}