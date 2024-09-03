import { ItemSkills } from "../utils/utils";

export default function SkillsPage() {
  return (
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex flex-col px-20 py-10 my-3 ">
        <h1 className="text-4xl font-bold text-start sm:text-2xl max-sm:text-2xl text-text100 lg:text-3xl">My skills</h1>
        <div className="grid gap-3 p-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center h-fit ">
          {ItemSkills.map((item, index) => (
            <div
              key={index}
              className="flex-row flex-1 gap-4 p-5 m-5 text-center duration-300 delay-150 translate-x-3 border-double shadow-lg rounded-xl max-w-fit card justify-items-center transition-ease-in-out hover:-translate-y-1 hover:scale-125"
            >
              <img src={item.img} alt={item.name} />
              <div className="flex flex-col gap-3 m-auto">
                <h3 className="text-2xl font-bold text-text100 sm:text-base max-sm:text-base md:text-xl">{item.name}</h3>
                <p className="text-xl font-normal text-text200 lg:text-xl m sm:text-base max-sm:text-base">{item.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
