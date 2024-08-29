export default function ItemProjectGrid() {
  return (
    <div className="max-w-md p-3 border-gray-200 rounded-lg shadow bg-sky-300">
      <img className="rounded-lg h-[300px] w-full object-cover" src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="" />
      <div className="p-5 text-justify ">
        <div className="flex flex-row-reverse items-baseline justify-between">
          <p className="text-sm font-extralight text-end h-fit">Monday, 20 May 2022</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Name Project</h5>
        </div>
        <p className="my-5 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem, nobis iste modi autem rerum, nostrum ea qui voluptatem animi magni impedit nam. Pariatur delectus voluptates quibusdam asperiores quaerat voluptatum.
        </p>
        <ul className="flex flex-wrap gap-3 py-2 font-extralight">
          <li className="p-2 rounded-sm bg-slate-200">React</li>
          <li className="p-2 rounded-sm bg-slate-200">Typescript</li>
          <li className="p-2 rounded-sm bg-slate-200">Axios</li>
          <li className="p-2 rounded-sm bg-slate-200">Tailwind</li>
          <li className="p-2 rounded-sm bg-slate-200">Shadcn UI</li>
        </ul>
        <div className="flex gap-4 py-3 mt-8 font-bold">
          <button className="p-2 rounded-md bg-slate-300 hover:bg-green-600 ">Live Demo</button>
          <button className="p-2 rounded-md bg-slate-300 hover:bg-green-600">Repository Project</button>
        </div>
      </div>
    </div>
  );
}
