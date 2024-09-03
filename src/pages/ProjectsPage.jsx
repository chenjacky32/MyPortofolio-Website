/* eslint-disable react/jsx-no-duplicate-props */
import ItemProjectList from "../component/ItemProjectsList";
import ItemProjectGrid from "../component/ItemProjectGrid";
import ContainerProjectsGrid from "../component/ContainerProjectsGrid";
import { useState } from "react";
import { myProjects } from "../utils/utils";

import { IoList } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
export default function ProjectsPage() {
  const [toggleView, setToggleView] = useState("list");
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("keyword") || "");

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchParams({ keyword: value });
  };

  const filteredProjects = myProjects.filter((project) => {
    return (
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.date.toLowerCase().includes(search.toLowerCase()) ||
      project.techStack.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="py-20 container-xl max-sm:container-sm sm:container-sm bg-bg100 ">
      <div className="container flex flex-col px-20 py-10 my-3 max-sm:px-3">
        <h1 className="text-4xl font-bold text-start text-text100 sm:text-2xl max-sm:text-2xl lg:text-3xl max-sm:pl-4">My Projects</h1>
        <div className="flex justify-end gap-3">
          <div className="relative flex flex-col gap-4 p-4">
            <input type="text" placeholder="Search Here..." className="px-4 py-2 border-2 shadow-md rounded-xl border-bg300" value={search} onChange={handleChangeSearch} />
            <div className="flex justify-end gap-3">
              <button onClick={() => setToggleView("grid")} className={`px-4 py-1 sm:p-2 max-sm:p-2 font-bold text-white rounded hover:bg-sky-400 ${toggleView === "grid" ? "bg-accent100" : "bg-accent200"}`}>
                <FiGrid color="white" fontWeight="bold" size={20} />
              </button>
              <button onClick={() => setToggleView("list")} className={`px-4 py-1 sm:p-2 max-sm:p-2 font-bold text-white rounded  hover:bg-sky-400 ${toggleView === "list" ? "bg-accent100" : "bg-accent200"}`}>
                <IoList color="white" fontWeight="bold" size={20} />
              </button>
            </div>
          </div>
        </div>
        {toggleView === "grid" ? (
          <ContainerProjectsGrid>
            {filteredProjects.map((project) => (
              <ItemProjectGrid {...project} key={project.id} />
            ))}
          </ContainerProjectsGrid>
        ) : (
          <div className="w-full p-5 mx-auto md:px-0 max-sm:w-full sm:mx-auto max-sm:mx-auto ">
            {filteredProjects.map((item) => (
              <ItemProjectList key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
