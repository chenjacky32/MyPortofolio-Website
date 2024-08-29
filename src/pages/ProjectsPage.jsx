import ItemProjectList from "../component/ItemProjectsList";
import ItemProjectGrid from "../component/ItemProjectGrid";
import ContainerProjectsGrid from "../component/ContainerProjectsGrid";
import { IoGridOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { useState } from "react";
export default function ProjectsPage() {
  const [toggleView, setToggleView] = useState("grid");
  return (
    <section className="py-20 container-xl">
      <div className="container flex flex-col gap-5 px-10 py-24 my-3 bg-red-300">
        <h1 className="text-3xl font-bold text-start">My Projects</h1>
        <div className="flex justify-end gap-3 ">
          <div className="flex flex-col w-1/3 gap-4 px-2 py-4 ">
            <input type="text" placeholder="Search Here" className="px-4 py-2 border-4 rounded-full border-slate-500" />
            <div className="flex justify-end gap-3">
              <button onClick={() => setToggleView("grid")} className={`px-4 py-2 font-bold text-white rounded hover:bg-sky-400 ${toggleView === "grid" ? "bg-blue-600" : "bg-sky-800"}`}>
                <IoGridOutline />
              </button>
              <button onClick={() => setToggleView("list")} className={`px-4 py-2 font-bold text-white rounded  hover:bg-sky-400 ${toggleView === "list" ? "bg-blue-600" : "bg-sky-800"}`}>
                <IoIosList />
              </button>
              {toggleView}
            </div>
          </div>
        </div>
        {toggleView === "grid" ? (
          <ContainerProjectsGrid>
            <ItemProjectGrid />
            <ItemProjectGrid />
            <ItemProjectGrid />
            <ItemProjectGrid />
            <ItemProjectGrid />
            <ItemProjectGrid />
          </ContainerProjectsGrid>
        ) : (
          <div className="p-5 bg-green-600 min-w-fit">
            <ItemProjectList />
            <ItemProjectList />
            <ItemProjectList />
          </div>
        )}
      </div>
    </section>
  );
}
