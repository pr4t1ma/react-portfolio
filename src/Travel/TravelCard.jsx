import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TravelCard = ({ img, place, heading, text, date }) => {
  return (
    <div className="container mx-auto my-5 shadow-sm align-center p-5 gap-2 text-m relative ">
      <div className="travel-img ">
        <img className="object-fit" src={img} alt="" />
      </div>
      <div className="travel-place bg-sky-500 shadow-2xl-blue opacity-80 w-5/12 text-white p-2 absolute top-10 left-0 ">
        {place}
      </div>
      <div className="travel-heading my-3">
        <h1 className="text-md ">{heading}</h1>
      </div>
      <div className="travel-text my-1">
        <p>{text}</p>
      </div>
      <div className="travel-time flex justify-between my-3">
        <div className="travel-date text-sm">{date}</div>
        <div className=" flex items-end gap-3">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </div>
  );
};
