/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
export default function ItemProjects(props) {
  const { name, description, date, techStack, repository, liveDemo } = props;
  return (
    <div className="flex w-full gap-5 p-6 mb-8 text-justify shadow-xl rounded-xl bg-bg300/50 md:flex-row sm:flex-col max-sm:flex-col">
      <img src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="project" className="rounded-xl w-80 object-cover sm:h-[200px] sm:w-full object-center max-sm:h-[200px] max-sm:w-full md:h-[350px] md:w-48 lg:h-[410px] lg:w-72" />
      <div className="flex flex-col justify-between py-2">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between sm:flex-col max-sm:flex-col sm:items-start max-sm:items-start md:flex-row">
            <h2 className="text-2xl font-bold text-text100 lg:text-2xl sm:text-xl max-sm:text-xl sm:text-start max-sm:text-start">{name}</h2>
            <p className="w-1/3 text-lg lg:text-lg font-extralight lg:w-1/4 text-end h-fit text-text100 sm:text-sm max-sm:text-sm sm:text-start max-sm:text-start md:w-full md:text-end max-sm:w-full">{date}</p>
          </div>
          <p className="my-8 text-xl font-medium text-justify text-text200 sm:text-base max-sm:text-base lg:text-lg">{description}</p>

          <ul className="flex gap-3 py-2 my-2 sm:flex sm:flex-wrap max-sm:flex-wrap ">
            {techStack.map((item, index) => (
              <li key={index} className="p-2 font-semibold rounded-sm shadow-md bg-bg200 sm:text-based max-sm:text-based">
                #{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 py-3 font-semibold sm:flex-col max-sm:flex-col">
          <div>
            <a href={liveDemo} className="flex gap-3 p-3 m-auto font-bold rounded-full sm:text-sm max-sm:text-xs sm:justify-center max-sm:justify-center bg-text100 text-bg200 hover:bg-text200 max-sm:p-2 lg:text-lg ">
              Live Demo
              <span>
                <GrView size="25" />
              </span>
            </a>
          </div>
          <div>
            <a href={repository} className="flex gap-3 p-3 m-auto font-bold rounded-full sm:text-sm max-sm:text-xs sm:justify-center max-sm:justify-center bg-accent200 text-bg200 hover:bg-primary100 max-sm:p-2 lg:text-lg ">
              Repository
              <span>
                {" "}
                <FaGithub size="25" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
