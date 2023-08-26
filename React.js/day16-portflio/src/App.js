import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const skills = [
    { name: "Java", progress: 90 },
    { name: "Kotlin", progress: 85 },
    { name: "HTML/CSS", progress: 70 },
    { name: "JavaScript", progress: 75 },
    { name: "Python", progress: 65 },
    { name: "SQL", progress: 80 },
    { name: "Git", progress: 85 },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Portfolio projects={projects} />
      <Footer />
    </>
  );
}

export default App;
