/* eslint-disable react/prop-types */
export default function ItemProjectGrid(props) {
  const { name, description, date, techStack, repository, liveDemo } = props;
  return (
    <div className="max-w-md p-3 border-gray-200 rounded-lg shadow bg-sky-300">
      <img className="rounded-lg h-[300px] w-full object-cover" src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="" />
      <div className="p-5 text-justify ">
        <div className="flex flex-row-reverse items-baseline justify-between">
          <p className="text-sm font-extralight text-end h-fit">{date}</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </div>
        <p className="my-5 font-normal">{description}</p>
        <ul className="flex flex-wrap gap-3 py-2 font-extralight">
          {techStack.map((item, index) => (
            <li key={index} className="p-2 rounded-sm bg-slate-200">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 py-3 mt-8 font-bold">
          <a href={liveDemo} className="p-2 rounded-md bg-slate-300 hover:bg-green-600 ">
            Live Demo
          </a>
          <a href={repository} className="p-2 rounded-md bg-slate-300 hover:bg-green-600">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
