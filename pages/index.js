import Biodata from "../components/Biodata";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="container px-2 mx-auto">
      <Navbar />
      <Biodata />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
