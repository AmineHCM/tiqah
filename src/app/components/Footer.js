export default function Footer() {
    return (
        <footer className="flex flex-col bg-slate-100 items-center justify-center align-middle w-full p-8 text-center">
              <a href="mailto:yassinelaaouane575@gmail.com " target="_blank" className="mt-5 text-[--tiqah-blue]">contact@tiqahfondation.com</a>
              <p className="inline-flex mt-5">
                <a className="text-blue-500" href="https://www.facebook.com/tiqah4education" target="_blank">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-cyan-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-rose-500" href="https://www.instagram.com/tiqah4education" target="_blank">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </p>
              <p className="leading-normal gap-x-1 my-5 flex justify-center">
                <b>Tiqah Fondation &copy; 2023</b> | Created by
                <a
                  className="font-bold text-[--tiqah-gold]"
                  href="https://www.devhcm.com"
                  target="_blank"
                >
                  DEVHCM
                </a>
              </p>
        </footer>
    );
};