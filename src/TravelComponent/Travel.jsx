import { YoutubeHeader } from "../Youtube/YoutubeHeader/youtubeHeader";
import { UserInformation } from "../Youtube/UserInformation";
import { TravelContent } from "../Youtube/TravelContent";
import { Location } from "../Youtube/Location";

export const Travel = () => {
  const usersData = [
    {
      photo:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Baman",
      message:
        "hello i want to be your frend and you accept please i send frend request to you",
      mystories: "long stories",
    },
    {
      name: "Shamba",
      message:
        "ant to be your frend and you accept please i send frend request to you",
      mystories: "stories",
    },
    {
      name: "Markal",
      message:
        "hello i r frend and you accept please i send frend request to you",
      mystories: "long stories",
    },
  ];
  return (
    <div className="bg-white mx-auto shadow-2xl p-2">
      <YoutubeHeader />
      <div className="grid md:grid-cols-12 md:gap-3">
        <div className="col-span-2 md:col-span-3 gap-3 ">
          {usersData.map((userData) => (
            <UserInformation
              key={userData.name}
              photo={userData.photo}
              name={userData.name}
              message={userData.message}
              mystories={userData.mystories}
            />
          ))}
        </div>
        <div className="col-span-7 md:col-span-7 ">
          <TravelContent />
        </div>
        <div className="span-3 md:col-span-2">
          <Location />
        </div>
      </div>
    </div>
  );
};
