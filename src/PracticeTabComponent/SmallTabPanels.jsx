import { SmallTab } from "./SmallTab";
import React, { useState } from "react";
import { SmallPanels } from "./SmallPanels";

export const SmallTabPanels = () => {
  const [active, setActive] = useState(0);

  const items = [
    { label: "apple" },
    { label: "ball" },
    { label: "cat" },
    { label: "ball" },
    { label: "ball" },
  ];
  const panelData = [
    {
      heading: "Apple",
      subHeading: "IS red and green colourS",
      date: "2023",
      text: "Applea are in diffefrent color and very healthy deit",
    },
    {
      heading: "ApBallple",
      subHeading: "IS red and green colourS",
      date: "2023",
      text: "Ball are in diffefrent color and very healthy deit",
    },
    {
      heading: "cat",
      subHeading: "IS red and green colourS",
      date: "2023",
      text: "Ball are in diffefrent color and very healthy deit",
    },
  ];

  const onTabChangeHandler = (i) => {
    setActive(i);
  };
  return (
    <div className="flex container  mx-auto gap-2">
      <SmallTab items={items} onTabChange={onTabChangeHandler} />
      {panelData.map(
        (panelData, i) =>
          active === i && (
            <SmallPanels
              heading={panelData.heading}
              subHeading={panelData.subHeading}
              date={panelData.date}
              text={panelData.text}
            />
          )
      )}
    </div>
  );
};
