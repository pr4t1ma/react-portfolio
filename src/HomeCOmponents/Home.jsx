// import { FeaturedProject } from "../FeaturedProject/FeaturedProject";
import { Heading } from "../Heading/Heading";
import { Intro } from "../Intro/Intro";
import { Project } from "../Project/Project";
// import Shoppinglist from "../Shoppinglist/Shoppinglist";
import { TabbedPanels } from "../TabbedPanels/TabbedPanels";

export const Home = () => {
  return (
    <div>
      <Intro />
      <div>
        <Heading text="My Skills" />
        <TabbedPanels />
        <Heading text="My featured Projects" />
        {/* <FeaturedProject /> */}
        <div className="Projects container  mx-auto grid gap-3 grid-cols-1  my-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:my-10">
          <Project
            img={"/images/bundes-01.png"}
            title="Bundesplatz kino"
            web="https://pr4t1ma.github.io/bundesplatz-kino/#/"
            webflow="/"
            github="https://github.com/pr4t1ma/bundesplatz-kino"
            figma="https://www.figma.com/proto/TEZivjw1eL9fvCDt5Sdltq/Bundesplatz-Kino-Berlin?node-id=900-5151&t=K3cH3NJaEn9U4BUw-1&scaling=min-zoom&content-scaling=fixed&page-id=271%3A726&starting-point-node-id=900%3A6693"
            text="Bundesplatz Kino is a local cinema targeting nearby residents. I redesigned their website with a focus on providing the best user experience. I conducted research, user interviews, and user testing to identify pain points and addressed these issues in the new design.
            "
          />
          <Project
            img={
              "https://techlabs-community.slack.com/files/U059XU3UWCE/F06T8LBV42G/configurator.mov"
            }
            title="Reuse Record"
            github="https://github.com/TechLabs-Berlin/ws24-reuse-record"
            text="The project received valuable support from Baukreisel,
             providing expert knowledge and testing. My contribution involved
              developing the project using React with Tailwind CSS. Additionally,
               I expanded my skills by learning React Native Expo to create a mobile 
               app in response to project requirements."
          />

          {/* <Project
            img={"./images/Bundes1.png"}
            title="Bundesplatz kino"
            github="https://github.com/pr4t1ma/bundesplatz-kino"
            text="To build this website, I utilized the latest technologies, specifically React.js for efficient and dynamic front-end development and Tailwind CSS for streamlined and responsive design. By combining these powerful tools, I was able to create a modern, user-friendly interface that meets the needs of Bundesplatz Kino's audience
            "
          /> */}

          <Project
            img={"./images/brlinbites.png"}
            title="Berlin bites"
            figma="https://www.figma.com/proto/IVBX8yWlBTr5jAuJU99CRT/Wireframe?node-id=480-23769&t=fb3oAlZFBfsLMSRi-1&scaling=min-zoom&content-scaling=fixed&page-id=143%3A29354&starting-point-node-id=143%3A31615"
            text="The problem we aim to solve with this website is helping users find the best restaurants in Berlin. Berlin Bites is an AI-driven restaurant recommender that analyzes user reviews to deliver personalized dining suggestions"
          />
          <Project
            img={"./images/Taask.jpg"}
            title="Tassk"
            figma="https://www.figma.com/proto/HLS6XWJzJjfZAfafl3YXu6/Task-management-app?node-id=445-8052&t=tYhmJTxzb4kfJb5O-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2&starting-point-node-id=445%3A8122&show-proto-sidebar=1https://www.figma.com/proto/HLS6XWJzJjfZAfafl3YXu6/Task-management-app?node-id=420-7149&t=tYhmJTxzb4kfJb5O-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2&starting-point-node-id=420%3A7255&show-proto-sidebar=1https://www.figma.com/proto/HLS6XWJzJjfZAfafl3YXu6/Task-management-app?node-id=420-7211&t=tYhmJTxzb4kfJb5O-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2&starting-point-node-id=420%3A7255&show-proto-sidebar=1"
            text="The primary audience for the task management app consists of users working in IT companies. The main goal of this app is to enable users to work effectively and efficiently by prioritizing deadlines and tasks."
          />
          <Project
            img={"./images/Healthapp.png"}
            title="Health App"
            figma="https://www.figma.com/proto/iXi2ChI0nOwo3D3qPWXz7m/Health-app?node-id=424-2483&t=vQFsUL1HYAMFtaV0-1&scaling=min-zoom&content-scaling=fixed&page-id=424%3A2283&starting-point-node-id=424%3A2491"
            text="The problem we are addressing is managing health issues, specifically controlling blood pressure and sugar levels by tracking vital signs. Our solution aims to provide users with a comprehensive tool for monitoring their health metrics, offering personalized insights and alerts to help them maintain optimal health."
          />
          <Project
            img={
              "https://techlabs-community.slack.com/files/U059XU3UWCE/F06T8LBV42G/configurator.mov"
            }
            title="Book store"
            github="https://github.com/TechLabs-Berlin/ws24-reuse-record"
            text="By designing this book store library website, we aim to create a valuable resource that enhances the user's ability to find and explore books easily. I used the latest technologies such as React.js with Tailwind CSS for the frontend and Node.js with Express for the backend."
          />
          <Project
            title="portfolio project"
            web="https://pr4t1ma.github.io/portfolio/"
            figma="https://www.figma.com/proto/79LusJXlmKPZBcxbRdFgOi/Portfolio?node-id=1195-1826&t=bqRRyxf5x7wAyxLr-1&scaling=min-zoom&content-scaling=fixed&page-id=45%3A240&starting-point-node-id=1101%3A1747"
            img={"./images/Portfolio.png"}
            text="This project was created to enhance my skills in HTML, CSS, and
          JavaScript. By working on this project, I aimed to deepen my
          understanding of front-end web development concepts and techniques.
          Throughout the process, I gained valuable experience in structuring
          web pages, styling elements with CSS, and implementing interactive
          features using JavaScript"
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
