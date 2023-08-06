import { AcademicHat } from "./icons/AcademicHat.js";
import { Job } from "./icons/Job.js";
import { Phone } from "./icons/Phone.js";
import { Platform } from "./icons/Platform.js";

export default function ServiceList() {
    return (
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
            <div class="w-1/4 flex justify-center">
              <Platform />
            </div>
            <div class="text-justify w-3/4">
              <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue]">Free access to platform</p>
              <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students through this platform will be independent and be able to do all the services by themselves.</p>
            </div>
          </div>
  
          <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
            <div class="w-1/4 flex justify-center">
              <Phone />
            </div>
            <div class="text-justify w-3/4">
              <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-gold]">Free consultation</p>
              <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students benefit from a call with a student consultant in order to choose the right study choice.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
            <div class="w-1/4 flex justify-center">
              <AcademicHat />
            </div>
            <div class="text-justify w-3/4">
              <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue] md:text-[--tiqah-gold]">Free registration</p>
              <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students can register for free in a university of their choice after benefiting from the free consultation.</p>
            </div>
          </div>
  
          <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
            <div class="w-1/4 flex justify-center">
              <Job />
            </div>
            <div class="text-justify w-3/4">
              <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-gold] md:text-[--tiqah-blue]">Finding a student job for free</p>
              <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students can benefit from a free student job with <b>Tiqah Fondation</b> by working as Agents in student services.</p>
            </div>
          </div>
        </div>
      </div>
    );
};