/* eslint-disable react/no-unescaped-entities */
import ItemContacts from "../component/ItemContacts";
import { Link } from "react-router-dom";
import PersonalPhoto from "../assets/IMG_4357.jpg";

export default function Homepage() {
  return (
    <section className="py-20 container-l">
      <div className="container flex my-3 lg:flex-row sm:flex-col-reverse max-sm:flex-col-reverse sm:py-5 max-sm:py-5 max-sm:content-center sm:content-center lg:my-10 ">
        <div className="w-1/2 gap-4 px-20 m-auto sm:w-full max-sm:w-full">
          <h1 className="text-4xl font-bold lg:text-3xl text-text100 sm:text-2xl max-sm:text-xl">Hello all👋, I'm Jacky Chen</h1>
          <div className="my-5">
            <h2 className="my-2 text-4xl font-semibold md:text-xl text-text100 sm:text-base max-sm:text-base">Junior Fullstack JavaScript Developer</h2>
            <p className="w-full text-3xl font-medium text-justify text-text200 sm:text-sm max-sm:text-sm md:text-base">
              As a Fullstack Developer, I Specialize in building interactive and responsive website with a focus on user experience. on the backend, I create scallable API'S to effeciency handle server-side request.{" "}
            </p>
          </div>
          <p className="text-2xl font-bold text-text100 sm:text-base max-sm:text-base md:text-xl ">Let's connect and collaborate!🚀</p>
          <div className="flex gap-4 mt-3 ">
            <a href="https://drive.google.com/file/d/1IU5K0Xpt3kEDCLFokSCO8j3YJQj80gP8/view?usp=sharing" className="font-bold rounded md:py-2 md:px-4 sm:text-sm sm:p-2 max-sm:text-xs max-sm:p-2 text-bg200 bg-accent200 hover:bg-accent100 ">
              View my CV
            </a>
            <Link to="/projects" className="font-bold rounded md:py-2 md:px-4 sm:text-sm sm:p-2 max-sm:text-xs max-sm:p-2 text-bg200 bg-text100 hover:bg-text200">
              See My Projects
            </Link>
          </div>
        </div>
        <div className="w-1/2 m-3 sm:w-full max-sm:w-full sm:px-5 sm:py-3 sm:flex sm:justify-center max-sm:flex max-sm:justify-center max-sm:px-5 max-sm:py-3">
          <img src={PersonalPhoto} className="object-cover h-full shadow-md rounded-3xl sm:object-cover sm:h-52 max-sm:h-52 lg:h-full" alt="FOTO" />
        </div>
      </div>
      <ItemContacts />
    </section>
  );
}
