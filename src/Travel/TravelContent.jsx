import { TravelCard } from './TravelCard';
import { cards } from './travelContentData';
export const TravelContent = () => {
  return (
    <div className=" grid grid-cols-1 md:gird-cols-2">
      <div className="container mx-auto flex-col gap-4 p-2 my-2 md:flex-row  ">
        {cards.map((card) => (
          <TravelCard
            key={card.img}
            img={card.img}
            place={card.place}
            heading={card.heading}
            text={card.text}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};
