import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useState } from "react";
const ItemNavbar = [
  {
    name: "Homepage",
    link: `/homepage`,
  },
  {
    name: "About",
    link: `/about`,
  },
  {
    name: "Skills",
    link: `/skills`,
  },
  {
    name: "Projects",
    link: `/projects`,
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <div className="fixed top-0 left-0 right-0 z-30 p-6 mb-2 bg-primary100">
      <div className="container flex flex-row justify-between container-xl text-bg200">
        <h1 className="font-bold sm:text-3xl lg:text-4xl max-sm:text-3xl text-bg100">Portofolio.</h1>
        <ul className="items-center w-auto gap-6 lg:flex sm:hidden max-sm:hidden">
          {ItemNavbar.map((item, index) => (
            <li key={index} className="font-sans text-2xl font-semibold text-bg100 hover:text-bg100/60">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className="font-sans text-2xl font-semibold text-bg100 hover:text-bg100/60" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaRegMoon size={25} /> : <FaSun size={25} />}
          </li>
        </ul>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
        </button>
      </div>
      <div className="container lg:hidden max-sm:container-sm">
        {isOpen && (
          <ul className="flex flex-col gap-2 py-3 font-semibold text-bg100 ">
            {ItemNavbar.map((item, index) => (
              <li key={index} className="hover:text-bg100/60 ">
                <Link to={item.link} className="sm:text-base max-sm:text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="font-sans text-2xl font-semibold text-bg100 hover:text-bg100/60" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FaRegMoon size={25} /> : <FaSun size={25} />}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
