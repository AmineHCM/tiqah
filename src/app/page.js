import { Founders } from "./components/founders/Founders";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div class="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Founders />
    </div>
  );
};