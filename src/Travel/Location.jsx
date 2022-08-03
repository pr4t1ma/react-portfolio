import { locationDatas } from './LocationData';
import { LocationCard } from './LocationCard';

export const Location = () => {
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
