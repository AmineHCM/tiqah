import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Founders from "./components/founders/Founders";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Founders />
      <Services />
      <Contact />
    </div>
  );
}
