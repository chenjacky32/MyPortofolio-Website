/* eslint-disable react/jsx-no-duplicate-props */
import ItemProjectList from "../component/ItemProjectsList";
import ItemProjectGrid from "../component/ItemProjectGrid";
import ContainerProjectsGrid from "../component/ContainerProjectsGrid";
import { useState } from "react";
import { myProjects } from "../utils/utils";

import { IoList } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
export default function ProjectsPage() {
  const [toggleView, setToggleView] = useState("list");
  return (
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex flex-col px-20 py-10 my-3">
        <h1 className="text-4xl font-bold text-start text-text100">My Projects</h1>
        <div className="flex justify-end gap-3 ">
          <div className="flex flex-col w-1/3 gap-4 px-2 py-4 ">
            <input type="text" placeholder="Search Here..." className="px-4 py-2 border-2 shadow-md rounded-xl border-bg300" />
            <div className="flex justify-end gap-3">
              <button onClick={() => setToggleView("grid")} className={`px-4 py-2 font-bold text-white rounded hover:bg-sky-400 ${toggleView === "grid" ? "bg-accent100" : "bg-accent200"}`}>
                <FiGrid color="white" fontWeight="bold" size={20} />
              </button>
              <button onClick={() => setToggleView("list")} className={`px-4 py-2 font-bold text-white rounded  hover:bg-sky-400 ${toggleView === "list" ? "bg-accent100" : "bg-accent200"}`}>
                <IoList color="white" fontWeight="bold" size={20} />
              </button>
            </div>
          </div>
        </div>
        {toggleView === "grid" ? (
          <ContainerProjectsGrid>
            {myProjects.map((project) => (
              <ItemProjectGrid {...project} key={project.id} />
            ))}
          </ContainerProjectsGrid>
        ) : (
          <div className="p-5 min-w-fit">
            {myProjects.map((item) => (
              <ItemProjectList key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
