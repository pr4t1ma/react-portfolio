import "./App.css";

import { BannerText } from "./BannerText/BannerText";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Heading } from "./Heading/Heading";
import { Intro } from "./Intro/Intro";
import { Project } from "./Project/Project";
import { FeaturedProject } from "./FeaturedProject/FeaturedProject";
import { TabbedPanels } from "./TabbedPanels/TabbedPanels";
import { GetInTouch } from "./GetInTouch/GetInTouch";
import { TodoList } from "./TodoList/TodoList";
import { TestTodoList } from "./SimpleProject/PracticeTodolist/TestTodoList";
import { Calculator } from "./Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Heading text="About me" />
      <BannerText />
      <Heading text="My Experence" />
      <TabbedPanels />
      <Heading text="My featured Projects" />
      <FeaturedProject />
      <div className="Projects container  mx-auto grid gap-3 grid-cols-1  my-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:my-10">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="container mx-auto place-items-center w-fit block mb-20 shadow-2xl shadow-gray">
        <a className=" button">See more</a>
      </div>
      <GetInTouch
        title="whats next"
        subtitle="Get in touch"
        text="loremipsum the most be more text about personal information hobbies and other topic most be here written  "
      />
      <TodoList />

      <TestTodoList />
      <Calculator />

      <Footer />
    </div>
  );
}

export default App;
