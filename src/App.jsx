import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import Plans from "./components/Plans/Plans";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Slider from  "./Stars/Slider";
import HeatSlider from "./Stars/HeatSlider";
import Stats from "./Stars/Stats";


function App() {
  return (
    <>

      <main>
        <Navbar />
        <Hero />
        <Stats />
        <Gallery />
        <Slider/>
        <Services />
        <Plans />
        <Reviews />
        <HeatSlider/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;