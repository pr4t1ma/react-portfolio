export const NotificationItem = ({ img, name, message }) => {
  return (
    <div className=" flex p-4 bg-warmGray-200 shadow-2xl my-3 ">
      <div className="notification-items">
        <div className="userImg basis-3/12 p-0 m-0 ">
          <img
            className="rounded-full center w-5/12 inline "
            src={img}
            alt=""
          />
        </div>
        <div className="text-left basis-9/12 w-7/12">
          <h4 className="mb-1 ">{name}</h4>
          <div className="userMessage">{message}</div>
        </div>
      </div>
    </div>
  );
};
