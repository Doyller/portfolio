import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
    return (
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                style={{ filter: "opacity(1)" }}
                src="https://www.google.com/maps/embed/v1/place?q=St.+John's,+NL,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded">
                <div className="lg:w-1/2 px-6">
                  <h2 className=" text-white">
                    Located in
                  </h2>
                  <p className="mt-1 text-white">
                    St. John's <br></br>
                    Newfoundland
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className=" text-white">
                    EMAIL
                  </h2>
                  <p className="text-white leading-relaxed">
                    doyleisaac0@gmail.com or
                    isaac.doyle@keyin.com
                  </p>
                  <h2 className=" text-white mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-white">709-689-5468</p>
                  <h2 className=" text-white mt-4">
                    GitHub
                  </h2>
                  <p className="leading-relaxed text-white">You can find me as Doyller</p>
                </div>
              </div>
            </div>
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 text-center">
                Reach out!
              </h2>
              <p className="leading-relaxed mb-5 text-center">
                If you have any questions or feel like I'm a good candidate to fill a position, reach out
              </p>
              <div className="relative mb-4 text-center">
                <label htmlFor="name" className="  text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-black rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4 text-center">
                <label htmlFor="email" className=" text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-black rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4 text-center">
                <label
                  htmlFor="message"
                  className=" text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-black rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    }