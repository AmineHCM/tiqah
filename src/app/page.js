import { Founders } from "./components/Founders/Founders";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Services } from "./components/Services/Services";


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