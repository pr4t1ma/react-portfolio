import "./App.css";

import { BannerText } from "./BannerText/BannerText";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Heading } from "./Heading/Heading";
import { Intro } from "./Intro/Intro";
import { Project } from "./Project/Project";
import { FeaturedProject } from "./FeaturedProject/FeaturedProject";
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
      <Heading text="My featured Projects" />
      <FeaturedProject />
      <div className="Projects container  mx-auto grid gap-3 grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
        <Project />
        <Project />
        <Project />
      </div>

      <Footer />
    </div>
  );
}

export default App;
