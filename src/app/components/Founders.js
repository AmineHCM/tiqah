import Image from "next/image";

export default function Founders() {
  return (
    <section className="bg-slate-100 text-zinc-800 h-full py-16 border-b-4 border-b-[--tiqah-blue]">
      <div className="container mx-auto flex h-full p-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center md:pt-0">
          <h1 className="md:text-5xl md:w-full text-4xl text-[--tiqah-blue] font-bold my-4 md:leading-normal">
            Get to know the founders
          </h1>
          <hr className="rounded-full border-2 border-[--tiqah-gold] w-2/3 mb-5" />
          <p className="mb-8 leading-relaxed md:text-lg md:leading-loose w-4/5 text-justify my-5">
            <b>YASSINE LAAOUANE & ALBARAE BOURKADI</b> : in order to rebuild the
            trust bridge between Moroccan students and agencies that provide
            intermediary services connecting them to Turkish universities, have
            decided to start a new approach of student services based on trust
            and transparency values by providing a free student consulting
            platform that groups all what the Moroccan students and they parents
            need to know about studying and living in Turkey, from A to Z.
          </p>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center md:pt-0">
          <div className="flex flex-row gap-x-10 items-center text-center mx-5 my-2 px-3 md:py-3 py-1 rounded-xl ring-2 ring-[--tiqah-blue] text-white bg-[--tiqah-blue] md:justify-between">
            <div className="w-1/3 flex justify-start">
              <Image
                src="/assets/yassine.webp"
                className="rounded-xl"
                alt="YASSINE LAAOUANE"
                width="300"
                height="300"
              />
            </div>
            <div className="text-justify w-2/3">
              <p className="leading-relaxed text-lg font-bold mb-4">
                YASSINE LAAOUANE
              </p>
              <p className="leading-relaxed text-sm font-semibold mb-4">
                Student Consultant in Turkey
              </p>
              <p className="leading-relaxed text-sm mb-4">
                More than 6 years of experience in studies consulting in Turkey.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-x-10 items-center text-center mx-5 my-2 px-3 py-1 md:py-3 rounded-xl ring-2 ring-[--tiqah-blue] shadow-lg bg-white text-[--tiqah-blue] md:justify-between">
            <div className="w-1/3 flex justify-end">
              <Image
                src="/assets/barae.png"
                className="rounded-xl"
                alt="ALBARAE BOURKADI"
                width="300"
                height="300"
              />
            </div>
            <div className="text-justify w-2/3">
              <p className="leading-relaxed text-lg font-bold mb-4">
                ALBARAE BOURKADI
              </p>
              <p className="leading-relaxed text-sm font-semibold mb-4">
                Digital Marketer / Filmmaker
              </p>
              <p className="leading-relaxed text-sm mb-4 text-zinc-800">
                More than 5 years of experience in filmmaking and E-Marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
