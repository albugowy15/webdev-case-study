import Biodata from "../components/Biodata";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="container px-2 mx-auto">
      <Navbar />
      <Biodata />
      <Skills />
    </div>
  );
}
