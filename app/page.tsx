import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";

export default function Home() {
  return(
    <main>
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </main>
  );
}
