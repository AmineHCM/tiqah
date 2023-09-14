import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-slate-100 text-zinc-800 h-full py-16 border-b-4 border-b-[--tiqah-blue]">
      <div className="container mx-auto flex h-full p-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center md:pt-0">
          <h1 className="md:text-5xl md:w-full text-4xl text-[--tiqah-blue] font-bold my-4 md:leading-normal">
            Mission of <br />
            <span className="text-[--tiqah-gold]">Tiqah Fondation</span>
          </h1>
          <hr className="rounded-full border-2 border-[--tiqah-gold] w-1/3 mb-5" />
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
              <div className="flex flex-col items-center my-2 py-3">
                <div className="flex flex-row gap-x-5 leading-relaxed text-lg font-bold mb-2 text-[--tiqah-gold] w-full bg-[--tiqah-blue] p-8 rounded-2xl items-center">
                  <span className="w-4/12">
                    Build a trust bridge with our Students
                  </span>
                  <span className="w-7/12 font-normal text-base text-white ml-5">
                    Every single Student can one day have his Own Success Story.
                    Let{"’"}s make it together !
                  </span>
                </div>
                <div className="text-center w-full mt-5 items-center leading-relaxed text-md mb-2 text-zinc-800">
                  <span>
                    The secret of success is that there is no secret, all we
                    have to do is take decisions and risks, and keep trying again and
                    again until we gain.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-4/5 mb-10 md:w-1/2 md:items-center md:mb-0 lg:flex-grow lg:pr-24 md:pr-16 md:pt-0">
          <Image
            src="/assets/happy-business-man.jpg"
            className="rounded-xl shadow-lg"
            alt="Image of a happy business man"
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}
