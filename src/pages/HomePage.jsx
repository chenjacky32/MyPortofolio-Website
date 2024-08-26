/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const ItemContact = [
  {
    name: "Linkedin",
    icon: <FaLinkedin size={25} />,
    url: "https://www.linkedin.com/in/jacky-chen-3b9a8b1b8/",
  },
  {
    name: "Phone",
    icon: <FaPhoneAlt size={25} />,
    url: "tel:+6281234567890",
  },
  {
    name: "Github",
    icon: <FaGithub size={25} />,
    url: "https://github.com/jacky-chen",
  },
  {
    name: "Email",
    icon: <CgMail size={25} />,
    url: "mailto:Chenjacky32@gmail",
  },
];

export default function Homepage() {
  return (
    <section className="relative pb-20 bg-indigo-200 rounded-xl container-xl ">
      <div className="container flex bg-indigo-50">
        <div className="w-1/2 gap-4 px-20 m-auto">
          <h1 className="text-3xl font-bold">Hello all👋, I'm Jacky Chen</h1>
          <h2 className="text-2xl font-medium ">Junior Fullstack JavaScript Developer</h2>
          <div className="my-5">
            <p>As a Fullstack Developer, I Specialize in building interactive and responsive website with a focus on user experience. on the backend, I create scallable API'S to effeciency handle server-side request. </p>
          </div>
          <p>Let's connect and collaborate!🚀</p>
          <div className="flex gap-4 mt-3 ">
            <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">View my CV</button>
            <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">See My Projects</button>
          </div>
        </div>
        <div className="w-1/2 p-20 m-3 ">
          <img src="/src/assets/IMG_4357.jpg" className="rounded-2xl" alt="FOTO" />
        </div>
      </div>
      <div className="relative right-0 left-4 bottom-80">
        <div className="absolute flex flex-col gap-5 p-3 rounded-full bg-zinc-300 w-fit right-5">
          {ItemContact.map((item) => (
            <ul key={item.name} className="text-3xl font-bold">
              <li className="text-3xl font-bold">
                <a href={item.url}>{item.icon}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
