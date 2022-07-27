import { Notification } from "../Notification";
import { YoutubeMenu } from "../YoutubeMenu/YoutubeMenu";

export const YoutubeHeader = () => {
  const items = [
    { label: "Home" },
    { label: "About" },
    { label: "Blog" },
    { label: "Contact" },
  ];
  return (
    <div className="container mx-auto flex justify-between">
      <YoutubeMenu items={items} />
      <Notification />
    </div>
  );
};
