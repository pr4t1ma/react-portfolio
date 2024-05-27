import { FeaturedProject } from "../FeaturedProject/FeaturedProject";
import { Heading } from "../Heading/Heading";
import { Intro } from "../Intro/Intro";
import { Project } from "../Project/Project";
import { TabbedPanels } from "../TabbedPanels/TabbedPanels";

export const Home = () => {
  return (
    <div>
      <Intro />
      <div>
        <Heading text="My Skills" />
        <TabbedPanels />
        <Heading text="My featured Projects" />
        <FeaturedProject />
        <div className="Projects container  mx-auto grid gap-3 grid-cols-1  my-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:my-10">
          <Project
            title="portfolio project"
            text="This project was created to enhance my skills in HTML, CSS, and
          JavaScript. By working on this project, I aimed to deepen my
          understanding of front-end web development concepts and techniques.
          Throughout the process, I gained valuable experience in structuring
          web pages, styling elements with CSS, and implementing interactive
          features using JavaScript"
          />
          <Project
            title="Bundesplatz kino"
            text="Bundesplatz Kino is a local cinema hall .Their target audience is  local residents .
             I designed this website with a focus on user experience and utilizing
               React and Tailwind CSS for development.
            "
          />
          <Project
            title="Reuse Record"
            text="The project received valuable support from Baukreisel,
             providing expert knowledge and testing. My contribution involved
              developing the project using React with Tailwind CSS. Additionally,
               I expanded my skills by learning React Native Expo to create a mobile 
               app in response to project requirements."
          />
        </div>
        <div className="container mx-auto place-items-center w-fit block mb-20 shadow-2xl shadow-gray">
          <a className="button" href="/">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};
