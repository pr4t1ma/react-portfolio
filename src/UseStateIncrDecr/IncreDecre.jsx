import React, { useState } from "react";
export const IncreDecre = () => {
  const [isformOpen, setFormOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };

  const addItem = () => {
    if (!newItem) {
      alert("enter new item");
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
    console.log(id);
  };

  return (
    <div>
      <div className="to-do-list">
        <h1>Todo List</h1>
        <button onClick={openForm}>Add Item</button>

        {isformOpen && (
          <div className="">
            <input
              type="text"
              placeholder="Add Itemes"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <button onClick={closeForm}>close</button>
          </div>
        )}
        <div className="list">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.value}
                <button onClick={() => onDelete(item.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
