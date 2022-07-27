import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Notification = () => {
  return (
    <div className="flex  gap-5  items-center py-2 px-5">
      <div className="notification-icon">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="flex items-center py-2 px-5 ">
        <input className="border-y-2 p-2 " type="text" />
        <button className=" button ">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};
