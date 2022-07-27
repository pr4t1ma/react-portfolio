import { useState } from "react";
export const TodoTest = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newItem, setNewItem] = useState(0);

  const addItem = () => {};

  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto bg-white shadow-2xl my-6 p-5">
      <h1>To do Test</h1>
      <button onClick={openForm}>FormOpen</button>

      {isFormOpen && (
        <div>
          <input
            type="text"
            placeholder="Add todo list"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={addItem}>Add item</button>
          <button onClick={closeForm}>closeForm</button>
        </div>
      )}
    </div>
  );
};
