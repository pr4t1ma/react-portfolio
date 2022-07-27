import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const requestsData = [
  { name: "Sabrina", age: "20" },
  { name: "Sabrina", age: "20" },
  { name: "Sabrina", age: "20" },
];

export const UserInformation = ({
  photo,
  message,
  date,
  mystories,
  notification,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto flex flex-col grid-col-2 gap-4">
      <div className="flex relative">
        <div className="user-photo w-3/12 height-3/12 rounded-full my-4 mx-auto">
          <img className="rounded-full align-center" src={photo} alt="" />
        </div>
        <div className="frends text-oxblood absolute top-10 right-0 sm:top-5 ">
          <FontAwesomeIcon
            icon={faUser}
            onClick={(e) => {
              setShow((old) => !old);
            }}
          />
          {show &&
            requestsData.map((requestData) => <div>{requestData.name}</div>)}
        </div>
      </div>

      <div className="message my-2  text-center w-9/ 20">{message}</div>

      <div
        className=" text-center my-1 border-y py-3"
        onClick={(e) => setShow(false)}
      >
        {mystories}
      </div>
    </div>
  );
};
