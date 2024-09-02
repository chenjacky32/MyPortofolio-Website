/* eslint-disable react/no-unescaped-entities */
import InputMessage from "../component/InputMessage";
import { contactInfo, followMeOn } from "../utils/utils";

export default function ContactPage() {
  return (
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex flex-col px-20 py-10 my-3 max-sm:px-10">
        <h1 className="text-4xl font-bold text-start text-text100 sm:text-2xl max-sm:text-2xl lg:text-3xl">Contact us</h1>
        <p className="mt-4 text-xl font-medium text-text200 sm:leading-6 max-sm:leading-6 lg:leading-8 lg:text-xl sm:font-medium sm:text-base max-sm:text-base md:text-base">
          Let's Collaborate and work together feel free to reach out for any projects inquires or collaboration 🚀 .
        </p>
        <div className="mt-12 overflow-hidden rounded-lg shadow-lg bg-bg300/75 ">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-text100 lg:text-2xl sm:text-xl max-sm:text-xl">Send me a message</h3>
                <form action="#" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <InputMessage name="Your name" id="" placeholder="Your name" type="text" />
                    <InputMessage name="Your email" id="" placeholder="Your email" type="email" />
                    <InputMessage name="Phone number" id="" placeholder="Your Phone number" type="text" />
                    <InputMessage name="Company name" id="" placeholder="Company name" type="text" />
                    <div className="sm:col-span-2 ">
                      <label htmlFor="" className="text-lg font-medium text-text100 lg:text-lg sm:text-sm max-sm:text-sm">
                        Message
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md shadow-md resize-y lg:p-4 max-sm:p-2 sm:p-2 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-lg font-bold transition-all duration-200 border-2 border-solid rounded-md lg:text-lg sm:text-sm max-sm:text-sm max-sm:p-1 sm:p-1 text-bg100 bg-accent200 focus:outline-none hover:bg-accent100 focus:bg-accent100"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-gray-100 lg:col-span-2">
              <div className="h-full p-6 sm:p-10">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-2xl font-semibold text-text100 lg:text-2xl sm:text-xl max-sm:text-xl">Contact info</h4>
                    <div className="mt-8 space-y-7 sm:space-y-3 max-sm:space-y-3 ">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start">
                          {item.icon}
                          <span className="block ml-3 text-lg text-text100 sm:text-sm max-sm:text-sm lg:text-lg">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-auto">
                    <hr className="border-gray-200" />
                    <div className="flex items-center justify-between mt-7 max-sm:flex-col max-sm:gap-4">
                      <p className="text-lg font-semibold basis-1/2 text-text100 lg:text-lg sm:text-md max-sm:text-md">Follow me on</p>
                      <ul className="flex items-center justify-end space-x-3 basis-1/2">
                        {followMeOn.map((item) => (
                          <li key={item.id}>
                            <a
                              href={item.link}
                              className="flex items-center justify-center w-10 h-10 transition-all duration-200 bg-transparent border rounded-full max-sm:w-8 max-sm:h-8 border-text100 text-text100 focus:bg-primary200 hover:text-bg100 focus:text-bg100 hover:bg-primary200 hover:border-primary200 focus:border-primary200"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.icon}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
