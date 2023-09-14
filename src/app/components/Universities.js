export default function Universities() {
  return (
    <div className="flex items-center justify-center py-10 border-b-4 border-b-[--tiqah-gold]">
      <div className="container">
        <div className="bg-white rounded-lg my-11 p-5 md:p-20 mx-2 shadow-lg shadow-zinc-200">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight my-10 leading-10 font-extrabold text-[--tiqah-blue] sm:text-5xl sm:leading-none md:text-6xl">
              Tiqah <span className="text-[--tiqah-gold]">Fondation</span>
            </h2>
            <h3 className="text-xl md:text-3xl my-10 text-[--tiqah-lightBlue] font-semibold py-4 px-10 border-4 rounded-xl border-[--tiqah-lightBlue] shadow-md">
              {"> "}Coming Soon{" <"}
            </h3>
            <p className="text-md md:text-xl my-10">
              <span className="font-medium">The list of Universities{"'"} page </span> is
              still under construction.
              <span className="ml-2 border-b-8 border-rose-400">
                Please check back later !
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
