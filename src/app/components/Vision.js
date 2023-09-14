import Image from "next/image";

export default function Vision() {
  return (
    <section className="bg-slate-100 text-zinc-800 h-full py-16 border-b-4 border-b-[--tiqah-gold]">
      <div className="container mx-auto flex h-full p-4 md:flex-row flex-col items-center">
        <div className="flex flex-col items-center text-center w-4/5 mb-10 md:w-1/2 md:items-center md:mb-0 lg:flex-grow lg:pr-24 md:pr-16 md:pt-0">
          <Image
            src="/assets/business-strategy.jpg"
            className="rounded-xl shadow-lg"
            alt="Image of a business strategy"
            width="600"
            height="400"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center md:pt-0">
          <h1 className="md:text-5xl md:w-full text-4xl text-[--tiqah-blue] font-bold my-4 md:leading-normal">
            Our <span className="text-[--tiqah-gold]">Vision</span>
          </h1>
          <hr className="rounded-full border-2 border-[--tiqah-gold] w-1/3 mb-5" />
          <div className="flex flex-col">
            <div className="w-full">
              <div className="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
                <div className="text-justify w-full">
                  <p className="flex items-center leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue]">
                    <div className="h-3 w-3 rounded-full bg-[--tiqah-blue] mr-4"></div>
                    Providing the Right Student Orientation
                  </p>
                  <p className="leading-relaxed text-md mb-4 text-zinc-700">
                    We believe that each student can have his own success story
                    one day, it only depends on having the right orientation and
                    making good choices.
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
                <div className="text-justify w-full">
                  <p className="flex items-center leading-relaxed text-lg font-bold mb-2 text-[--tiqah-gold]">
                    <div className="h-3 w-3 rounded-full bg-[--tiqah-gold] mr-4"></div>
                    Making the student independent
                  </p>
                  <p className="leading-relaxed text-md mb-4 text-zinc-700">
                    Through our student consulting platform, we help students
                    become independent and serve themselves by themselves in
                    Turkey.
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
                <div className="text-justify w-full">
                  <p className="flex items-center leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue]">
                    <div className="h-3 w-3 rounded-full bg-[--tiqah-blue] mr-4"></div>
                    Providing financial freedom for the student
                  </p>
                  <p className="leading-relaxed text-md mb-4 text-zinc-700">
                    We believe that the best student is the one who takes
                    responsibility for himself early and helps his parents
                    instead of being Heavy on them, which is why we offer
                    opportunities for our students to get a student job with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
