import { LocationCard } from "./LocationCard";

export const Location = () => {
  const locationDatas = [
    {
      profileimg:
        "https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-250nw-1836020750.jpg",
      locationimg:
        "https://ontheworldmap.com/switzerland/switzerland-location-map.jpg",
      name: "misu",
      title: "Swizerland",
      text: "this is a text could be change and change due to the contain reason",
    },
    {
      profileimg:
        "https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg",
      name: "Nisu",
      title: "Neatherland",
      text: "this could be change and change due to the contain reason",
    },
  ];
  return (
    <div className="col-span-2 text-sm ">
      <div>
        {locationDatas.map((locationData) => (
          <LocationCard
            key={locationData.title}
            profileimg={locationDatas.profileimg}
            name={locationData.name}
            locationimg={locationData.locationimg}
            title={locationData.title}
            text={locationData.text}
          />
        ))}
      </div>
    </div>
  );
};
