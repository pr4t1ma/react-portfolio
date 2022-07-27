import { Notification } from "../../Notification";
import { YoutubeMenu } from "../YoutubeMenu";

export const YoutubeHeader = () => {
  const items = [
    { label: "Home" },
    { label: "Home" },
    { label: "Home" },
    { label: "Home" },
  ];
  return (
    <div className="container mx-auto flex justify-between">
      <YoutubeMenu items={items} />
      <Notification />
    </div>
  );
};
