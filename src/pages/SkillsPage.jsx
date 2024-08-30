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
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex flex-col px-20 py-24 my-3 ">
        <h1 className="text-4xl font-bold text-start text-text100">My skills</h1>
        <div className="grid gap-3 p-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center h-fit ">
          {ItemSkills.map((item, index) => (
            <div
              key={index}
              className="flex-row flex-1 gap-4 p-5 m-5 text-center duration-300 delay-150 translate-x-3 border-double shadow-lg rounded-xl max-w-fit card justify-items-center transition-ease-in-out hover:-translate-y-1 hover:scale-125"
            >
              <img src={item.img} alt={item.name} />
              <div className="flex flex-col gap-3 m-auto">
                <h3 className="text-2xl font-bold text-text100">{item.name}</h3>
                <p className="text-xl font-normal text-text200">{item.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
