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

export default function ItemContacts() {
  return (
    <div className="fixed right-0 left-4 bottom-80">
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
  );
}
