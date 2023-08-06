import Image from 'next/image';
import ServiceList from './ServicesList.js';

export default function Services() {
    return (
      <section class="bg-slate-100 text-zinc-800 h-full py-16 border-b-4 border-b-[--tiqah-gold]">
        <div class="container mx-auto flex h-full p-4 md:flex-row flex-col items-center">
          <div class="flex flex-col items-center text-center w-4/5 mb-10 md:w-2/5 md:items-center md:mb-0 lg:flex-grow lg:pr-24 md:pr-16 md:pt-0">
            <Image src="/assets/photos/free-consultation.jpg" class="rounded-xl shadow-lg" alt='ALBARAE BOURKADI' width="500" height="300"/>
          </div>
          <div class="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center md:pt-0">
            <h1 class="md:text-5xl md:w-full text-4xl text-[--tiqah-blue] font-bold my-4 md:leading-normal">
              We <span class="text-[--tiqah-gold]">Never</span> Get Paid <br/> From Students
            </h1>
            <hr class="rounded-full border-2 border-[--tiqah-gold] w-2/3 mb-5"/>
            <ServiceList />
          </div>
        </div>
      </section>
    );
  };