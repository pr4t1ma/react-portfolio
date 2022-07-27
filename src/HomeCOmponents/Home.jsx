import { Intro } from "../Intro/Intro";
import { BannerText } from "../BannerText/BannerText";
import { Heading } from "../Heading/Heading";
export const Home = () => {
  return (
    <div>
      <Intro />
      <Heading text="About me" />
      <BannerText />
    </div>
  );
};
