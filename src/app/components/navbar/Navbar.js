import Image from "next/image";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="text-white bg-[--tiqah-blue]">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="flex title-font items-center mb-4 md:mb-0">
          <Image
            src="/assets/logo.png"
            className="w-32 cursor-pointer"
            width="128"
            height="128"
          />
        </a>
        <nav className="mx-auto flex flex-wrap font-medium items-center justify-center md:mr-5">
          <a
            href="/"
            className="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]"
          >
            Home
          </a>
          <a
            href="/"
            className="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]"
          >
            About
          </a>
          <a
            href="/"
            className="md:mx-2 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]"
          >
            Services
          </a>
          <a
            href="/"
            className="md:ml-2 md:mr-5 rounded px-5 py-2 duration-150 ease-in-out hover:bg-blue-100 hover:text-[--tiqah-blue]"
          >
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center text-white rounded-full font-semibold bg-[--tiqah-gold] border-0 py-2 px-12 focus:outline-none hover:cursor-pointer hover:text-[--tiqah-blue] mt-4 md:mt-0">
          <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" /> Sign in
        </button>
      </div>
    </header>
  );
}
