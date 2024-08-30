/* eslint-disable react/no-unescaped-entities */
import ItemContacts from "../component/ItemContacts";

export default function Homepage() {
  return (
    <section className="relative py-20 container-xl bg-bg100">
      <div className="container flex my-3">
        <div className="w-1/2 gap-4 px-20 m-auto">
          <h1 className="text-4xl font-bold text-text100">Hello all👋, I'm Jacky Chen</h1>
          <div className="my-5">
            <h2 className="my-3 text-2xl font-semibold text-text100 ">Junior Fullstack JavaScript Developer</h2>
            <p className="text-xl font-medium text-justify text-text200">
              As a Fullstack Developer, I Specialize in building interactive and responsive website with a focus on user experience. on the backend, I create scallable API'S to effeciency handle server-side request.{" "}
            </p>
          </div>
          <p className="text-2xl font-bold text-text100">Let's connect and collaborate!🚀</p>
          <div className="flex gap-4 mt-3 ">
            <button className="px-4 py-2 font-bold rounded text-bg200 bg-accent200 hover:bg-accent100">View my CV</button>
            <button className="px-4 py-2 font-bold rounded text-bg200 bg-accent200 hover:bg-accent100">See My Projects</button>
          </div>
        </div>
        <div className="w-1/2 p-20 m-3 ">
          <img src="/src/assets/IMG_4357.jpg" className="rounded-3xl" alt="FOTO" />
        </div>
      </div>
      <ItemContacts />
    </section>
  );
}
