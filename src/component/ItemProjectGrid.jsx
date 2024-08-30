/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

export default function ItemProjectGrid(props) {
  const { name, description, date, techStack, repository, liveDemo } = props;
  return (
    <div className="max-w-md p-3 border-gray-200 rounded-lg shadow bg-sky-300">
      <img className="rounded-lg h-[300px] w-full object-cover" src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="" />
      <div className="p-5 text-justify ">
        <div className="flex flex-row-reverse items-baseline justify-between">
          <p className="text-lg font-extralight text-end h-fit text-text100">{date}</p>
          <h5 className="mb-2 text-2xl font-bold text-text100">{name}</h5>
        </div>
        <p className="my-5 text-xl font-medium text-justify text-text200">{description}</p>
        <ul className="flex flex-wrap gap-3 py-2 font-extralight">
          {techStack.map((item, index) => (
            <li key={index} className="p-2 font-medium rounded-sm shadow-md bg-bg200">
              #{item}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 py-3 mt-8 font-bold">
          <div>
            <a href={liveDemo} className="flex gap-3 p-3 m-auto rounded-full bg-text100 text-bg200 hover:bg-text200">
              Live Demo
              <span>
                <GrView size="20" />
              </span>
            </a>
          </div>
          <div>
            <a href={repository} className="flex gap-3 p-3 m-auto rounded-full bg-accent200 text-bg200 hover:bg-primary100">
              Repository
              <span>
                {" "}
                <FaGithub size="20" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
