import ItemProjectList from "../component/ItemProjectsList";
import ItemProjectGrid from "../component/ItemProjectGrid";
import ContainerProjectsGrid from "../component/ContainerProjectsGrid";
import { IoGridOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
export default function ProjectsPage() {
  return (
    <section className="py-20 container-xl">
      <div className="container flex flex-col gap-5 px-10 py-24 my-3 bg-red-300">
        <h1 className="text-3xl font-bold text-start">My Projects</h1>
        <div className="flex justify-end gap-3 ">
          <div className="flex flex-col w-1/3 gap-4 px-2 py-4 ">
            <input type="text" placeholder="Search Here" className="px-4 py-2 border-4 rounded-full border-slate-500" />
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">
                <IoIosList />
              </button>
              <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">
                <IoGridOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 bg-green-600 min-w-fit">
          <ItemProjectList />
          <ItemProjectList />
          <ItemProjectList />
        </div>
        <ContainerProjectsGrid>
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
          <ItemProjectGrid />
        </ContainerProjectsGrid>
      </div>
    </section>
  );
}
