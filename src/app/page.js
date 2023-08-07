import { Founders } from "./components/Founders/Founders";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

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