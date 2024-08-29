/* eslint-disable react/no-unescaped-entities */
import InputMessage from "../component/InputMessage";
import { contactInfo, followMeOn } from "../utils/utils";

export default function ContactPage() {
  return (
    <section className="py-20 container-xl ">
      <div className="container px-10 py-24 mx-auto my-3 bg-emerald-400 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto mt-12 lg:mt-20">
          <h2 className="text-3xl font-bold leading-tight text-black-300 sm:text-4xl lg:text-5xl">Contact us</h2>
          <p className="max-w-xl mt-4 text-2xl leading-relaxed text-black-500">Let's Collaborate and work together feel free to reach out for any projects inquires or collaboration</p>
        </div>
        <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-semibold text-black">Send me a message</h3>
                <form action="#" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <InputMessage name="Your name" id="" placeholder="Your name" type="text" />
                    <InputMessage name="Your email" id="" placeholder="Your email" type="email" />
                    <InputMessage name="Phone number" id="" placeholder="Your Phone number" type="text" />
                    <InputMessage name="Company name" id="" placeholder="Company name" type="text" />
                    <div className="sm:col-span-2">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        Message
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
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
                    <h4 className="text-2xl font-semibold text-black">Contact info</h4>
                    <div className="mt-8 space-y-7">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start">
                          {item.icon}
                          <span className="block ml-3 text-gray-900 text-md">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-auto">
                    <hr className="border-gray-200" />
                    <div className="flex items-center justify-between mt-7">
                      <p className="text-lg font-semibold text-black">Follow me on</p>
                      <ul className="flex items-center justify-end space-x-3 ">
                        {followMeOn.map((item) => (
                          <li key={item.id}>
                            <a
                              href={item.link}
                              className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full h-7 w-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
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
