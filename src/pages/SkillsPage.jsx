const ItemSkills = [
  {
    name: "HTML",
    img: "/src/assets/html.svg",
    level: "Advanced",
  },
  {
    name: "CSS",
    img: "/src/assets/css.svg",
    level: "Advanced",
  },
  {
    name: "Javascript",
    img: "/src/assets/javascript.svg",
    level: "Intermediate",
  },
  {
    name: "Typescript",
    img: "/src/assets/typescript.svg",
    level: "Intermediate",
  },
  {
    name: "React",
    img: "/src/assets/reactjs.svg",
    level: "Advanced",
  },
  {
    name: "Node.js",
    img: "/src/assets/nodejs.svg",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    img: "/src/assets/express.svg",
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    img: "/src/assets/tailwind.svg",
    level: "Intermediate",
  },
  {
    name: "Mysql",
    img: "/src/assets/mysql.svg",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    img: "/src/assets/postgresql.svg",
    level: "Intermediate",
  },
  {
    name: "Prisma",
    img: "/src/assets/prisma.svg",
    level: "Intermediate",
  },
  {
    name: "Redux",
    img: "/src/assets/redux.svg",
    level: "Intermediate",
  },
];

export default function Skillspage() {
  return (
    <section className="py-20 container-xl">
      <div className="container flex flex-col px-20 py-24 my-3 bg-red-300">
        <h1 className="text-3xl font-bold text-center">My skills</h1>
        <div className="grid gap-3 p-5 mx-auto xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center h-fit">
          {ItemSkills.map((item, index) => (
            <div key={index} className="flex-row flex-1 gap-4 p-5 m-5 text-center border-4 border-solid rounded-lg border-slate-400 max-w-fit card justify-items-center">
              <img src={item.img} alt={item.name} />
              <div className="flex flex-col gap-3 m-auto">
                <h3 className="text-2xl font-bold ">{item.name}</h3>
                <p className="text-xl">{item.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
