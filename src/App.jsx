import { useEffect } from "react";
import AppDownload from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      // duration: 500,
      // delay: 100,
      // easing: "ease-in-cubic",
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppDownload />
      <Footer />
    </main>
  );
};

export default App;
