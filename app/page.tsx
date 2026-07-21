import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Header & Scroll indicator */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <Contact />
      </main>

      {/* Footer and global Back-to-top Floating action */}
      <Footer />
      <BackToTop />
    </div>
  );
}
