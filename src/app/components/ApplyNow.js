"use client";

export default function ApplyNow() {
  
  const handleClick = () => {
    let name = document.getElementById("name").value;
    let from = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let subject = "Tiqah Application : " + name;
    let to = "yassinelaaouane575@gmail.com";

    let encodedSubject = encodeURIComponent(subject);
    let encodedBody = encodeURIComponent(
      "Name: \b" + name + "\b\n" +
      "Email: " + from + "\n" +
      "Phone: " + phone + "\n" +
      "Message: " + message
    );
    let gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailComposeURL);
  };

  return (
    <section className="text-zinc-900 bg-[--tiqah-lightGold] border-b-4 border-b-[--tiqah-blue] py-10">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-3xl font-bold mb-5 text-[--tiqah-blue]">
            Apply Now
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get a <b>FREE consultation</b> with our agents to answer your questions and provide you with the informations you need {":)"}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" onSubmit={handleClick}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-[--tiqah-blue] focus:border-[--tiqah-gold] focus:bg-white focus:ring-2 focus:ring-[--tiqah-gold] text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-[--tiqah-blue] focus:border-[--tiqah-gold] focus:bg-white focus:ring-2 focus:ring-[--tiqah-gold] text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-white rounded border border-[--tiqah-blue] focus:border-[--tiqah-gold] focus:bg-white focus:ring-2 focus:ring-[--tiqah-gold] text-base outline-none text-zinc-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-[--tiqah-blue] focus:border-[--tiqah-gold] focus:bg-white focus:ring-2 focus:ring-[--tiqah-gold] h-32 text-base outline-none text-zinc-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="flex mt-5 p-2 w-full">
              <input type="submit" value="Send" className="w-full items-center mx-auto text-white font-medium bg-[--tiqah-blue] border-2 border-transparent py-2 px-8 rounded text-lg cursor-pointer focus:outline-none" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


