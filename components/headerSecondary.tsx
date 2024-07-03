import React, { useState } from "react";
import HeaderForm from "./HeaderForm";
import { Item } from "@/lib/data";

const HeaderSecondary: React.FC = () => {
  
  const [items, setItems] = useState<Item[]>([]); // Define state for items
  interface HeaderFormProps {
    addItemToList: (newItem: Item) => void; // Function to add item to list
  }
  


 

  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-orange-900 h-[3rem] w-full ">
      <p className="text-sm font-normal text-white">Things that I need </p>

      {/* Pass addItemToList function */}
      
    </div>
  );
};

export default HeaderSecondary;

