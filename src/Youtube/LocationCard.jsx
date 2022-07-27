export const LocationCard = ({
  profileimg,
  name,
  locationimg,
  title,
  text,
}) => {
  return (
    <div>
      <div className="profile-img ">
        <img className="rounded-full" src={profileimg} alt="" />
        <div className="username my-2">{name}</div>
      </div>
      <img className="w-12/12" src={locationimg} alt="" />
      <h1 className="text-md  my-2">Location card</h1>
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
  );
};
