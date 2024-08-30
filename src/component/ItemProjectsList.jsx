/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
export default function ItemProjects(props) {
  const { name, description, date, techStack, repository, liveDemo } = props;
  return (
    <div className="flex gap-5 p-6 mb-8 text-justify shadow-xl rounded-xl w-fit bg-bg300/75">
      <img src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="project" className="rounded-xl h-[300px] w-full object-cover " />
      <div className="flex flex-col justify-between px-5 py-2 ">
        <div className="flex flex-col gap-5 p-5 ">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-text100">{name}</h2>
            <p className="w-1/3 text-lg font-extralight text-end h-fit text-text100">{date}</p>
          </div>
          <p className="my-5 text-xl font-medium text-justify text-text200">{description}</p>

          <ul className="flex gap-3 py-2">
            {techStack.map((item, index) => (
              <li key={index} className="p-2 font-medium rounded-sm shadow-md bg-bg200">
                #{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 px-5 py-3 font-semibold">
          <div>
            <a href={liveDemo} className="flex gap-3 p-3 m-auto rounded-full bg-text100 text-bg200 hover:bg-text200">
              Live Demo
              <span>
                <GrView size="30" />
              </span>
            </a>
          </div>
          <div>
            <a href={repository} className="flex gap-3 p-3 m-auto rounded-full bg-accent200 text-bg200 hover:bg-primary100">
              Repository
              <span>
                {" "}
                <FaGithub size="30" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
