import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Founders from "./components/Founders/Founders.js";
import Services from "./components/Services/Services.js";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div class="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Founders />
      <Services />
    </div>
  );
};