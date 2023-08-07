import Founders from "./components/founders/Founders";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Founders />
      <Services />
    </div>
  );
};