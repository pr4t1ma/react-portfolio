import React, { useState } from "react";
export const TestTodoList = () => {
  const [isFormOpen, setFormOPen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const openForm = () => {
    setFormOPen(true);
  };

  const closeForm = () => {
    setFormOPen(false);
  };

  const addItem = () => {
    if (!newItem) {
      alert("please tyoe here");
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
  };

  const onDelete = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="container mx-auto w-2/4 bg-gray-200 bg-opacity-40 text-center my-10 p-4">
      <h2>To do List</h2>
      <div className="button" onClick={openForm}>
        Add new items
      </div>
      {isFormOpen && (
        <div className="div gap-3 my-4">
          <input
            className="p-2"
            type="text"
            name=""
            id=""
            placeholder="Tyoe Here"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="mr-3" onClick={addItem}>
            Add
          </button>
          <button onClick={closeForm}>Close</button>
        </div>
      )}
      <div className="to-do">
        <ul className=" my-2 items-center">
          {items.map((item) => (
            <li className="gap-3 my-2 flex" key={item.id}>
              {item.value}
              <button
                className="ml-3 px-3 py-1"
                onClick={(e) => onDelete(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
