/* eslint-disable react/no-unescaped-entities */
import ItemContacts from "../component/ItemContacts";

export default function Homepage() {
  return (
    <section className="relative py-20 bg-indigo-200 container-xl">
      <div className="container flex my-3 ">
        <div className="w-1/2 gap-4 px-20 m-auto">
          <h1 className="text-3xl font-bold">Hello all👋, I'm Jacky Chen</h1>
          <h2 className="text-2xl font-medium ">Junior Fullstack JavaScript Developer</h2>
          <div className="my-5">
            <p>As a Fullstack Developer, I Specialize in building interactive and responsive website with a focus on user experience. on the backend, I create scallable API'S to effeciency handle server-side request. </p>
          </div>
          <p>Let's connect and collaborate!🚀</p>
          <div className="flex gap-4 mt-3 ">
            <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">View my CV</button>
            <button className="px-4 py-2 font-bold text-white rounded bg-sky-700 hover:bg-sky-400">See My Projects</button>
          </div>
        </div>
        <div className="w-1/2 p-20 m-3 ">
          <img src="/src/assets/IMG_4357.jpg" className="rounded-2xl" alt="FOTO" />
        </div>
      </div>
      <ItemContacts />
    </section>
  );
}
