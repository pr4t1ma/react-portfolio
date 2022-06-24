import { Panels } from "../Panels/Panels";
import { Tabs } from "../Tabs/Tabs";

export const TabbedPanels = () => {
  const items = [
    { label: "Html", active: true },
    { label: "Css" },
    { label: "javascript" },
    { label: "React" },
  ];
  return (
    <div className="container mx-auto lg:w-3/4 gap-10 grid grid-cols-7">
      <div className="mx-10 col-span-6 lg:col-span-3">
        <Tabs items={items} />
      </div>
      <div className=" mx-10 col-span-6 gap-7 align-center lg:col-span-4">
        <Panels />
        <Panels />
      </div>
    </div>
  );
};
