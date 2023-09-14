import Hero from "./components/Hero";
import Services from "./components/Services";
import ApplyNow from "./components/ApplyNow";
import Mission from "./components/Mission";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Mission />
      <Services />
      <ApplyNow />
    </div>
  );
}
