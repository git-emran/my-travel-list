import React, { useState } from "react";
import { initialItems, Item } from "@/lib/data";
import HeaderForm from "./HeaderForm";

const List: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  // Function to add a new item to the list
  const addItemToList = (newItem: Item) => {
    setItems([...items, newItem]); // Add newItem to items state
  };

  // Function to delete an item from the list
  const deleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="w-full flex-col flex gap-2 items-center mt-20 justify-center h-full">
      
      {items.map((item: Item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <span className={`text-sm ${item.packed ? "line-through" : ""}`}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => deleteItem(item.id)}>❌</button>
        </div>
      ))}
      <div className="">
        <HeaderForm addItemToList={addItemToList} />
      </div>

      {/* Render HeaderForm and pass addItemToList as a prop */}
    </div>
  );
};

export default List;
