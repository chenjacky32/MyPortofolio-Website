/* eslint-disable react/prop-types */
import { GrView } from "react-icons/gr";
export default function ItemProjects(props) {
  const { name, description, date, techStack, repository, liveDemo } = props;
  return (
    <div className="flex gap-5 p-6 mb-2 text-justify rounded-xl w-fit bg-slate-400">
      <img src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="project" className="rounded-xl h-[300px] w-full object-cover " />
      <div className="flex flex-col justify-between px-5 py-2 ">
        <div className="flex flex-col gap-5 p-5 ">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="w-1/3 text-sm font-extralight text-end h-fit">{date}</p>
          </div>
          <p>{description}</p>

          <ul className="flex gap-3 py-2">
            {techStack.map((item, index) => (
              <li key={index} className="p-2 rounded-sm bg-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 px-5 py-3 font-bold">
          <a href={liveDemo} className="p-2 rounded-md bg-slate-300 hover:bg-green-600 ">
            Live Demo <GrView />
          </a>
          <a href={repository} className="p-2 rounded-md bg-slate-300 hover:bg-green-600">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
