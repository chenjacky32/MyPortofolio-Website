export default function ItemProjects() {
  return (
    <div className="flex gap-5 p-6 mb-2 text-justify rounded-xl w-fit bg-slate-400">
      <img src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="project" className="rounded-xl h-[300px] w-full object-cover " />
      <div className="flex flex-col justify-between px-5 py-2 ">
        <div className="flex flex-col gap-5 p-5 ">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Name Project</h2>
            <p className="w-1/3 text-sm font-extralight text-end h-fit">Monday, 20 May 2022</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, nobis iste modi autem rerum, nostrum ea qui voluptatem animi magni impedit nam. Pariatur delectus voluptates quibusdam asperiores quaerat voluptatum.
          </p>
          <ul className="flex gap-3 py-2">
            <li className="p-2 rounded-sm bg-slate-200">React</li>
            <li className="p-2 rounded-sm bg-slate-200">Typescript</li>
            <li className="p-2 rounded-sm bg-slate-200">Axios</li>
            <li className="p-2 rounded-sm bg-slate-200">Tailwind</li>
            <li className="p-2 rounded-sm bg-slate-200">Shadcn UI</li>
          </ul>
        </div>
        <div className="flex gap-4 px-5 py-3 font-bold">
          <button className="p-2 rounded-md bg-slate-300 hover:bg-green-600">Live Demo</button>
          <button className="p-2 rounded-md bg-slate-300 hover:bg-green-600">Repository Project</button>
        </div>
      </div>
    </div>
  );
}
