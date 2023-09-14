import Image from "next/image";
import { Poppins } from "next/font/google";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <section className={poppins.className}>
      <div className="bg-[--tiqah-blue] text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <div>
              <Image
                src="/assets/page-not-found.svg"
                width="400"
                height="400"
                alt="404 Not Found"
                className="text-white"
              />
            </div>
            <p className="text-sm md:text-base text-[--tiqah-lightPink] font-bold p-5 my-5">
              The stuff you were looking for doesn&#39;t exist
            </p>
            <a
              href="/"
              className="flex text-center justify-center gap-x-2 font-semibold bg-transparent hover:bg-[--tiqah-gold] text-[--tiqah-gold] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[--tiqah-gold] hover:border-transparent"
            >
              <ArrowLeftCircleIcon className="w-6 h-6"/>
              <span>
                Go back home
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
