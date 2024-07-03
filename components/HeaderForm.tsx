import React, { useState } from "react";
import { Item } from "@/lib/data";

interface HeaderFormProps {
  addItemToList: (newItem: Item) => void; // Function to add item to list
}

const HeaderForm: React.FC<HeaderFormProps> = ({ addItemToList }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity
  

  const handleAddItem = () => {
    if (description.trim() === "") {
      return;
    }

    // Create new item object
    const newItem: Item = {
      id: Math.random(), // Generate a random ID (replace with your logic)
      description: description,
      quantity: quantity,
      packed: false, // Example default packed status
    };

    // Call parent component function to add item to list
    addItemToList(newItem);

    // Clear input fields after adding item
    setDescription("");
    setQuantity(1); // Reset to default quantity or clear as needed
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value); // Update quantity state
  };

  return (
    <div className="flex flex-row gap-4 px-4">
      <label className="flex items-center text-center">Amount</label>
      <select
        value={quantity}
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
        className="form-select mt-1 block w-16 pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      > 
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description state
        placeholder="Add item"
        className="ml-2 mt-1 block pl-3 pr-6 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
      

      <button
        onClick={handleAddItem} // Call handleAddItem on button click
        className=" flex flex-auto rounded bg-gray-800 text-white text-center items-center justify-center w-[5rem] px-14 "
      >
        Add
      </button>
    </div>
  );
};

export default HeaderForm;
