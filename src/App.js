import "./App.css";

import { BannerText } from "./BannerText/BannerText";
import { Header } from "./Header/Header";
import { Heading } from "./Heading/Heading";
import { Intro } from "./Intro/Intro";
import { MyMoreProjects } from "./MyMoreProjects/MyMoreProjects";

import { Myprojects } from "./MyProjects/MyProjects";
import { TabbedPanels } from "./TabbedPanels/TabbedPanels";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Heading text="About me" />
      <BannerText />
      <Heading text="My Experence" />
      <TabbedPanels />
      <Heading text="My feature Projects" />
      <Myprojects />
      <MyMoreProjects />
    </div>
  );
}

export default App;
