

function Platform() {
  return (
    <div class="p-5 bg-[--tiqah-blue] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    </div>
  )
};

function Phone() {
  return (
    <div class="p-5 bg-[--tiqah-gold] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    </div>
  )
};

function AcademicHat() {
  return (
    <div class="p-5 bg-[--tiqah-blue] md:bg-[--tiqah-gold] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    </div>
  );
};

function Job() {
  return (
    <div class="p-5 md:bg-[--tiqah-blue] bg-[--tiqah-gold] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    </div>
  );
};

export function ServiceList() {
  return (
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
          <div class="w-1/4 flex justify-center">
            <Platform/>
          </div>
          <div class="text-justify w-3/4">
            <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue]">Free access to platform</p>
            <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students through this platform will be independent and be able to do all the services by themselves.</p>
          </div>
        </div>

        <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
          <div class="w-1/4 flex justify-center">
            <Phone/>
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
            <AcademicHat/>
          </div>
          <div class="text-justify w-3/4">
            <p class="leading-relaxed text-lg font-bold mb-2 text-[--tiqah-blue] md:text-[--tiqah-gold]">Free registration</p>
            <p class="leading-relaxed text-sm mb-4 text-zinc-700">Students can register for free in a university of their choice after benefiting from the free consultation.</p>
          </div>
        </div>

        <div class="flex flex-row gap-x-5 items-center text-center align-middle mx-5 my-2 px-3 py-1 rounded-xl md:py-3 md:mx-0 md:my-1 md:justify-between">
          <div class="w-1/4 flex justify-center">
            <Job/>
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

