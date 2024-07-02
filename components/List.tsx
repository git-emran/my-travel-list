"use Cl";

import React, { useState } from "react";
import { initialItems, Item } from "@/lib/data";
import HeaderForm from "./HeaderForm"; // Import HeaderForm component

export default function List() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const addItemToList = (newItem: Item) => {
    setItems([...items, newItem]); // Add newItem to items state
  };

  return (
    <div className="w-full flex-row flex gap-40 items-center mt-20 justify-center h-full">
      {items.map((item: Item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <span className={`text-lg ${item.packed ? "line-through" : ""}`}>
            {item.quantity} {item.description}
          </span>
          <button>❌</button>
        </div>
      ))}
      
      {/* Pass addItemToList function to HeaderForm */}
    </div>
  );
}
