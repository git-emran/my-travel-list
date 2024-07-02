import React, { useState } from "react";
import HeaderForm from "./HeaderForm";
import { Item } from "@/lib/data";

const HeaderSecondary: React.FC = () => {
  
  const [items, setItems] = useState<Item[]>([]); // Define state for items

  const addItemToList = (newItem: Item) => {
    setItems([...items, newItem]); // Add newItem to items state
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-orange-900 h-[3rem] w-full ">
      <p className="text-sm font-normal text-white">Things that I need </p>
      
      {/* Pass addItemToList function */}
    </div>
  );
};

export default HeaderSecondary;
