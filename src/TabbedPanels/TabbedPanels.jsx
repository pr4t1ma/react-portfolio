import { useState } from "react";
import { Panels } from "../Panels/Panels";
import { Tabs } from "../Tabs/Tabs";

export const TabbedPanels = () => {
  const [active, setActive] = useState(0);

  const items = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "Javascript" },
    { label: "React" },
  ];

  const panelsData = [
    {
      heading: "HTML My new data",
      subHeading: "subhead",
      date: "January 2022",
      text: "Honey lorem ipsum",
    },
    {
      heading: "CSS My new data",
      subHeading: "subhead",
      date: "January 2022",
      text: "Honey ",
    },
    {
      heading: "Javascript My new data",
      subHeading: "subhead",
      date: "January 2022",
      text: "Honey ",
    },
    {
      heading: "React My new data",
      subHeading: "subhead",
      date: "January 2022",
      text: "Honey ",
    },
  ];

  const onTabChangeHandler = (i) => {
    setActive(i);
  };
  return (
    <div className="container mx-auto lg:w-3/4 gap-10 grid grid-cols-7">
      <div className="mx-10 col-span-6 lg:col-span-3">
        <Tabs items={items} onTabChange={onTabChangeHandler} />
      </div>
      <div className=" mx-10 col-span-6 gap-7 align-center lg:col-span-4">
        {panelsData.map(
          (panelData, i) =>
            active === i && (
              <Panels
                heading={panelData.heading}
                date={panelData.date}
                text={panelData.text}
                subHeading={panelData.subHeading}
              />
            )
        )}
      </div>
    </div>
  );
};
