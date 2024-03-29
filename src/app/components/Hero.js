import Image from 'next/image';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="hero relative text-white h-full border-b-4 border-[--tiqah-gold]">
        <div className="overlay h-full">
          <div className="container mx-auto flex h-full p-4 md:flex-row flex-col items-center md:align-middle">
            <div className="pt-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:pt-0">
              <h1 className="sm:text-7xl md:w-3/5 text-4xl mb-4 font-bold text-white md:leading-tight">Tiqah Fondation</h1>
              <p className="mb-8 leading-relaxed font-semibold md:text-xl ">All you need to know about <b>Tiqah</b></p>

              <hr className="border-white w-4/5"/>

              <p className="leading-relaxed md:leading-loose md:text-lg w-full text-justify my-5">
                The idea began when we saw that many students were lost in their
                search for a university in Turkey. We decided to help them by
                providing them with all the information they need to choose
                the best university for them.
              </p>  
              <div className="flex justify-center mt-5">
                <Link className="inline-flex font-semibold rounded-full text-lg text-zinc-800 bg-white border-0 py-3 px-10" href="/about">
                  Learn More <ArrowRightCircleIcon className="h-7 w-7 text-[--tiqah-gold] ml-3" />
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image src="/assets/tiqah-fondation.png" className="rounded-full ring-2 md:ring-4 ring-white shadow-lg w-1/2 mx-auto md:w-full md:mx-0" alt='Tiqah Fondation' width="500" height="500"/>
            </div>
          </div>
        </div>
      </section>            
    );
  };