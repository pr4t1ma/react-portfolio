import { TravelCard } from "./TravelCard";

export const TravelContent = () => {
  const cards = [
    {
      img: "https://www.planetware.com/wpimages/2020/06/best-cheap-places-to-travel-may-santorini-greece.jpg",
      place: "Greace",
      heading: "city of greaceland",
      text: "this is a text containent, there might be a more text in this field",
      date: "march-2021",
    },
    {
      img: "https://cdn.cnn.com/cnnnext/dam/assets/190517174512-15-summer-travel-tahiti-super-169.jpg",
      place: "greaceland",
      heading: "city of greaceland",
      text: "this is a text containent, there might be a more text in this field",
      date: "jun-2021",
    },
    {
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/02/Italy-Cinque-Terra-coast-houses-Intrepid-Travel.jpg",
      place: "reaceland",
      heading: "city of greaceland",
      text: "this is a text containent, there might be a more text in this field",
      date: "august-2021",
    },
  ];
  return (
    <div className=" ">
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
