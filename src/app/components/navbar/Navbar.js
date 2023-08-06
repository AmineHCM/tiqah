export default function Navbar() {
  return (
    <header class="text-white bg-[--tiqah-blue]">
      <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a class="flex title-font items-center mb-4 md:mb-0">
          <img src="/logo.png" className="w-32 cursor-pointer "/>
        </a>
        <nav class="mx-auto flex flex-wrap font-medium items-center justify-center md:mr-5">
          {/* <a href="/" class="mr-5 px-3 py-1 border-b-2 border-transparent hover:border-b-2 hover:border-b-[--tiqah-gold]">Home</a> */}
          <a href="/" class="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]">Home</a>
          <a href="/" class="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]">About</a>
          <a href="/" class="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]">Services</a>
          <a href="/" class="md:ml-2 md:mr-5 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]">Contact</a>
        </nav>
        <button class="inline-flex items-center text-white rounded-full font-semibold bg-[--tiqah-gold] border-0 py-2 px-12 focus:outline-none hover:cursor-pointer hover:text-[--tiqah-blue] mt-4 md:mt-0">
          Sign in          
        </button>
      </div>
    </header>
  );
};