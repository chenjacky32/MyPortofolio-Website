import AboutPhoto from "../assets/mikhail-fesenko-p6YWrjhmjhM-unsplash.jpg";
export default function AboutPage() {
  return (
    <section className="py-20 container-xl bg-bg100">
      <div className="container flex my-3 sm:flex-col ">
        <div className="flex flex-col px-20 py-10">
          <h1 className="order-1 text-4xl font-bold sm:text-2xl max-sm:text-2xl text-text100 lg:text-3xl ">About Me</h1>
          <p className="order-3 my-5 text-xl text-justify sm:leading-6 max-sm:leading-6 lg:leading-8 lg:text-xl sm:font-medium text-text200 sm:text-sm max-sm:text-sm md:text-base">
            I am a recent graduate in Information Systems from Institut Bisnis & Teknologi Pelita Indonesia with a strong passion for web development. My 3-year experience as a marketing staff at CV. Teknik Steel Pekanbaru honed my
            communication and decision-making skills. I am skilled in HTML, CSS, JavaScript, and various libraries like React and Redux, as well as backend technologies like Hapi.js and Express.js. Additionally, I am proficient in team
            collaboration using Git/GitHub, gained from the Dicoding Bootcamp.
          </p>
          <div className="order-2 py-5 ">
            <img src={AboutPhoto} alt="foto" className="object-cover h-full shadow-2xl sm:h-96 sm:w-full max-sm:h-72 max-sm:w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
