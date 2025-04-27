import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Publications from "../components/publications"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFC]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
      <Footer />


      {/* <h1>Hello Arpit!</h1> */}

    </main>
  )
}
