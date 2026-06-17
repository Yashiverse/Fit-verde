import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import Plans from "./components/Plans/Plans";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>

      <main>
        <Navbar />
        <Hero />
        <Gallery />
        <Services />
        <Plans />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;