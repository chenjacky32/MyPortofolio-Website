import ItemContacts from "../component/ItemContacts";

export default function AboutPage() {
  return (
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex my-3 bg-bg200">
        <div className="flex-col w-3/4 px-20 py-24">
          <h1 className="text-4xl font-bold text-text100">About Me</h1>
          <p className="my-5 text-xl font-medium leading-8 text-justify text-text200">
            I am a recent graduate in Information Systems from Institut Bisnis & Teknologi Pelita Indonesia with a strong passion for web development. My 3-year experience as a marketing staff at CV. Teknik Steel Pekanbaru honed my
            communication and decision-making skills. I am skilled in HTML, CSS, JavaScript, and various libraries like React and Redux, as well as backend technologies like Hapi.js and Express.js. Additionally, I am proficient in team
            collaboration using Git/GitHub, gained from the Dicoding Bootcamp.
          </p>
        </div>
        <div className="flex justify-end w-1/2 p-20 ">
          <img src="/src/assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg" alt="foto" className="w-full h-3/4 rounded-3xl" />
        </div>
      </div>
      <ItemContacts />
    </section>
  );
}
