import { Notification } from "../Notification";
import { YoutubeMenu } from "../YoutubeMenu/YoutubeMenu";

export const YoutubeHeader = () => {
  const items = [
    { label: "Home", href: "./" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="container mx-auto flex justify-between">
      <YoutubeMenu items={items} />
      <Notification />
    </div>
  );
};
