import React, { useState } from "react";

export const PracticeState = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState();
  const [screenNumber, setScreenNumber] = useState("0");

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const addItem = () => {
    if (!newItem) {
      alert("type new item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  const buttonClickHandler = (e) => {
    console.log(e.target.value);
    setScreenNumber((old) => {
      if (e.target.value === "AC") {
        return "0";
      } else if (e.target.value === "=") {
        return eval(screenNumber);
      } else {
        return old === "0" ? e.target.value : old + e.target.value;
      }
    });
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={openForm}>Add Item Here</button>
      {isFormOpen && (
        <div>
          <input
            type="text"
            placeholder="add items here "
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={addItem}>Add Item</button>
          <button onClick={closeForm}>close form </button>
        </div>
      )}

      <div className="todo-list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.value}
              <button onClick={(e) => deleteItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="calculator conatiner bg-blue-400 bg-opacity-30 p-8 mx-auto  w-2/5  rounded-xl shadow-2xl my-20 ">
        <h1>Calculator</h1>
        <div className="screen bg-white p-5 my-4 shadow-xl text-black">
          {screenNumber}
        </div>
        <div className=" grid grid-cols-4 gap-2">
          <button onClick={buttonClickHandler} value="1">
            1
          </button>
          <button onClick={buttonClickHandler} value="2">
            2
          </button>
          <button onClick={buttonClickHandler} value="3">
            3
          </button>
          <button onClick={buttonClickHandler} value="4">
            4
          </button>
          <button onClick={buttonClickHandler} value="5">
            5
          </button>
          <button onClick={buttonClickHandler} value="6">
            6
          </button>
          <button onClick={buttonClickHandler} value="7">
            7
          </button>
          <button onClick={buttonClickHandler} value="8">
            8
          </button>
          <button onClick={buttonClickHandler} value="9">
            9
          </button>
          <button onClick={buttonClickHandler} value="0">
            0
          </button>
          <button onClick={buttonClickHandler} value="=">
            =
          </button>
          <button onClick={buttonClickHandler} value="+">
            +
          </button>
          <button onClick={buttonClickHandler} value="/">
            /
          </button>
          <button onClick={buttonClickHandler} value="-">
            -
          </button>
          <button onClick={buttonClickHandler} value="*">
            *
          </button>
          <button onClick={buttonClickHandler} value="AC">
            Ac
          </button>
        </div>
      </div>
    </div>
  );
};
