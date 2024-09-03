/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

export default function ItemProjectGrid(props) {
  const { name, description, date, img, techStack, repository, liveDemo } = props;
  return (
    <div className="flex flex-col p-3 border-gray-200 rounded-lg shadow-lg bg-bg300/75">
      <img className="object-center shadow-md w-full rounded-lg sm:h-[200px] max-sm:h-[200px]" src={img} alt="" />
      <div className="flex flex-col p-2 text-justify grow">
        <div className="flex flex-row-reverse items-baseline justify-between flex-initial mb-4 basis-1/4 sm:flex-col-reverse md:flex-col-reverse max-sm:flex-col-reverse">
          <p className="text-lg basis-1/2 font-extralight lg:text-lg text-end text-text100 max-sm:w-full sm:text-sm max-sm:text-sm sm:text-start max-sm:text-start">{date}</p>
          <h2 className="mb-2 text-2xl font-bold basis-1/2 lg:text-2xl text-text100 sm:text-xl max-sm:text-xl sm:text-start max-sm:text-start">{name}</h2>
        </div>
        <p className="mb-8 text-lg font-medium text-justify lg:text-xl basis-1/2 text-text200 sm:text-base max-sm:text-base">{description}</p>
        <ul className="flex flex-wrap gap-3 py-2 font-extralight basis-1/4">
          {techStack.map((item, index) => (
            <li key={index} className="p-2 font-semibold rounded-sm shadow-md h-fit bg-bg200 sm:text-base max-sm:text-base">
              #{item}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 py-3 font-semibold basis-1/4 sm:flex-col max-sm:flex-col sm:mt-5 max-sm:mt-5">
          <div>
            <a href={liveDemo} className="flex gap-3 p-3 m-auto font-bold rounded-full sm:justify-center max-sm:justify-center sm:text-sm max-sm:text-xs bg-text100 text-bg200 hover:bg-text200 max-sm:p-2 md:items-center lg:text-lg sm:p-2 ">
              Live Demo
              <span>
                <GrView size="20" />
              </span>
            </a>
          </div>
          <div>
            <a
              href={repository}
              className="flex gap-3 p-3 m-auto font-bold rounded-full sm:text-sm max-sm:text-xs sm:justify-center max-sm:justify-center bg-accent200 text-bg200 hover:bg-primary100 max-sm:p-2 lg:text-lg sm:p-2 md:items-center"
            >
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
