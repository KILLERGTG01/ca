import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Solutions from "./components/Solutions/page";
import Footer from "./components/Footer/page";
import Services from "./components/Services/page";

export default function Home() {
  return(
    <main>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Solutions />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
