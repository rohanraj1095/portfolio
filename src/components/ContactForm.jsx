import React from "react";
import ContactImg from "../assets/contact.png";

const ContactForm = () => {
  return (
    <div name="contact" className="w-full md:h-full bg-gradient-to-b from-black to-[#1e293b] p-4 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full md:pt-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <img src={ContactImg} alt="img" className="rounded-2xl mx-auto" />
          </div>
          <div className="pt-10 md:pt-0 font-heroFont md:flex md:justify-center md:items-center">
        <div>
            <div className="pb-10 text-4xl text-sky-500">
                Lets Talk.
            </div>
            <div className="">
              <form class="mb-6 md:grid">
                <div className="md:grid md:grid-cols-2">
                <div class="mb-6 md:pr-1">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-sky-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div class="mb-6 pl-1">
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-sky-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                </div>
                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-sky-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-sky-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                >
                  Send message
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
