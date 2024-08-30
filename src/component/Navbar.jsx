import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
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
  {
    name: <FaSun size={25} />,
    link: "/homepage",
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 p-6 mb-2 bg-primary100 container-xl">
      <div className="container flex justify-between text-bg200">
        <h1 className="text-4xl font-bold text-bg100">Portofolio.</h1>
        <ul className="flex items-center gap-6 ">
          {ItemNavbar.map((item, index) => (
            <li key={index} className="font-sans text-2xl font-semibold text-bg100 hover:text-bg100/60">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
