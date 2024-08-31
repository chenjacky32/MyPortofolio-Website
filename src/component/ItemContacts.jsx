import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const ItemContact = [
  {
    name: "Linkedin",
    icon: <FaLinkedin size={32} />,
    url: "https://www.linkedin.com/in/jacky-chen-3b9a8b1b8/",
  },
  {
    name: "Phone",
    icon: <FaPhoneAlt size={32} />,
    url: "tel:+6281381592832",
  },
  {
    name: "Github",
    icon: <FaGithub size={32} />,
    url: "https://github.com/chenjacky32",
  },
  {
    name: "Email",
    icon: <CgMail size={32} />,
    url: "mailto:Chenjacky32@gmail.com",
  },
];

export default function ItemContacts() {
  return (
    <div className="fixed right-0 left-4 bottom-80 max-sm:right-7 max-sm:hidden">
      <div className="absolute right-0 flex flex-col gap-5 p-3 rounded-md w-fit bg-bg300/40">
        <ul className="flex flex-col gap-5 n">
          {ItemContact.map((item) => (
            <li key={item.name} className="font-bold duration-100 ease-in-out text-text100 hover:text-accent100">
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
